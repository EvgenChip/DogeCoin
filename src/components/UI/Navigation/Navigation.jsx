import React from "react";

import "./styles.scss";

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
export const Navigation = ({ activeTab, setActiveTab }) => (
  <nav className="navigation">
    {tabs.map(({ id, name }) => (
      <button
        key={id}
        onClick={() => setActiveTab(id)}
        className={
          activeTab === id ? "navigation__button_active" : "navigation__button"
        }>
        {name}
      </button>
    ))}
  </nav>
);
