import styles from "./IPRs.module.css";

function IPRs() {
  return (
    <div>
      <div className="d-flex flex-wrap align-items-center justify-content-center  gap-4 ">
        <IPR
          title={"Patent Filing"}
          para={
            "  Obtain protection for your inventions with expert guidance throughout the patent application process, ensuring your intellectual property is legally secured and recognized."
          }
          button={"Know more"}
          image={"./seed-funds-icon.png"}
          id={1}
        />

        <IPR
          title={"Copyright Services"}
          para={
            " Safeguard your creative works with comprehensive copyright registration and enforcement services, helping you protect against unauthorized use and infringement."
          }
          button={"Know More"}
          image={"./seed-funds-icon.png"}
          id={2}
        />

        <IPR
          title={"Legal Consultation"}
          para={
            "Receive specialized legal advice tailored to your intellectual property needs, covering patents, copyrights, trademarks, and more, to ensure full compliance and protection."
          }
          button={"Know more"}
          image={"./seed-funds-icon.png"}
          id={3}
        />

        <IPR
          title={"Trademark Registration"}
          para={
            "4. Protect your brand’s identity by registering trademarks for names, logos, and symbols, with professional assistance to ensure your brand is legally secure and distinct."
          }
          button={"Know more"}
          image={"./seed-funds-icon.png"}
          id={4}
        />
      </div>
    </div>
  );
}

function IPR({ title, para, button, image, id }) {
  const cardsColor = {
    color: "#d2631f",
  };

  const buttonStyling = {
    backgroundColor: "#d2631f",
    color: "white",
    border: "2px solid #d2631f",
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
        <p className=" m-3  justify-content-sm-center text-center">{para}</p>
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

export default IPRs;
