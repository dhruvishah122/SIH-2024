import "./IPRAppProcess.css";
export default function IPRAppProcess() {
  return (
    <div className=" mb-5">
      <div className="Aptitle">IPR Application Process</div>
      <div className=" d-flex flex-wrap">
        <div className="d-flex para " id="one">
          <img src="./1.png" alt="1" className="numberr"></img>
          <div>
            <p>
              {" "}
              <b>Choose Your IPR Type:</b> Determine whether you need to apply
              for a patent, trademark, copyright, or design registration. Each
              type has specific requirements and portals.
            </p>
          </div>
        </div>
        <div className="d-flex para" id="two">
          <img src="./2.png" alt="2" className="numberr"></img>
          <div>
            <p>
              <b>Prepare Your Documents:</b>Collect all necessary documents and
              details for your application. This may include descriptions,
              drawings, or samples depending on the IPR type.
            </p>
          </div>
        </div>
        <div className="d-flex para " id="three">
          <img src="./3.png" alt="3" className="numberr"></img>
          <div>
            <p>
              <b>Visit the Relevant Portal:</b>Apply for patents through InPASS,
              trademarks via IP India, copyrights on the Copyright Registration
              Portal, and designs through the Designs Registration System.
            </p>
          </div>
        </div>
        <div className="d-flex para " id="four">
          <img src="./4.png" alt="4" className="numberr"></img>
          <div>
            <p>
              <b>Submit Your Application:</b>Register on the chosen portal,
              complete the online application form, upload required documents,
              and pay the necessary fees.
            </p>
          </div>
        </div>
        <div className="d-flex para " id="five">
          <img src="./5.png" alt="5" className="numberr"></img>
          <div>
            <p>
              <b>Track and Respond:</b>Monitor the status of your application
              through the portal. Respond to any communications or objections
              promptly to ensure smooth processing.
            </p>
          </div>
        </div>
      </div>
      <div className=" mb-5 ">
        <button type="button" class="btn bttn rounded-2 m-1">
          Apply Now
        </button>
      </div>
      <hr></hr>
    </div>
  );
}
