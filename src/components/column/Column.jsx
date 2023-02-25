import React from "react";
import styles from "./Coulumn.module.css";
import Card from "../card/Card";

const Column = ({ task }) => {
  // console.log(task);
  return (
    <div
      className={styles.columnContainer}
      style={{ backgroundColor: task.color }}
    >
      <div className={styles.headerContainer}>
        <h3 className={styles.columnHeaderText}>{task.colTitle}</h3>
        <p className={styles.topAddCard}>+</p>
      </div>
      <section className={styles.cardsContianer}>
        <div>
          {task.cards.map((card) => (
            <Card
              key={card.id}
              data={card}
              colColor={task.color}
              colId={task.id}
            />
          ))}
        </div>
        <div className={styles.addCard}>+</div>
      </section>
    </div>
  );
};

export default Column;
