# Node.js Architecture – Detailed Explanation

## 1. Node.js Architecture
- Node.js follows a single-threaded, event-driven, non-blocking I/O model.
- It is designed to handle multiple client requests efficiently.
- Heavy or blocking tasks are offloaded to background workers.

---

## 2. JavaScript Engine (V8)
- V8 is a JavaScript engine developed by Google.
- It converts JavaScript code into machine code.
- Node.js uses V8 for fast execution and memory management.

---

## 3. Node.js Core APIs
- Core APIs are built-in modules provided by Node.js.
- They allow access to system-level features.

### Examples
- `fs` – File system handling
- `http` – Create servers
- `path` – File path utilities
- `crypto` – Encryption and hashing

---

## 4. Native Bindings
- Native bindings connect JavaScript with C/C++ code.
- They allow Node.js to interact with the operating system.
- Used internally by core modules.

---

## 5. Event Loop
- The Event Loop is responsible for executing asynchronous callbacks.
- It runs continuously while the application is active.
- Ensures non-blocking execution.

---

## 6. libuv

### What is libuv?
- libuv is a C library used by Node.js.
- It provides asynchronous I/O support.

### Why Node.js Needs libuv
- JavaScript is single-threaded.
- Blocking operations must be handled in the background.

### Responsibilities of libuv
- Event loop management
- Thread pool handling
- File system and network operations

---

## 7. Thread Pool

### What is a Thread Pool?
- A set of background threads managed by libuv.
- Default size is 4 threads.

### Why Node.js Uses a Thread Pool
- To avoid blocking the main thread.
- To improve performance.

### Operations Handled by Thread Pool
- File system operations
- Cryptography
- Compression
- DNS lookups

---

## 8. Worker Threads

### What are Worker Threads?
- Separate threads that execute JavaScript code.
- Each worker has its own event loop.

### Why Worker Threads Are Needed
- To handle CPU-intensive tasks.
- To prevent blocking the main thread.

### Difference Between Thread Pool and Worker Threads

| Thread Pool | Worker Threads |
|------------|---------------|
| Used internally | Used by developers |
| Managed by libuv | Managed by Node.js |
| No JS execution | Executes JS code |

---

## 9. Event Loop Queues

### Macro Task Queue
- Handles timers and I/O callbacks.

#### Examples
- `setTimeout`
- `setInterval`
- `setImmediate`

---

### Micro Task Queue
- Handles promise callbacks and nextTick.

#### Examples
- `Promise.then`
- `async/await`
- `process.nextTick`

---

### Execution Priority
- Micro Task Queue runs before Macro Task Queue.

---

## Summary
- Node.js is built on V8 and libuv.
- Event Loop manages execution flow.
- Thread pool and worker threads handle heavy tasks.
