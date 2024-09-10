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
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        console.log(data);
        // Access the first element of the posts array
        setPosts(data.posts[0]); // Flatten the structure
      } catch (error) {
        console.error("Fetch error:", error);
        alert("There was an error loading data");
      }
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <NavBar />
      {posts.length !== 0 ? <Posts posts={posts} /> : <p>Loading posts...</p>}
    </div>
  );
}

export default PostPage;
