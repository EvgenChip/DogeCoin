import React from "react";
import { Button } from "../../Button";

import "./form.scss";
import { useForm } from "./hooks/useForm.js";

export const Form = ({
  active,
  setFormActive,
  setModalActive,
  orders,
  setMetricActive,
  setOrders,
}) => {
  const {
    userName,
    formValid,
    email,
    phone,
    phoneDirty,
    emailError,
    phoneError,
    emailDirty,
    sendForm,
    nameUserHandler,
    emailHandler,
    blurHandler,
    phoneHandler,
  } = useForm(
    setOrders,
    setModalActive,
    setFormActive,
    setMetricActive,
    orders
  );
  return (
    <form className="form">
      <input
        value={userName}
        onChange={nameUserHandler}
        id="formName"
        type="text"
        name="name"
        className="form__input"
        placeholder="Ваше имя*"
      />

      <input
        value={email}
        onChange={emailHandler}
        onBlur={blurHandler}
        placeholder="MAGWAI@info.ru"
        id="formEmail"
        type="text"
        name="email"
        className="form__input"
      />
      {emailDirty && emailError && (
        <div className="form__error">{emailError}</div>
      )}

      <input
        value={phone}
        onChange={phoneHandler}
        onBlur={blurHandler}
        placeholder="+7(___)"
        id="formPhone"
        type="tel"
        name="phone"
        className="form__input"
      />
      {phoneDirty && phoneError && (
        <div className="form__error">{phoneError}</div>
      )}
      <input
        // value={phone}
        // onChange={phoneHandler}
        placeholder="Ваш вопрос*"
        id="formQuestion"
        type="text"
        name="question"
        className="form__input_question"
      />
      <div className="form__button">
        <button onClick={sendForm} disabled={!formValid}>
          <Button></Button>
        </button>

        <span>
          Нажимая на кнопку “Оставить заявку” вы <br /> соглашаетесь <br /> с
          <a href="">“Пользовательским соглашением”</a>
        </span>
      </div>
    </form>
  );
};
