import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.scss";
import { CreateActivityOverlay } from "../../components/CreateActivityOverlay/CreateActivityOverlay";
import { ActivityCard } from "../../components/ActivityCard/ActivityCard";
import {
  deleteActivity,
  getAllActivities,
  postActivity,
} from "../../services/activityService";

export const HomePage = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [cardsList, setCardsList] = useState([]);
  useEffect(() => {
    return async () => {
      const response = await getAllActivities();
      setCardsList(response);
    };
  }, []);
  const closeOverlay = () => {
    setShowOverlay(false);
  };
  const addActivity = async (task, description) => {
    closeOverlay();
    const activities = await postActivity({ task, description });
    setCardsList([...cardsList, ...activities]);
  };
  const taskDone = (id) => {
    const list = cardsList;
    list.splice(id, 1);
    setCardsList([...list]);
  };
  const taskDelete = async (index) => {
    const list = cardsList;
    await deleteActivity(list[index].id);
    list.splice(index, 1);
    setCardsList([...list]);
  };
  return (
    <section>
      <div className={styles.container}>
        <button
          className={styles.addBtn}
          onClick={() => {
            setShowOverlay(true);
          }}
        >
          Create New Activity
        </button>
        <div className={styles.taskList}>
          {cardsList.map((activity, index) => {
            return (
              <ActivityCard
                key={index}
                index={index}
                activity={activity}
                taskDone={taskDone}
                taskDelete={taskDelete}
              />
            );
          })}
        </div>
      </div>
      {showOverlay ? (
        <CreateActivityOverlay
          closeOverlay={closeOverlay}
          addActivity={addActivity}
        />
      ) : (
        <></>
      )}
    </section>
  );
};
