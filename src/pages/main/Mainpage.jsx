import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import pocketnotesIMG from "../../assets/images/pocketnotes.png";
import styles from "./Mainpage.module.css";
import { IoMdLock } from "react-icons/io";

const Mainpage = () => {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.left}>
          <div className={styles.lpn}>Pocket Notes</div>
          <div className={styles.add}>
            <IoMdAddCircle />
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <img src={pocketnotesIMG} alt="Pocket Notes IMG" />
          </div>
          <div className={styles.pocketnote}>Pocket Notes</div>
          <div className={styles.para}>
            Send and receive messages without keeping your phone online.
            <br></br>
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone
          </div>
          <div className={styles.footer}>
            <span className={styles.lock}>
              <IoMdLock />
            </span>
            <span className={styles.e}>end-to-end encrypted</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainpage;
