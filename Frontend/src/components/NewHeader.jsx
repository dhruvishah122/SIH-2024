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
              <Link to="/startups">Browse Registered Startups</Link>
            </li>
            <li>
              <Link to="/investors">Explore Funding Agency</Link>
            </li>
            <li>
              <Link to="/post">Collaborate with Investors</Link>
            </li>
            <li>
              <Link to="/startup">Know More</Link>
            </li>
          </ul>
        </div>

        {/* Card - 2 */}

        <div className={`${styles.box} text-white rounded-5 py-5 px-4`}>
          <h1 className={`${styles.headingg} text-center pb-4`}>Research</h1>
          <ul>
            <li>
              <Link to="/ResearchHomePage">Browse Registered Research</Link>
            </li>
            <li>
              <Link to="/post">Collaborate with Investors</Link>
            </li>
            <li>
              <Link to="/ResearchHomePage">Know More</Link>
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
              <Link to="/iprhomepage">Know More</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
