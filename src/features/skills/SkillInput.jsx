import React, { useState } from "react";
import styles from "./Skills.module.scss";

const SkillInput = ({ id, addSkill, removeSkill, register }) => {
  const [skill, setSkill] = useState("");

  return (
    <div className={styles.SkillInput}>
      <input
        ref={register()}
        name={id}
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />
      {id === 0 ? (
        <button type="button" onClick={() => addSkill()}>
          +
        </button>
      ) : (
        <button type="button" onClick={() => removeSkill(id)}>
          -
        </button>
      )}
    </div>
  );
};

export default SkillInput;
