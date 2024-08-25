import "./Cards.css";

function Cards() {
  return (
    <div>
      <div className="d-flex flex-wrap align-items-center justify-content-center  gap-5 ">
        <Card
          title={"Check Your Eligibility"}
          para={
            "A startup must meet certain criteria to be considered eligible for DPIIT Recognition."
          }
          button={"Check Eligibility"}
          image={"./eligibility.svg"}
          id={1}
        />

        <Card
          title={"Get Recognised"}
          para={
            "Click here to know more about the recognition process & apply as a Startup."
          }
          button={"Know More"}
          image={"./recognised.svg"}
          id={2}
        />

        <Card
          title={"Notifications"}
          para={"Stay on top of Recognition & Tax Exemption updates."}
          button={"Know more"}
          image={"./notification.svg"}
          id={3}
        />

        <Card
          title={"Validate Certificate"}
          para={
            "Click here to verify your Recognition/Tax Exemption  DPIIT certificates."
          }
          button={"Verify Certification"}
          image={"./certificate.svg"}
          id={4}
        />
      </div>
    </div>
  );
}

function Card({ title, para, button, image, id }) {
  const cardsColor = {
    color: "#008080",
  };

  const buttonStyling = {
    backgroundColor: "#008080",
    color: "white",
  };

  return (
    <div className="borderr position-relative custom-card">
      <div>
        <div className="text-center">
          <img
            src={image}
            className="card-img-top h-50 w-50 m-3 "
            alt="..."
          ></img>
        </div>

        <h5
          className="text-center m-3 justify-content-sm-center "
          style={cardsColor}
        >
          {title}
        </h5>
      </div>
      <div>
        <p
          className=" m-3 justify-content-sm-center text-center"
          style={cardsColor}
        >
          {para}
        </p>
      </div>
      <div>
        <button
          type="button"
          className={`btn btn${id} btn--cards position-absolute  bottom-0 m-3 text-center`}
          style={buttonStyling}
        >
          {button}
        </button>
      </div>
    </div>
  );
}

export default Cards;