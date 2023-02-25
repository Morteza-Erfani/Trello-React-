import React, { useEffect } from "react";
import Header from "../header/Header";
import Column from "../column/Column";
import AddColumn from "../column/AddColumn";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getFromStorage } from "../../redux/tasksDetails/tasksDetailsSlice";

const Home = () => {
  const tasks = useSelector((state) => state.tasksDetails.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFromStorage());
  }, []);

  return (
    <div className={styles.contianer}>
      <Header />
      <section className={styles.contentSection}>
        {tasks.map((task) => (
          <div className={styles.column} key={task.id}>
            <Column task={task} />
          </div>
        ))}
        <div className={styles.column}>
          <AddColumn />
        </div>
      </section>
    </div>
  );
};

export default Home;
