import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./Skills.module.scss";
import SkillInput from "./SkillInput.jsx";

const Skills = () => {
  const { handleSubmit, register } = useForm();
  const [skills, setSkills] = useState([{ id: 0 }]);
  const [id, setId] = useState(1);

  const addSkill = () => {
    setId((prevCount) => prevCount + 1);
    const newSkill = { id, content: "" };
    setSkills([...skills, newSkill]);
  };

  const removeSkill = (removeId) => {
    const newSkill = skills.filter(({ id }) => id !== removeId);
    setSkills(newSkill);
  };

  const onSubmit = (data) => {
    const rawData = Object.values(data);
    const resultData = rawData.filter((el) => el !== "");
    console.log(resultData);
  };

  return (
    <div className={styles.Skills}>
      <label>Skills</label>
      <form onSubmit={handleSubmit(onSubmit)}>
        {skills.map(({ id }) => (
          <SkillInput key={id} {...{ register, id, addSkill, removeSkill }} />
        ))}
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default Skills;
