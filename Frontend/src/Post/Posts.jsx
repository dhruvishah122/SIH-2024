import styles from "./Posts.module.css";

function Posts({ posts }) {
  return (
    <div className={styles["post-container"]}>
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </div>
  );
}

function Post({ post }) {
  const id = {
    id: post.id,
  };

  return (
    <div className={`${styles["blog-card"]}`}>
      <div className={styles.meta}>
        <div className={styles.photo}>
          <img src="startupimage.jpg" style={{ width: "15rem" }} />
        </div>
        <ul className={styles["details"]}>
          <li className={styles["date"]}>Aug. 24, 2015</li>
        </ul>
      </div>
      <div className={styles["description"]}>
        <h1>{post.name}</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
          dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque
          ad aliquam facilis numquam. Veritatis, sit.
        </p>
        <p className={styles["read-more"]}>Read more</p>
      </div>
    </div>
  );
}

export default Posts;
