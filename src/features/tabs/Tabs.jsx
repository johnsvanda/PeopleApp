import React, { useState } from "react";
import styles from "./Tabs.module.scss";
import Tab from "./Tab.jsx";
import PersonalInfo from "../personalInfo/PersonalInfo.jsx";
import Skills from "../skills/Skills.jsx";

const Tabs = () => {
  const [store, setStore] = useState();
  const [value, setValue] = React.useState(0);

  const setActiveTab = (newValue) => {
    setValue(newValue);
  };

  const onSubmit = (data) => {
    setStore({
      ...store,
      ...data,
    });
    console.log(data);
  };

  const TabsGroup = ({ children }) => {
    return (
      <div className={styles.TabsGroup}>
        {React.Children.map(children, (child, id) => {
          return React.cloneElement(child, {
            value,
            id,
            setActiveTab,
          });
        })}
      </div>
    );
  };

  const TabPanel = ({ children, value, index }) => {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
      >
        {value === index && <div className={styles.TabPanel}>{children}</div>}
      </div>
    );
  };

  return (
    <div className={styles.Tabs}>
      <TabsGroup>
        <Tab title="Personal Info" />
        <Tab title="Skills" />
      </TabsGroup>

      <TabPanel value={value} index={0}>
        <PersonalInfo onSubmit={onSubmit} store={store} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Skills onSubmit={onSubmit} store={store} />
      </TabPanel>
    </div>
  );
};

export default Tabs;
