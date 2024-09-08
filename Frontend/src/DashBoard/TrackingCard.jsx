import "./TrackingCard.css";

const startup = {
  name: "Hopscotch",
  email: "hopscotch@gmail.com",
  password: "123",
  technology:
    "Artificial Intelligence (AI), Consumer Apps, Enterprise Apps, AdTech, AgriTech, EdTech, FinTech, HealthTech, RetailTech, GreenTech/CleanTech, LogisticsTech, FoodTech, D2C",
  Industry_Focus:
    "Advertising,Media & EntertainmentTraining,Energy & Utilities,Healthcare & Pharmaceuticals,IT & ITES,Manufacturing,Retail,Telecom,Transportation & Logistics,Travel & Hospitality",
  Startup_eligibility_criteria: "VC Funded startups",
  Startup_Revenue_Preference: 7000000,
  location: "Ahmedabad, Gujarat, IND",
  date: "06-09-2024",
  status: "Funds-sanctioned",
  funds_sanctioned: 0,
  _id: "66db3e1270fc7617f926c888",
  __v: 0,
};

function TrackingCard({ startup }) {
  return (
    <>
      <div className="card-body">
        <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
          <div
            className={`step ${
              (startup.status === "Registered" ||
                startup.status === "Accepted" ||
                startup.status === "Funds-reqested" ||
                startup.status === "Funds-sanctioned") &&
              "completed"
            }`}
          >
            <div className="step-icon-wrap">
              <div className="step-icon">
                <i className="pe-7s-cart"></i>
              </div>
            </div>
            <h4 className="step-title">Registered</h4>
          </div>
          <div
            className={`step ${
              (startup.status === "Accepted" ||
                startup.status === "Funds-reqested" ||
                startup.status === "Funds-sanctioned") &&
              "completed"
            }`}
          >
            <div className="step-icon-wrap">
              <div className="step-icon">
                <i className="pe-7s-config"></i>
              </div>
            </div>
            <h4 className="step-title">
              Accepted/Re-apply with requested changes
            </h4>
          </div>
          <div
            className={`step ${
              (startup.status === "Funds-reqested" ||
                startup.status === "Funds-sanctioned") &&
              "completed"
            }`}
          >
            <div className="step-icon-wrap">
              <div className="step-icon">
                <i className="pe-7s-medal"></i>
              </div>
            </div>
            <h4 className="step-title">Request For Funds</h4>
          </div>
          <div
            className={`step ${
              startup.status === "Funds-sanctioned" && "completed"
            }`}
          >
            <div className="step-icon-wrap">
              <div className="step-icon">
                <i className="pe-7s-car"></i>
              </div>
            </div>
            <h4 className="step-title">Funds Sanctioned</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrackingCard;
