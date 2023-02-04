import React from "react";
import { Button } from "../../Button";
import iconTel from "../../../assets/image/iconTel.svg";
import "./styles.scss";

export const BurgerActive = (stateModalActive) => (
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
    <div className="burger-active__contacts">
      <div className="contacts_tel">
        <Button type="small">
          <img src={iconTel} alt="" />
        </Button>
      </div>
      <div className="contacts_request">
        <Button onClick={stateModalActive}>
          <p>Оставить заявку</p>{" "}
        </Button>
      </div>
    </div>
  </div>
);
