import React from "react";
import logoHeader from "../../assets/image/logoHeader.svg";
import iconTel from "../../assets/image/iconTel.svg";
import { Button } from "../Button";
import "./header.scss";
import { Burger } from "./Burger/Burger";

export const Header = ({ stateModalActive }) => {
  return (
    <div className="container">
      <div className="header">
        <Burger />
        <div className="header__logo">
          <img src={logoHeader} alt="" />
        </div>
        <nav className="header__nav">
          <ul className="menu">
            <li>
              <a href="">УСЛУГИ</a>{" "}
            </li>
            <li>
              <a href="">ПОЧЕМУ МЫ</a>
            </li>
            <li>
              <a href="">ОБОРУДОВАНИЕ</a>
            </li>
            <li>
              <a href="">АКЦИИ</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">КОНТАКТЫ</a>
            </li>
          </ul>
        </nav>
        <div className="header__contacts">
          <div className="contacts_tel"></div>
          <Button type="small">
            <img src={iconTel} alt="" />
          </Button>
          <Button onClick={stateModalActive}>
            <p>Оставить заявку</p>{" "}
          </Button>
          <div className="contacts_request"></div>
        </div>
      </div>
    </div>
  );
};
