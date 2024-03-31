import { useState } from "react";
import { Tab } from "..";

import "./Tabs.css";
import { IExample } from "../../model";

export const Tabs: React.FC<{ examples: IExample }> = ({ examples }) => {
  const [selectedTab, setSelectedTab] = useState("components");
  const { title, description, code } = examples[selectedTab];

  const handleSelect = (subject: string) => {
    setSelectedTab(subject);
  };

  return (
    <>
      <menu>
        {Object.keys(examples).map((subject, _idx) => (
          <Tab
            key={subject}
            active={subject === selectedTab}
            title={subject}
            onClick={handleSelect}
          />
        ))}
      </menu>
      <div id="tab-content">
        <h3>{title}</h3>
        {description}
        <code>{code}</code>
      </div>
    </>
  );
};
