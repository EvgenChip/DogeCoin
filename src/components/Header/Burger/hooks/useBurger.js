import { useState, useEffect } from "react";

export const useBurger = () => {
  const [activeBurger, setActiveBurger] = useState(false);

  const displayBurger = (e) => {
    setActiveBurger(!activeBurger);
  };

  useEffect(() => {
    const burger = document.querySelector("#burger");
    const burgerMenu = document.querySelector("#burger-menu");

    const closeActiveBurger = (e) => {
      const withinBoundaries =
        e.composedPath().includes(burger) ||
        e.composedPath().includes(burgerMenu);

      if (!withinBoundaries) {
        setActiveBurger(false);
      }
    };

    const closeActiveBurgerOnEsc = (e) => {
      if (e.key === "Escape" || e.key === "Esc") {
        setActiveBurger(false);
      }
    };

    if (activeBurger) {
      document.addEventListener("click", closeActiveBurger);
      document.addEventListener("keydown", closeActiveBurgerOnEsc);
    }

    if (!activeBurger) {
      document.removeEventListener("click", closeActiveBurger);
      document.removeEventListener("keydown", closeActiveBurgerOnEsc);
    }

    return () => {
      document.removeEventListener("click", closeActiveBurger);
      document.removeEventListener("keydown", closeActiveBurgerOnEsc);
    };
  }, [activeBurger]);

  return { displayBurger, activeBurger, setActiveBurger };
};
