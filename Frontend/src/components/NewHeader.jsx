import styles from "./NewHeader.module.css";
import { Link } from "react-router-dom";

export default function NewHeader() {
  return (
    <>
      <div
        className={`${styles.mainContainer} d-flex justify-content-around container `}
      >
        {/* Card - 1 */}

        <div className={`${styles.box} text-white rounded-5 py-5 px-4`}>
          <h1 className={`${styles.headingg} text-center pb-4`}>Startup</h1>
          <ul>
            <li>
              <Link to="/startups">Registered Startups</Link>
            </li>
            <li>
              <Link to="/investors">Funding Agency</Link>
            </li>
            <li>
              <Link to="/post">Connect with Community</Link>
            </li>
            <li>
              <Link to="/startup">About</Link>
            </li>
          </ul>
        </div>

        {/* Card - 2 */}

        <div className={`${styles.box} text-white rounded-5 py-5 px-4`}>
          <h1 className={`${styles.headingg} text-center pb-4`}>Research</h1>
          <ul>
            <li>
              <Link to="/ResearchHomePage">Registered Research</Link>
            </li>
            <li>
              <Link to="/post">Connect with Community</Link>
            </li>
            <li>
              <Link to="/ResearchHomePage">About</Link>
            </li>
          </ul>
        </div>

        {/* Card - 3 */}

        <div className={`${styles.box} text-white rounded-5 py-5 px-4`}>
          <h1 className={`${styles.headingg} text-center pb-4`}>IPR</h1>
          <ul>
            <li>
              <Link to="/iprhomepage">File Your Patent</Link>
            </li>
            <li>
              <Link to="/iprhomepage">Explore IPR Resources</Link>
            </li>
            <li>
              <Link to="/iprhomepage">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
