import { useState } from "react";

export const useModal = () => {
  const [formActive, setFormActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  console.log(modalActive);
  return {
    formActive,
    setFormActive,
    modalActive,
    setModalActive,
  };
};
