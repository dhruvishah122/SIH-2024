import { useState } from "react";
import styles from "./Form.module.css";
// import {useState} from "react";
import axios from "axios";
export default function Form() {
  const[investorName,setinvestorName]=useState()
  const[startupName,setstartupName]=useState()
  const[fundingDetails,setfundingDetails]=useState()
  const[id,setid]=useState();
  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:8080/investment',{investorName,startupName,fundingDetails,id})
    .then(alert("Successfully applied for funding"))
    .catch(err=>console.log(err));
  }
  return (
    <div>
      <form className={` ${styles["form-container"]}  `} onSubmit={handleSubmit}>
        <label className={` ${styles["name"]} h5 `}>
          Investor Name:
          <input
            required
            type="text"
            name="investorName"
            className={` ${styles["text"]} `}
            onChange={(e)=>setinvestorName(e.target.value)}
          />
        </label>

        <label className={` ${styles["name"]} h5`}>
          Startup Name:
          <input
            required
            type="text"
            name="startupName"
            className={` ${styles["text"]} `}
            onChange={(e)=>setstartupName(e.target.value)}
          />
        </label>

        <label className={` ${styles["name"]} h5`}>
          Funding Details:
          <input
            required
            type="text"
            name="fundingDetails"
            className={` ${styles["text"]} `}
            onChange={(e)=>setfundingDetails(e.target.value)}
          />
        </label>

        <label className={` ${styles["name"]} h5`}>
          ID:
          <input
            required
            type="text"
            name="id"
            className={` ${styles["text"]} `}
            onChange={(e)=>setid(e.target.value)}
          />
        </label>

        <br />

        <input
          type="submit"
          value="Submit"
          className={` ${styles["btn"]} ${styles["name"]} `}
        />
      </form>
    </div>
  );
}
