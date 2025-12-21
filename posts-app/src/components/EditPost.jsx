import { useContext, useState } from "react";
import { PostsContext } from "../context/PostsContext";

export default function EditPost({ post, setEdit }) {
  const { updatePost } = useContext(PostsContext);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleSave = () => {
    updatePost(post.id, { ...post, title, body });
    setEdit(false);
  };

  return (
    <>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <textarea value={body} onChange={e => setBody(e.target.value)} />
      <button onClick={handleSave}>Save</button>
    </>
  );
}
