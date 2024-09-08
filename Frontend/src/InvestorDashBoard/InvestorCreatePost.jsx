import styles from "./InvestorCreatePost.module.css";

function InvestorCreatePost() {
  return (
    <>
      <div className={styles.title}>Create Post</div>
      <form
        action="/postData"
        method="post"
        className="flex d-flex flex-wrap gap-3 "
        style={{ padding: "1rem" }}
      >
        <textarea
          placeholder="Whats new idea? share here.."
          rows="7"
          className="form-control input-lg p-text-area"
          name="content"
        ></textarea>
        <button className={styles.button}>Post</button>
      </form>
    </>
  );
}

export default InvestorCreatePost;
