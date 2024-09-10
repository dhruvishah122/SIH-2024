import styles from "./Posts.module.css";

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
        <h1>{post.name}</h1>
        <p><b>{post.email}</b></p>
        <p className={styles.content}>{post.content}</p>
        <p className={styles["read-more"]}>Read more</p>
      </div>
    </div>
  );
}

export default Posts;
