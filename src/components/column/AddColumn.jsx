import React, { useRef, useState } from "react";
import styles from "./AddColumn.module.css";
// import { useDispatch } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { addCol } from "../../redux/tasksDetails/tasksDetailsSlice";

const AddColumn = () => {
  const titelInputRef = useRef();
  const colorInputRef = useRef();

  const [showAdd, setShowAdd] = useState(false);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasksDetails.tasks);

  const addColHandler = () => {
    dispatch(addCol({ title: "test1", color: "#666222" }));
    setShowAdd(false);
  };

  return (
    <div className={styles.addColContainer}>
      {!showAdd && (
        <div
          onClick={() => setShowAdd(true)}
          className={styles.addTransparent}
        ></div>
      )}
      {!showAdd && (
        <p onClick={() => setShowAdd(true)} className={styles.colPlus}>
          +
        </p>
      )}
      {showAdd && (
        <div className={styles.addColInput}>
          <input
            className={styles.colTitleInput}
            placeholder="Add Title"
            type="text"
            ref={titelInputRef}
          />
          <input
            className={styles.colColorInput}
            type="color"
            name="colColor"
            ref={colorInputRef}
          />
          <div className={styles.buttons}>
            <button
              onClick={() => setShowAdd(false)}
              className={`${styles.colBtn} ${styles.cancelColBtn}`}
            >
              Cancel
            </button>
            <button
              onClick={() => addColHandler()}
              className={`${styles.colBtn} ${styles.addColBtn}`}
            >
              ADD
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddColumn;
