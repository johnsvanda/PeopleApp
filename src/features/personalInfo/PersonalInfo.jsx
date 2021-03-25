import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { occupationsArray } from "../occupations/occupationsSlice";
import styles from "./PersonalInfo.module.scss";

const PersonalInfo = () => {
  const occupations = useSelector(occupationsArray);

  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.PersonalInfo}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First name</label>
        <input
          name="firstName"
          ref={register({ required: true, maxLength: 20 })}
        />
        {errors.firstName && "First name is required"}

        <label>Last name</label>
        <input
          name="lastName"
          ref={register({ required: true, maxLength: 20 })}
        />
        {errors.lastName && "Last name is required"}

        <label>Occupations</label>
        <select name="occupations" ref={register}>
          <option value=""></option>
          {occupations.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>

        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default PersonalInfo;
