import React, { useState, useEffect, useCallback } from "react";

import { phoneIsValid, mailIsValid } from "../../../../utils";
import { sendFormPost } from "../../../../api/API.js";

export const useForm = (stateModalActive) => {
  const [userName, setUserName] = useState("");
  const [userNameDirty, setUserNameDirty] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [emailError, setEmailError] = useState("Введите почту");
  const [phoneError, setPhoneError] = useState("Введите номер");
  const [formValid, setFormValid] = useState(false);
  const [question, setQuestion] = useState("");
  const [questionDirty, setQuestionDirty] = useState(false);
  const [questionError, setQuestionError] = useState("Введите ваш вопрос");

  useEffect(() => {
    emailError || phoneError || question === "" || userName === ""
      ? setFormValid(false)
      : setFormValid(true);
  }, [emailError, phoneError, email, phone, question]);

  const actionsAfterSend = useCallback(() => {
    setQuestion("");
    setUserName("");
    setEmail("");
    setPhone("");
    setQuestionDirty(false);
    setEmailDirty(false);
    setPhoneDirty(false);
    setFormValid(false);
    setEmailError("Введите почту");
    setPhoneError("Введите номер");
    setQuestionError("Введите ваш вопрос");
  }, []);

  const sendForm = useCallback(async () => {
    try {
      sendFormPost({
        phone,
        email,
        userName,
        question,
      });

      stateModalActive();
      actionsAfterSend();
    } catch (error) {
      console.log("Sending error", error);
      console.error(error);
    }
  }, [phone, email, userName, question, actionsAfterSend]);

  const questionHandler = useCallback(({ target }) => {
    setQuestion(target.value);
  }, []);

  const phoneHandler = useCallback(({ target }) => {
    setPhone(target.value);

    phoneIsValid(target.value)
      ? setPhoneError("")
      : setPhoneError("Некорректный телефон");
  }, []);

  const emailHandler = useCallback(({ target }) => {
    setEmail(target.value);

    mailIsValid(target.value)
      ? setEmailError("")
      : setEmailError("Некорректный емейл");
  }, []);

  const blurHandler = useCallback(
    ({ target }) => {
      const inputNameAction = {
        email: () => setEmailDirty(true),
        phone: () => setPhoneDirty(true),
        question: () => setQuestionDirty(true),
      };

      inputNameAction[target.name]();
    },
    [setEmailDirty, setPhoneDirty, setQuestionDirty]
  );

  const blurName = useCallback(({ target }) => {
    target.name === "name" && setUserNameDirty(true);
  }, []);

  const changeUserName = useCallback(({ target }) => {
    setUserName(target.value);
  }, []);

  return {
    email,
    setEmail,
    phone,
    setPhone,
    emailDirty,
    setEmailDirty,
    phoneDirty,
    setPhoneDirty,
    emailError,
    setEmailError,
    setQuestionError,
    phoneError,
    setPhoneError,
    formValid,
    setFormValid,
    sendForm,
    phoneHandler,
    emailHandler,
    questionHandler,
    questionDirty,
    blurHandler,
    question,
    userNameDirty,
    userName,
    changeUserName,
    blurName,
  };
};
