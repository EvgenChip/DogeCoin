import React, { useState, useCallback } from "react";

import { Button } from "../../Button";
import { useForm } from "./hooks/useForm.js";
import "./styles.scss";

export const Form = ({ stateModalActive }) => {
  const {
    formValid,
    question,
    email,
    phone,
    questionDirty,
    phoneDirty,
    emailError,
    phoneError,
    emailDirty,
    questionError,
    userNameDirty,
    userName,
    questionHandler,
    sendForm,
    emailHandler,
    blurHandler,
    phoneHandler,
    changeUserName,
    blurName,
  } = useForm(stateModalActive);

  return (
    <form className="form">
      {userNameDirty && userName === "" && (
        <div className="form__error">Введите ваше имя</div>
      )}
      <input
        value={userName}
        onChange={changeUserName}
        onBlur={blurName}
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
      <textarea
        value={question}
        onChange={questionHandler}
        onBlur={blurHandler}
        placeholder="Ваш вопрос*"
        id="formQuestion"
        type="text"
        name="question"
        className="form__input_question"
      />
      {questionDirty && question === "" && (
        <div className="form__error">{questionError}</div>
      )}
      <div className="form__button">
        <Button onClick={sendForm} disabled={!formValid}>
          <p className="form__button_inner">Отправить</p>
        </Button>
        <span>
          Нажимая на кнопку “Оставить заявку” вы <br /> соглашаетесь <br /> с
          <a href="">“Пользовательским соглашением”</a>
        </span>
      </div>
    </form>
  );
};
