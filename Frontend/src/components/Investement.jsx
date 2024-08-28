import "./Investement.css";
import { Link } from "react-router-dom";
export default function Investement() {
  return (
    <>
      <div className="title">Investment</div>
      <div className=" bgcolor d-flex flex-column px-5 py-5 gap-4 mt-5">
        <div className=" d-flex flex-wrap justify-content-between px-5">
          <div className=" h-50 w-50 col-md-6 col-12 ">
            <div className="investmentInfo">
              <h3 className="py-3">Start Investing</h3>
            </div>
            <div className="investmentInfoTitle">
              <h5>
                Begin your journey into the world of investments by exploring a
                wide range of opportunities across various sectors. Whether
                you're a seasoned investor or just starting, our platform offers
                the tools and resources you need to make informed investment
                decisions and grow your portfolio.
              </h5>
            </div>
          </div>
          <div>
            {" "}
            <img
              src="./researchImage-1.jpg"
              className="imgg border rounded-5 border-white "
            ></img>
          </div>
        </div>
        <hr></hr>
        <div className=" d-flex flex-wrap flex-row justify-content-between px-5">
          <div>
            {" "}
            <img
              src="./researchImage-2.jpg"
              className="imgg border rounded-5 border-white "
            ></img>
          </div>
          <div className=" h-50 w-50  col-md-6 col-12 ">
            <div className="investmentInfo">
              <h3 className="py-3">Browse Investors</h3>
            </div>
            <div className="investmentInfoTitle">
              <h5>
                Explore our extensive network of experienced investors actively
                seeking innovative projects. By browsing through investor
                profiles, you can find potential partners whose expertise and
                resources align with your investment goals, helping you build
                valuable connections.
              </h5>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className=" d-flex flex-wrap flex-row justify-content-between px-5 ">
          <div className=" h-50 w-50  col-md-6 col-12 ">
            <div className="investmentInfo">
              <h3 className="py-3">Register as an Invester</h3>
            </div>
            <div className="investmentInfoTitle">
              <h5>
                Sign up as an investor and unlock access to exclusive investment
                opportunities. By registering, you'll join a dynamic community,
                receive personalized investment recommendations, and connect
                with entrepreneurs and projects that match your interests and
                financial objectives.
              </h5>
            </div>
          </div>
          <div>
            {" "}
            <img
              src="./researchImage-3.jpg"
              className="imgg border rounded-5 border-white "
            ></img>
          </div>
        </div>
        <hr></hr>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link to="/investors" className="btn--investors">
          <div style={{ marginBottom: "3rem" }}>Connect with Investors</div>
        </Link>
      </div>
    </>
  );
}
