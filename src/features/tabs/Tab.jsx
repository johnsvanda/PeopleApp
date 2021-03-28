import React from "react";
import styles from "./Tab.module.scss";

const Tab = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div
      data-testid="tab"
      className={[styles.Tab, id === activeTab ? styles.activeTab : null].join(
        " "
      )}
      onClick={() => handleClick(id)}
    >
      {title}
    </div>
  );
};

export default Tab;
