import React from "react";
import modalLuna from "../../assets/image/modalLuna.svg";
import modalClose from "../../assets/image/modalClose.svg";
import { Button } from "../Button";
import "./modal.scss";
import { Form } from "./Form/Form";

export const Modal = ({ stateModalActive }) => {
  return (
    <div className="modal">
      <div className="modal__wrap">
        <div className="modal__image">
          {/* <img src={modalLuna} alt="" /> */}
        </div>
        <div className="modal__request">
          <div className="modal__top">
            <div className="modal__title">
              <h1>ОСТАВЬТЕ ЗАЯВКУ</h1>
              <p>
                Оставьте заявку и наш менеджер свяжется с вами <br /> в течение
                10 -15 минут
              </p>
            </div>
            <div className="modal__button">
              <Button onClick={stateModalActive} type="small">
                <img src={modalClose} alt="" />
              </Button>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};
