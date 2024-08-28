import styles from "./Posts.module.css";

function Posts({ posts }) {
  console.log(posts);
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

  //   async function handleClick() {
  // Send a POST request to add a new user
  //     try {
  //       const res = await fetch("http://localhost:9001/ids", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(id),
  //       });
  //       const re = await fetch("http://localhost:8080/iProfile", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(id),
  //       });

  //       const redirectUrl = `http://localhost:8080/postProfile?name=${encodeURIComponent(
  //         post.name
  //       )}&email=${encodeURIComponent(post.email)}`;
  //       window.location.href = redirectUrl;
  //     } catch {
  //       alert("error");
  //     }
  //   }
  return (
    <div className={`${styles["blog-card"]}`}>
      <div className={styles.meta}>
        <div className={styles.photo}>
          <img src="startupimage.jpg" />
        </div>
        <ul className={styles["details"]}>
          <li className={styles["author"]}>
            <a href="#">John Doe</a>
          </li>
          <li className={styles["date"]}>Aug. 24, 2015</li>
          <li className={styles["tags"]}>
            <ul>
              <li>
                <a href="#">Learn</a>
              </li>
              <li>
                <a href="#">Code</a>
              </li>
              <li>
                <a href="#">HTML</a>
              </li>
              <li>
                <a href="#">CSS</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={styles["description"]}>
        <h1>Learning to Code</h1>
        <h2>Opening a door to the future</h2>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
          dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque
          ad aliquam facilis numquam. Veritatis, sit.
        </p>
        <p className={styles["read-more"]}>
          <a href="#">Read More</a>
        </p>
      </div>
    </div>
  );
}

export default Posts;
