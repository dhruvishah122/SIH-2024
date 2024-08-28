import { useEffect, useState } from "react";
import Posts from "./posts";
import NavBar from "../components/NavBar";

const Base_URL = "http://localhost:700/";
function PostPage() {
  const [posts, setPosts] = useState([
    {
      name: "Dhruvi",
      id: "66cdc343b34e09ef2fe77303",
      content: "hello",
      email: "amazon@gmail.com",
      _id: "66ced6c3c580deaab2086b72",
      __v: 0,
    },
    {
      name: "Dhruvi",
      id: "66cdc343b34e09ef2fe77303",
      content: "hello",
      email: "amazon@gmail.com",
      _id: "66ced6c3c580deaab2086b72",
      __v: 0,
    },
    {
      name: "Dhruvi",
      id: "66cdc343b34e09ef2fe77303",
      content: "hello",
      email: "amazon@gmail.com",
      _id: "66ced6c3c580deaab2086b72",
      __v: 0,
    },
  ]);

  //   useEffect(function () {
  //     async function FetchInvestors() {
  //       try {
  //         const res = await fetch(`${Base_URL}posts`);
  //         const data = await res.json();
  //         console.log(data);
  //         setInvestors(data);
  //       } catch {
  //         alert("There was an error loading data");
  //       }
  //     }
  //     FetchInvestors();
  //   }, []);
  return (
    <div>
      <NavBar />
      {posts.length != 0 && <Posts posts={posts} />}
    </div>
  );
}

export default PostPage;
