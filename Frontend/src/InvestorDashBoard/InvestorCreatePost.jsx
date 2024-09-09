import styles from "./InvestorCreatePost.module.css";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

function InvestorCreatePost() {
  const [param] = useSearchParams();
  const name = param.get("name");

  const [message, setMessage] = useState("");

  const sendData = () => {
    const url = `http://localhost:8080/send-data?name=${encodeURIComponent(name)}&message=${encodeURIComponent(message)}`;
    
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
    <div>
       <textarea
        type="text"
          placeholder="What's new? Share here..."
          rows="7"
          className="form-control input-lg p-text-area"
          name="content"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
<br></br>
  <button className={styles.button} onClick={sendData}>Post</button>
</div>
  );
}

export default InvestorCreatePost;
