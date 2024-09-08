import styles from "./Form.module.css";

export default function Form() {
  return (
    <div>
      <form className={` ${styles["form-container"]}  `}>
        <label className={` ${styles["name"]} h5 `}>
          Investor Name:
          <input
            required
            type="text"
            name="investorName"
            className={` ${styles["text"]} `}
          />
        </label>

        <label className={` ${styles["name"]} h5`}>
          Startup Name:
          <input
            required
            type="text"
            name="startupName"
            className={` ${styles["text"]} `}
          />
        </label>

        <label className={` ${styles["name"]} h5`}>
          Funding Details:
          <input
            required
            type="text"
            name="fundingDetails"
            className={` ${styles["text"]} `}
          />
        </label>

        <label className={` ${styles["name"]} h5`}>
          ID:
          <input
            required
            type="text"
            name="id"
            className={` ${styles["text"]} `}
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
