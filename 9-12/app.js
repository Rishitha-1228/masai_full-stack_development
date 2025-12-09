/** app.js
 * - Real-time sync from Firestore (onSnapshot)
 * - Add, Update (author), Delete
 * - View Details modal
 * - Search (client-side)
 * - Defensive image fallback
 */

const bookList = document.getElementById("bookList");
const addBookForm = document.getElementById("addBookForm");
const seedBtn = document.getElementById("seedBtn");
const searchInput = document.getElementById("searchInput");

// Modal elements
const detailsModal = document.getElementById("detailsModal");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalAuthor = document.getElementById("modalAuthor");
const modalPrice = document.getElementById("modalPrice");
const modalId = document.getElementById("modalId");

// Local cache for search filter
let allBooks = []; // { id, ...data }

function sanitize(str = "") {
  return String(str);
}

function cardTemplate(book) {
  const { id, title, author, price, coverImageURL } = book;

  return `
    <article class="card" data-id="${id}">
      <img class="card__img" src="${coverImageURL || ""}"
           alt="${sanitize(title)} cover"
           onerror="this.src='https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=60&auto=format&fit=crop'"/>
      <div class="card__body">
        <h3 class="card__title" title="${sanitize(title)}">${sanitize(title)}</h3>
        <div class="card__meta">Author: <strong>${sanitize(author)}</strong></div>
        <div class="card__meta card__price">Price: ₹${Number(price) || 0}</div>
        <div class="card__actions">
          <button class="btn small update" data-action="update" data-id="${id}">Update Author</button>
          <button class="btn small delete" data-action="delete" data-id="${id}">Delete</button>
          <button class="btn small view"   data-action="view"   data-id="${id}">View Details</button>
        </div>
      </div>
    </article>
  `;
}

function renderList(list) {
  bookList.innerHTML = list.map(cardTemplate).join("");
}

// Real-time Firestore listener
db.collection("books").orderBy("title").onSnapshot((snapshot) => {
  allBooks = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  applyFilter();
}, (err) => {
  console.error("Realtime listener error:", err);
});

// Add Book
addBookForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const price = Number(document.getElementById("price").value);
  const imageURL = document.getElementById("imageURL").value.trim();

  if (!title || !author || isNaN(price) || !imageURL) {
    alert("Please fill all fields correctly.");
    return;
  }

  try {
    await db.collection("books").add({
      title, author, price, coverImageURL: imageURL,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    addBookForm.reset();
  } catch (err) {
    console.error("Add book failed:", err);
    alert("Failed to add book. Check console for details.");
  }
});

// Event delegation for card buttons
bookList.addEventListener("click", async (e) => {
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;

  const id = btn.dataset.id;
  const action = btn.dataset.action;

  if (action === "delete") {
    const ok = confirm("Delete this book?");
    if (!ok) return;
    try {
      await db.collection("books").doc(id).delete();
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete.");
    }
  }

  if (action === "update") {
    try {
      const doc = await db.collection("books").doc(id).get();
      if (!doc.exists) return alert("Book not found.");
      const current = doc.data().author || "";
      const next = prompt("Enter new author name:", current);
      if (next && next.trim() && next !== current) {
        await db.collection("books").doc(id).update({ author: next.trim() });
      }
    } catch (err) {
      console.error("Update author failed:", err);
      alert("Failed to update author.");
    }
  }

  if (action === "view") {
    try {
      const doc = await db.collection("books").doc(id).get();
      if (!doc.exists) return alert("Book not found.");
      const data = doc.data();
      openModal({
        id: doc.id,
        title: data.title,
        author: data.author,
        price: data.price,
        coverImageURL: data.coverImageURL
      });
    } catch (err) {
      console.error("View details failed:", err);
      alert("Failed to load details.");
    }
  }
});

// Search/filter
searchInput.addEventListener("input", applyFilter);
function applyFilter() {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) return renderList(allBooks);
  const filtered = allBooks.filter(b =>
    (b.title || "").toLowerCase().includes(q) ||
    (b.author || "").toLowerCase().includes(q)
  );
  renderList(filtered);
}

// Modal helpers
function openModal(book) {
  modalTitle.textContent = book.title || "";
  modalAuthor.textContent = book.author || "";
  modalPrice.textContent = Number(book.price) || 0;
  modalId.textContent = book.id;
  modalImage.src = book.coverImageURL || "";
  modalImage.alt = `${book.title} cover`;
  modalImage.onerror = () => {
    modalImage.src = "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=60&auto=format&fit=crop";
  };
  detailsModal.setAttribute("aria-hidden", "false");
}
function closeModal() {
  detailsModal.setAttribute("aria-hidden", "true");
}
modalClose.addEventListener("click", closeModal);
detailsModal.addEventListener("click", (e) => {
  if (e.target === detailsModal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Seed dummy data once
seedBtn.addEventListener("click", async () => {
  try {
    await seedBooks(db);
    alert("Dummy books inserted!");
  } catch (e) {
    console.error(e);
    alert("Seeding failed. See console.");
  }
});
