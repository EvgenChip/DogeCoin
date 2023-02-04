import React, { useState, useCallback } from "react";

import "./styles.scss";
import { NAVIGATION } from "../../constants";
import { Information } from "./components/Information/Information";
import { Navigation } from "../UI/Navigation/Navigation";
import { computeHeadingLevel } from "@testing-library/react";
export const Main = ({ stateModalActive }) => {
  const [activeTab, setActiveTab] = useState(1);

  const changeActiveTab = useCallback(
    (id) => {
      console.log(id);
      setActiveTab(id);
    },
    [setActiveTab]
  );

  return (
    <div className="main">
      <div
        className={
          activeTab === 1
            ? "main__slider doge"
            : activeTab === 2
            ? "main__slider doge_down"
            : "main__slider doge_up"
        }>
        <Information
          stateModalActive={stateModalActive}
          block={NAVIGATION.find(({ id }) => id === activeTab)}
        />
        <Navigation activeTab={activeTab} setActiveTab={changeActiveTab} />
      </div>
    </div>
  );
};
