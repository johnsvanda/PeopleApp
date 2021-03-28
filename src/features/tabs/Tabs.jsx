import React, { useState } from "react";
import styles from "./Tabs.module.scss";
import Tab from "./Tab.jsx";
import PersonalInfo from "../personalInfo/PersonalInfo.jsx";
import Skills from "../skills/Skills.jsx";

const Tabs = () => {
  const [store, setStore] = useState();
  const [activeTab, setActiveTab] = React.useState(0);

  const saveToStore = (data) => {
    setStore({
      ...store,
      ...data,
    });
  };

  const TabsGroup = ({ children }) => {
    return (
      <div className={styles.TabsGroup}>
        {React.Children.map(children, (child, id) => {
          return React.cloneElement(child, {
            activeTab,
            id,
            setActiveTab,
          });
        })}
      </div>
    );
  };

  const TabPanel = ({ children, activeTab, index }) => {
    return (
      <div role="tabpanel" hidden={activeTab !== index}>
        {activeTab === index && (
          <div className={styles.TabPanel}>{children}</div>
        )}
      </div>
    );
  };

  return (
    <div className={styles.Tabs} title="tabs">
      <TabsGroup>
        <Tab title="Personal Info" />
        <Tab title="Skills" />
      </TabsGroup>

      <TabPanel activeTab={activeTab} index={0}>
        <PersonalInfo {...{ saveToStore, store }} />
      </TabPanel>
      <TabPanel activeTab={activeTab} index={1}>
        <Skills {...{ saveToStore, store }} />
      </TabPanel>
    </div>
  );
};

export default Tabs;
