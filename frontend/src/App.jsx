import React, { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState();

  const init = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/");
      const posts = await res.json();
      setPosts(posts);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    init();
  }, []);

  if (!posts) return null;

  return (
    <div>
      {posts?.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <span>{post.content}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
