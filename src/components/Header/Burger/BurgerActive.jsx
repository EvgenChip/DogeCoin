import React from "react";

import "./burgerActive.scss";
export const BurgerActive = () => {
  return (
    <div className="burger-active" id="burger">
      <ul className="burger-active__menu">
        <li className="burger-active__item">
          <a className="burger-active__link" href="#">
            УСЛУГИ
          </a>
        </li>
        <li className="burger-active__item">
          <a className="burger-active__link" href="#">
            АБОНЕМЕНТЫ
          </a>
        </li>
        <li className="burger-active__item">
          <a className="burger-active__link" href="#">
            ПОЧЕМУ МЫ
          </a>
        </li>
        <li className="burger-active__item">
          <a className="burger-active__link" href="#">
            ОБОРУДОВАНИЕ
          </a>
        </li>
        <li className="burger-active__item">
          <a className="burger-active__link" href="#">
            АКЦИИ
          </a>
        </li>
        <li className="burger-active__item">
          <a className="burger-active__link" href="#">
            FAQ
          </a>
        </li>
        <li className="burger-active__item">
          <a className="burger-active__link" href="#">
            КОНТАКТЫ
          </a>
        </li>
      </ul>
    </div>
  );
};
