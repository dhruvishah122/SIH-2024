import styles from "./InvestorLogin.module.css";

function InvestorLogin() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles["signup-content"]}>
            <div className={styles["signup-form"]}>
              <form
                action="/investorAuthenticate"
                method="POST"
                className={styles["register-form"]}
                id="register-form"
              >
                <div className={styles["form-row"]}>
                  <div className={styles["form-group"]}>
                    <div className={styles["form-input"]}>
                      <label htmlFor="email" className={styles["required"]}>
                        Email
                      </label>
                      <input type="text" name="email" id="email" />
                    </div>
                    <div className={styles["form-input"]}>
                      <label htmlFor="password" className={styles["required"]}>
                        Password
                      </label>
                      <input type="password" name="password" id="password" />
                    </div>
                    <div className={styles["form-submit"]}>
                      <input
                        type="submit"
                        value="Submit"
                        className={styles["submit"]}
                        id="submit"
                        name="submit"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InvestorLogin;
