import styles from "./Posts.module.css";
import { Link } from "react-router-dom";
const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "foodhealth.webp",
  "image5.png",
];

function Posts({ posts }) {
  return (
    <div className={styles["post-container"]}>
      {posts.map((post, index) => (
        <Post
          post={post}
          key={index}
          image={index < images.length ? images[index] : "startupimage.jpg"}
        />
      ))}
    </div>
  );
}

function Post({ post, image }) {
  // handleRequest function to send post.email in the URL
  const handleRequest = async (e) => {
    e.preventDefault(); // prevent default behavior of the Link

    try {
      const url = `http://localhost:8080/post-profile?email=${encodeURIComponent(post.email)}`;
      const response = await fetch(url);

      if (response.ok) {
        console.log("Email sent successfully in the URL");
      } else {
        console.error("Error sending email in the URL");

      }
      window.location.href = url;
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return (
    <div className={`${styles["blog-card"]}`}>
      <div className={styles.meta}>
        <div className={styles.photo}>
          <img src={image} style={{ width: "16rem", height: "14rem" }} />
        </div>
        <ul className={styles["details"]}>
          <li className={styles["date"]}>Aug. 24, 2024</li>
        </ul>
      </div>
      <div className={styles["description"]}>
        <h1>
          <Link to="#" onClick={handleRequest}>
            {post.name}
          </Link>
        </h1>
        <p>
          <b>{post.email}</b>
        </p>
        <p className={styles.content}>{post.content}</p>
        <p className={styles["read-more"]}>Read more</p>
      </div>
    </div>
  );
}

export default Posts;
