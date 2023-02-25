import React, { useState } from "react";
import styles from "./Card.module.css";
import trashBtn from "../../assets/trash.svg";
import editBtn from "../../assets/edit-button-svgrepo-com.svg";
import { useDispatch } from "react-redux";
import { todoHandler } from "../../redux/tasksDetails/tasksDetailsSlice";

const Card = ({ data, colColor, colId }) => {
  const [showDetails, setShowDetails] = useState(false);
  const dispatch = useDispatch();

  const currentDate = new Date();

  const timeLeft = () => {
    if (data.deadline) {
      const difference = data.deadline - currentDate.getTime();
      const totalDays = Math.ceil(difference / (1000 * 3600 * 24));
      return totalDays;
    }
  };

  return (
    <div className={styles.cardContainer}>
      <div
        className={styles.summeryCard}
        onClick={() => setShowDetails(!showDetails)}
      >
        <div>{data.title}</div>
        {!showDetails && (
          <div className={styles.labelContainer}>
            {data.label.map((label, index) => (
              <div
                key={index}
                className={styles.cardLabel}
                style={{ backgroundColor: label.color }}
              ></div>
            ))}
          </div>
        )}
        {showDetails && (
          <div className={styles.cardBtnContainer}>
            <div>
              <img className={styles.trashBtn} src={trashBtn} alt="delete" />
            </div>
            <div>
              <img className={styles.editBtn} src={editBtn} alt="edit" />
            </div>
          </div>
        )}
      </div>
      <div />
      <div className={styles.assignsContainer}>
        {data.assignUsers.map((user) => (
          <div key={user.id} className={styles.assigns}>
            <img src={user.imageURL} alt="assign User" />
          </div>
        ))}
      </div>
      <div className={styles.deadline}>
        <p>{timeLeft()} days left</p>
      </div>
      {showDetails && (
        <div className={styles.descriptionContainer}>
          <div className={styles.description}>{data.description}</div>
          <ul className={styles.todos}>
            {data.todos.map((todo, index) => (
              <li key={index} className={styles.todo}>
                <input
                  id={todo.name}
                  type="checkbox"
                  name="checkbox"
                  defaultChecked={todo.isDone}
                  onClick={(e) =>
                    dispatch(
                      todoHandler({
                        colId: colId,
                        cardId: data.id,
                        index: index,
                        isDone: e.target.checked,
                      })
                    )
                  }
                />
                <label htmlFor={todo.name}>{todo.name}</label>
              </li>
            ))}
          </ul>
          <div className={styles.fullLabelContainer}>
            {data.label.map((label, index) => (
              <div
                key={index}
                className={styles.label}
                style={{ backgroundColor: colColor }}
              >
                <div
                  className={styles.fullLabelColor}
                  style={{ backgroundColor: label.color }}
                ></div>
                <p className={styles.labelText}>{label.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
