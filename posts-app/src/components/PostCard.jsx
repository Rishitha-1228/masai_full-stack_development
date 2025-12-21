import { useContext, useState } from "react";
import { PostsContext } from "../context/PostsContext";
import EditPost from "./EditPost";

export default function PostCard({ post }) {
  const { deletePost } = useContext(PostsContext);
  const [edit, setEdit] = useState(false);

  return (
    <div className="card">
      {edit ? (
        <EditPost post={post} setEdit={setEdit} />
      ) : (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </>
      )}
    </div>
  );
}
