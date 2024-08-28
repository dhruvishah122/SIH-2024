import { useEffect, useState } from "react";
import Posts from "./posts";
import NavBar from "../components/NavBar";

const Base_URL = "http://localhost:700/";
function PostPage() {
  const [posts, setPosts] = useState([]);

  useEffect(function () {
    async function FetchInvestors() {
      try {
        const res = await fetch(`${Base_URL}posts`);
        const data = await res.json();
        console.log(data);
        setPosts(data);
      } catch {
        alert("There was an error loading data");
      }
    }
    FetchInvestors();
  }, []);
  return (
    <div>
      <NavBar />
      {posts.length != 0 && <Posts posts={posts} />}
    </div>
  );
}

export default PostPage;
