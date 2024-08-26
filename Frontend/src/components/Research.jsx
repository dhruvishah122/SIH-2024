import "./Research.css";

export default function Research() {
  return (
    <>
      <div className="title">Research</div>
      <div className=" bgcolor d-flex flex-column px-5 py-5 gap-4 mt-5">
        <div className=" d-flex flex-wrap justify-content-between px-5">
          <div className=" h-50 w-50 col-md-6 col-12 ">
            <div className="researchInfo">
              <h3 className="py-3">Ongoing Projects</h3>
            </div>
            <div className="researchInfoTitle">
              <h5>
                The Ongoing Projects section highlights the cutting-edge
                research initiatives taking place across Gujarat. This section
                provides an in-depth look at the state’s innovative projects,
                detailing their objectives, methodologies, and progress. By
                showcasing these efforts, Gujarat aims to inspire and engage the
                research community, driving further advancements and solutions
                that benefit the state and beyond.
              </h5>
            </div>
          </div>
          <div>
            {" "}
            <img
              src="./innovation1.jpg"
              className="imgg mt-4 border rounded-5 border-white "
            ></img>
          </div>
        </div>
        <hr></hr>
        <div className=" d-flex flex-wrap flex-row justify-content-between px-5">
          <div>
            {" "}
            <img
              src="./researchFunding.jpg"
              className="imgg border rounded-5 border-white "
            ></img>
          </div>
          <div className=" h-50 w-50  col-md-6 col-12 ">
            <div className="researchInfo">
              <h3 className="py-3">Research Funding</h3>
            </div>
            <div className="researchInfoTitle">
              <h5>
                The Research Funding section is tailored to support researchers
                in Gujarat by providing access to vital financial resources.
                This section features information on state-funded grants,
                scholarships, and other funding opportunities specific to
                Gujarat. By offering streamlined access to these resources, the
                state is committed to empowering researchers to pursue
                groundbreaking projects that contribute to Gujarat's development
                and innovation landscape.
              </h5>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    </>
  );
}
