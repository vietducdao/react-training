import React from "react";

const List = ({ baiViet }) => {
  return (
    <div>
      {baiViet.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
