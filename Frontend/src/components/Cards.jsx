import "./Cards.css";

function Cards() {
  return (
    <div>
      <div className="d-flex flex-wrap align-items-center justify-content-center  gap-5 ">
        <Card
          title={"Startup Registration"}
          para={
            "Register your startup easily to access resources, support, and growth opportunities."
          }
          button={"Register Your Startup"}
          image={"./eligibility.svg"}
          id={1}
        />

        <Card
          title={"Mentorship Program"}
          para={
            "Get expert guidance to navigate and grow your startup with seasoned mentors."
          }
          button={"Connect with Experts"}
          image={"./certificate.svg "}
          id={2}
        />

        <Card
          title={"Startup Funding"}
          para={
            "Secure essential funding to boost your startup’s development and expansion."
          }
          button={"Apply for Funding"}
          image={"./notification.svg"}
          id={3}
        />

        <Card
          title={"Collaboration Opportunities"}
          para={
            "Collaborate with other innovators to enhance your startup’s potential and reach."
          }
          button={"Start Collaborating"}
          image={"./recognised.svg"}
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
        <p className=" m-3 justify-content-sm-center text-center">{para}</p>
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
