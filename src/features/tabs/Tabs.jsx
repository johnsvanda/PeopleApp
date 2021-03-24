import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Tabs.module.scss";
import Tab from "./Tab.jsx";
import { tabsArray, defaultTabId } from "./tabsSlice";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(useSelector(defaultTabId));
  const tabs = useSelector(tabsArray);

  const Navigation = () => (
    <div className={styles.Navigation}>
      {tabs.map(({ id, title }) => (
        <Tab key={id} title={title}></Tab>
      ))}
    </div>
  );

  const Content = () => <div className={styles.Content}></div>;

  return (
    <div className={styles.Tabs}>
      <Navigation />
      <Content>
        {React.Children.map((component, id) =>
          activeTab === id ? component : undefined
        )}
      </Content>
    </div>
  );
};

export default Tabs;
