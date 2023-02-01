import "./Main.scss";
import { DATA } from "../../data";
import { Information } from "./Information";
import { Sidebar } from "./Sidebar/Sidebar";
import { Navigation } from "../UI/Navigation/Navigation";
import { useState } from "react";
export const Main = () => {
  const [activeTab, setActiveTab] = useState(1);

  const changeActiveTab = (id) => {
    setActiveTab(id);
  };

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
        <Information block={DATA.find(({ id }) => id === activeTab)} />
        <Navigation activeTab={activeTab} setActiveTab={changeActiveTab} />
      </div>
    </div>
  );
};