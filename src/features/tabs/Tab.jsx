import React from "react";
import styles from "./Tab.module.scss";

const Tab = ({ title }) => {
  return <div className={styles.Tab}>{title}</div>;
};

export default Tab;
