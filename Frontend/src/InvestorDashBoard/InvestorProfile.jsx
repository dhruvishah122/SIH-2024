import { Link, useSearchParams } from "react-router-dom";
import styles from "./InvestorProfile.module.css";
import { useEffect, useState } from "react";

function InvestorProfile({ startup }) {
  const [param, setParm] = useSearchParams();
  const name = param.get("name");

  const [investors, setInvestors] = useState([]);
  const [investorLogin, setInvestorLogin] = useState([]);

  useEffect(function () {
    async function FetchInvestors() {
      try {
        const res = await fetch("/investorData.json");
        const data = await res.json();
        console.log(data);
        setInvestors(data.items1); // Assuming the JSON structure is similar to the one you shared.
      } catch {
        alert("There was an error loading data");
      }
    }
    FetchInvestors();
  }, []);

  useEffect(
    function () {
      const selectedInvestor = investors.find(
        (investor) => investor.name === name
      );
      if (!selectedInvestor) return;
      setInvestorLogin(selectedInvestor);
    },
    [investors, name]
  );

  if (!startup) startup = investorLogin;

  return (
    <>
      {startup.name && (
        <div className={styles.container}>
          <div className={styles.title}>
            {/* <div></div> */}
            <Link className={styles.title}>
              <div className={styles.website}>{startup.name}</div>
            </Link>
          </div>
          <div className={styles.info}>
            <div>Name :</div> <div>{startup.name}</div>
            <div>Email :</div> <div>{startup.email}</div>
            <div>Technology :</div> <div>{startup.technology}</div>
            <div>Investor Type :</div> <div>{startup.Investor_Type}</div>
            <div>Year of establishment:</div>
            <div> 2005 </div>
            <div>Employee_count :</div>
            <div> {startup.Employee_count}</div>
            <div>headquarters :</div>
            <div> {startup.headquaters}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default InvestorProfile;
