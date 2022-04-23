import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="grid">
      {posts.map((post) => (
        <div key={post.id} className="all">
          <h2>{post.id}</h2>
          <h6>Title</h6>
          <p>{post.title}</p>
          <h6>Body</h6>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
