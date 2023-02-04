import React from "react";

import modalClose from "../../assets/image/modalClose.svg";
import { Button } from "../Button";
import { Form } from "./Form/Form";
import "./modal.scss";

export const Modal = ({ stateModalActive }) => (
  <div className="modal">
    <div className="modal__wrap">
      <div className="modal__image"></div>
      <div className="modal__request">
        <div className="modal__top">
          <div className="modal__title">
            <h1>ОСТАВЬТЕ ЗАЯВКУ</h1>
            <p>
              Оставьте заявку и наш менеджер свяжется с вами <br /> в течение 10
              -15 минут
            </p>
          </div>
          <div className="modal__button">
            <Button onClick={stateModalActive} type="small">
              <img src={modalClose} alt="" />
            </Button>
          </div>
        </div>
        <Form stateModalActive={stateModalActive} />
      </div>
    </div>
  </div>
);
