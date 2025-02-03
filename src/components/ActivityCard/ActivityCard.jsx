import React from "react";
import styles from "./ActivityCard.module.scss";
export const ActivityCard = ({ index, activity, taskDelete, taskDone }) => {
  return (
    <div key={index} className={styles.taskCard}>
      <h2>{activity.task}</h2>
      <hr></hr>
      <h3>{activity.description}</h3>
      <div className={styles.activityBtnDiv}>
        <button
          onClick={() => {
            taskDelete(index);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            taskDone(index);
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
};
