import { tab } from "@testing-library/user-event/dist/tab";
import { useState } from "react";
import "./Navigation.scss";

const tabs = [
  {
    id: 1,
    name: "DOgie coin",
  },
  {
    id: 2,
    name: "УПАЛ",
  },
  {
    id: 3,
    name: "ВОЗВРАЩЕНИЕ",
  },
];
export const Navigation = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="navigation">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={
            activeTab === tab.id
              ? "navigation__button_active"
              : "navigation__button"
          }>
          {tab.name}
        </button>
      ))}
    </nav>
  );
};
