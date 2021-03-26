import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { occupationsArray } from "../occupations/occupationsSlice";
import ErrorMessage from "../../common/ErrorMessage.jsx";
import styles from "./PersonalInfo.module.scss";

const PersonalInfo = ({ store, onSubmit }) => {
  const occupations = useSelector(occupationsArray);

  const { register, errors, handleSubmit } = useForm({
    defaultValues: store,
  });

  return (
    <div className={styles.PersonalInfo}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.Container}>
          <div className={styles.Name}>
            <label>First name</label>
            <input
              name="firstName"
              ref={register({ required: true, maxLength: 20 })}
            />
            {errors.firstName && (
              <ErrorMessage role="alert" message="First name is required" />
            )}

            <label>Last name</label>
            <input
              name="lastName"
              ref={register({ required: true, maxLength: 20 })}
            />
            {errors.lastName && (
              <ErrorMessage role="alert" message="Last name is required" />
            )}
          </div>

          <div className={styles.Occupations}>
            <div>
              <label>Occupations</label>
              <select
                name="occupations"
                ref={register}
                className={styles.select}
              >
                <option value=""></option>
                {occupations.map(({ code, name }) => (
                  <option key={code} value={code}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <input type="submit" value="Save" className={styles.buttonSave} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
