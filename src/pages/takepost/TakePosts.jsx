import React, { useEffect, useState } from "react";
import List from "../../component/PostList";

const TakePost = () => {
  const [posts, setPosts] = useState([]); //dung useState de luu tru
  const [loading, setLoad] = useState(true);
  useEffect(() => {
    // call API khi component mounted
    const takePosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      } finally {
        setLoad(false);
      }
    };

    takePosts();
  }, []); // mang rong de call api 1 lan khi mounted

  if (loading) {
    return <p>Loading...</p>;
  }

  //truyen du lieu xuong
  return <List baiViet={posts} />;
};

export default TakePost;
