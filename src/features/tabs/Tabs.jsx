import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Tabs.module.scss";
import Tab from "./Tab.jsx";
import { tabsArray, defaultTabId } from "./tabsSlice";

const Tabs = () => {
  const [store, setStore] = useState({ test1: "", test2: "", test3: "" });
  const [activeTab, setActiveTab] = useState(useSelector(defaultTabId));
  const tabs = useSelector(tabsArray);

  const onSubmit = (data) => {
    setStore({
      ...store,
      ...data,
    });
    console.log(data);
  };

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
        if (id === activeTab) {
          return (
            <div className={styles.Container} key={id}>
              {React.cloneElement(content, {
                onSubmit: onSubmit,
                store: store,
              })}
            </div>
          );
        }
        return undefined;
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
