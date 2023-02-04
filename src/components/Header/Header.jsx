import React from "react";

import logoHeader from "../../assets/image/logoHeader.svg";
import iconTel from "../../assets/image/iconTel.svg";
import { Button } from "../Button";
import { Burger } from "./Burger/Burger";
import "./styles.scss";

export const Header = ({ stateModalActive }) => {
  return (
    <div className="container">
      <div className="header">
        <Burger />
        <div className="header__logo">
          <img src={logoHeader} alt="" />
        </div>
        <nav className="header__nav">
          <ul className=" header__menu">
            <li className="header__item">
              <a href="#">УСЛУГИ</a>{" "}
            </li>
            <li className="header__item">
              <a href="#">ПОЧЕМУ МЫ</a>
            </li>
            <li className="header__item">
              <a href="#">ОБОРУДОВАНИЕ</a>
            </li>
            <li className="header__item">
              <a href="#">АКЦИИ</a>
            </li>
            <li className="header__item">
              <a href="#">FAQ</a>
            </li>
            <li className="header__item">
              <a href="#">КОНТАКТЫ</a>
            </li>
          </ul>
        </nav>
        <div className="header__contacts">
          <div className="contacts_tel">
            <a href="tel:">
              <Button type="small">
                <img src={iconTel} alt="" />
              </Button>
            </a>
          </div>
          <div className="contacts_request">
            <Button
              stateModalActive={stateModalActive}
              onClick={stateModalActive}>
              <p>Оставить заявку</p>{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
