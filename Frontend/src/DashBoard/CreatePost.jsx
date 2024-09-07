function CreatePost() {
  return (
    <form
      action="/postData"
      method="post"
      className="flex d-flex flex-wrap gap-3 "
      style={{ padding: "1rem" }}
    >
      <textarea
        placeholder="Whats new idea? share here.."
        rows="2"
        className="form-control input-lg p-text-area"
        name="content"
      ></textarea>
      <button className="btn btn-warning pull-right">Post</button>
    </form>
  );
}

export default CreatePost;
