import React from "react";
import { useSelector } from "react-redux";
import { skillsArray } from "./skillsSlice";
import { useForm } from "react-hook-form";
import styles from "./Skills.module.scss";
import SkillInput from "./SkillInput.jsx";

const Skills = ({ store, onSubmit }) => {
  const { handleSubmit, register } = useForm({
    defaultValues: store,
  });

  const skills = useSelector(skillsArray);

  /*  const onSubmit = (data) => {
    const rawData = Object.values(data);
    const resultData = rawData.filter((el) => el !== "");
    console.log(resultData);
  }; */

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.Skills}>
        <div>
          <label>Skills</label>
          {skills.map(({ id }) => (
            <SkillInput key={id} {...{ register, id }} />
          ))}
        </div>
        <div>
          <input type="submit" value="Save" className={styles.buttonSave} />
        </div>
      </form>
    </div>
  );
};

export default Skills;
