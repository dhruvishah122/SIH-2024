import { useEffect, useState } from "react";
import Posts from "./Posts";
import NavBar from "../components/NavBar";

const Base_URL = "/posts.json"; // Change the base URL to the local JSON file path

function PostPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(Base_URL);
        const data = await res.json();
        console.log(data);
        setPosts(data.posts); // Adjust this based on the structure of your JSON
      } catch {
        alert("There was an error loading data");
      }
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <NavBar />
      {posts.length !== 0 && <Posts posts={posts} />}
    </div>
  );
}

export default PostPage;
