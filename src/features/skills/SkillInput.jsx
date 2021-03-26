import React from "react";
import { useDispatch } from "react-redux";
import { addSkill, removeSkill } from "./skillsSlice";
import styles from "./Skills.module.scss";

const SkillInput = ({ id, register }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.SkillInput}>
      <input ref={register()} name={`skill${id}`} />
      {id === 0 ? (
        <button
          type="button"
          className={styles.addButton}
          onClick={() => dispatch(addSkill())}
        >
          +
        </button>
      ) : (
        <button
          type="button"
          className={styles.removeButton}
          onClick={() => dispatch(removeSkill(id))}
        >
          -
        </button>
      )}
    </div>
  );
};

export default SkillInput;
