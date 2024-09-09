import styles from "./CreatePost.module.css";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
function CreatePost() {
  const [param] = useSearchParams();
  const email = param.get("email");

  const [message, setMessage] = useState("");

  const sendPosData = () => {
    const url = `http://localhost:8080/sendPosData?email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`;
    
    // You can either:
    // Option 1: Redirect to this URL (you'll see the response in the browser)
     window.location.href = url;

    // Option 2: Fetch the data and display the result in the React app
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        console.log(data); // Handle the response from the server
      });
  };
  return (
    <>
      <div className={styles.title}>Create Post</div>
     
        <textarea
          type="text"
          placeholder="What's new? Share here..."
          rows="7"
          className="form-control input-lg p-text-area"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
<br></br>
  <button className={styles.button} onClick={sendPosData}>Post</button>
     
    </>
  );
}

export default CreatePost;
