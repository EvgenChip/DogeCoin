import React, { useState, useCallback } from "react";

export const useApp = () => {
  const [modalActive, setModalActive] = useState(false);

  const stateModalActive = useCallback(() => {
    setModalActive(!modalActive);
  }, [modalActive]);

  return {
    modalActive,
    setModalActive,
    stateModalActive,
  };
};
