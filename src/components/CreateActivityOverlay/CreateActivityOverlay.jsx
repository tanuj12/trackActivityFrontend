import React, { useState } from "react";
import styles from "./CreateActivityOverlay.module.scss";

export const CreateActivityOverlay = ({ closeOverlay, addActivity }) => {
  const [taskName, setTaskName] = useState("");
  const [descriptiion, setDescriptiion] = useState("");
  return (
    <div className={styles.container} onClick={closeOverlay}>
      <div
        className={styles.overlayCard}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className={styles.overlayHeader}>
          <h3 className={styles.title}>New Activity</h3>
          <button className={styles.cancleBtn} onClick={closeOverlay}>
            X
          </button>
        </div>
        <div className={styles.nameDiv}>
          <h3 className={styles.nameText}>Activity Name</h3>
          <input
            className={styles.taskName}
            onChange={(e) => {
              setTaskName(e.target.value);
            }}
          />
        </div>
        <div className={styles.descriptionDiv}>
          <h3 className={styles.descriptionText}>Description</h3>
          <textarea
            className={styles.description}
            onChange={(e) => {
              setDescriptiion(e.target.value);
            }}
          />
        </div>
        <div className={styles.btnDiv}>
          <button
            className={styles.btn}
            onClick={() => {
              addActivity(taskName, descriptiion);
            }}
          >
            Save
          </button>
          <button className={styles.btn} onClick={closeOverlay}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
