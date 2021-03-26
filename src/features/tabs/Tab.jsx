import React from "react";
import styles from "./Tab.module.scss";

const Tab = ({ id, title, value, setActiveTab }) => {
  return (
    <div
      className={[styles.Tab, id === value ? styles.activeTab : null].join(" ")}
      onClick={() => setActiveTab(id)}
    >
      {title}
    </div>
  );
};

export default Tab;
