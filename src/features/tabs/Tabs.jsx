import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import styles from "./Tabs.module.scss";
import Tab from "./Tab.jsx";
import { tabsArray, defaultTabId } from "./tabsSlice";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(useSelector(defaultTabId));
  const tabs = useSelector(tabsArray);

  const Navigation = () => (
    <div className={styles.Navigation}>
      {tabs.map(({ id, title }) => {
        let active = activeTab === id;
        return <Tab key={id} {...{ title, active, setActiveTab, id }}></Tab>;
      })}
    </div>
  );

  const Content = () => (
    <div className={styles.Content}>
      {tabs.map(({ content, id }) => {
        if (id === activeTab)
          return (
            <div className={styles.Container} key={id}>
              {content}
            </div>
          );
        else return undefined;
      })}
    </div>
  );
  return (
    <div className={styles.Tabs}>
      <Navigation />
      <Content />
    </div>
  );
};

export default Tabs;
