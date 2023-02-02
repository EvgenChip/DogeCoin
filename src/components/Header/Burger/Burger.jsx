import "./burger.scss";
import { BurgerActive } from "./BurgerActive";
import { useBurger } from "./hooks/useBurger";

export const Burger = () => {
  const { displayBurger, activeBurger } = useBurger();
  return (
    <div className="burger">
      {activeBurger && <BurgerActive />}
      <div
        onClick={displayBurger}
        className={`burger__menu ${activeBurger && "active"} `}
        id="burger-menu">
        <span className="burger__line"></span>
      </div>
    </div>
  );
};
