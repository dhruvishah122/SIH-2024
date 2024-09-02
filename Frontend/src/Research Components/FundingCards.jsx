export default function Cards() {
  return (
    <div>
      <div className="d-flex flex-wrap align-items-center justify-content-center gap-5 ">
        <Card
          title={"Grant Listings"}
          para={
            "Explore a comprehensive database of available grants. Filter by type, research area, funding amount, and eligibility criteria to find the best opportunities suited to your needs and interests."
          }
          button={"View Details"}
          id={1}
        />

        <Card
          title={"Funding Application Portal"}
          para={
            "Simplify your grant application process with our intuitive portal. Start new applications, upload required documents, track submission status, and receive updates, all through a user-friendly interface designed for efficiency."
          }
          button={"Start Application"}
          id={2}
        />

        <Card
          title={"Track Funding Allocations"}
          para={
            "Keep track of your grant applications with real-time status updates. Monitor progress, manage deadlines, and receive notifications to ensure you stay informed and organized throughout the application process."
          }
          button={"Track Your Applications"}
          id={3}
        />

        <Card
          title={"Funding Resources"}
          para={
            " Access a wealth of resources to support your grant applications. Find guides on writing proposals, budgeting tips, and educational webinars to enhance your funding strategies and manage awarded funds effectively."
          }
          button={"Read Funding Tips"}
          id={4}
        />
      </div>
    </div>
  );
}

function Card({ title, para, button, id }) {
  const cardsColor = {
    color: "#d2631f",
  };

  const buttonStyling = {
    backgroundColor: "#d2631f",
    color: "white",
  };

  return (
    <div className="borderr position-relative custom-card">
      <div>
        <h5
          className="text-center m-3 justify-content-sm-center pt-4 pb-2"
          style={cardsColor}
        >
          {title}
        </h5>
      </div>
      <div>
        <p className=" m-3 justify-content-sm-center text-center mb-5">
          {para}
        </p>
      </div>
      <div>
        <button
          type="button"
          className={`btn Fbtn${id} btn--cards position-absolute  bottom-0 m-3 text-center mb-4`}
          style={buttonStyling}
        >
          {button}
        </button>
      </div>
    </div>
  );
}
