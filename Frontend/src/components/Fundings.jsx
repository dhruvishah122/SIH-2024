import styles from "./Fundings.module.css";

function Fundings() {
  return (
    <div>
      <div className="d-flex flex-wrap align-items-center justify-content-center  gap-4 ">
        <Funding
          title={"Seed Fund Scheme"}
          para={
            "Financial assistance to startups for proof of concept, prototype development, product trials, market entry, and commercialisation."
          }
          button={"Know more"}
          image={"./seed-funds-icon.png"}
          id={1}
        />

        <Funding
          title={"Funding Guide for Startups"}
          para={
            "Your virtual guide to startup funding. A startup might require funding for one, a few, or all of the following purposes. Click to know more."
          }
          button={"Know More"}
          image={"./seed-funds-icon.png"}
          id={2}
        />

        <Funding
          title={"Startup India Investor Connect"}
          para={
            "Startup India Investor Connect is a platform that connects startups with investors to facilitate investment opportunities."
          }
          button={"Know more"}
          image={"./seed-funds-icon.png"}
          id={3}
        />

        <Funding
          title={"Fund of Funds"}
          para={
            "A corpus for contribution to various AIFs registered with SEBI for funding of startups. Click to know more."
          }
          button={"Know more"}
          image={"./seed-funds-icon.png"}
          id={4}
        />
      </div>
    </div>
  );
}

function Funding({ title, para, button, image, id }) {
  const cardsColor = {
    color: "#e9601b",
  };

  const buttonStyling = {
    backgroundColor: "#e9601b",
    color: "white",
  };

  return (
    <div className={`${styles["borderr"]} position-relative custom-card`}>
      <div>
        <div className={styles["imgg"]}>
          <img
            src={image}
            className={`${styles["symbol"]} h-50 w-50 m-lg-2  `}
            alt="..."
          ></img>
        </div>

        <h5
          className="text-center m- justify-content-sm-center "
          style={cardsColor}
        >
          {title}
        </h5>
      </div>
      <div>
        <p
          className=" m-3  justify-content-sm-center text-center"
          style={cardsColor}
        >
          {para}
        </p>
      </div>
      <div>
        <button
          type="button"
          className={`btn ${styles[`btn${id}`]} ${
            styles["btn--cards"]
          } position-absolute  bottom-0 text-center`}
          style={buttonStyling}
        >
          {button}
        </button>
      </div>
    </div>
  );
}

export default Fundings;
