import React from "react";

import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Cards } from "./components/Cards/Cards";
import { Modal } from "./components/Modal/Modal";
import { useApp } from "./hooks/useApp";

function App() {
  const { modalActive, stateModalActive } = useApp();

  return (
    <div>
      <Header stateModalActive={stateModalActive} />
      <Main stateModalActive={stateModalActive} />
      <Cards />
      {modalActive && <Modal stateModalActive={stateModalActive} />}
    </div>
  );
}

export default App;
