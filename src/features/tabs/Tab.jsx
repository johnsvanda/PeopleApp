import React from "react";
import styles from "./Tab.module.scss";

const Tab = ({ id, title, active, setActiveTab }) => {
  return (
    <div
      className={[styles.Tab, active ? styles.activeTab : null].join(" ")}
      onClick={() => setActiveTab(id)}
    >
      {title}
    </div>
  );
};

export default Tab;
