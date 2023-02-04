import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import defImg from "../../assets/image/cardImage/Bitmap.svg";
import "./styles.scss";
import { Button } from "../Button";

const baseUrl = "https://jsonplaceholder.typicode.com/posts/";
export const Cards = () => {
  const [state, setState] = useState([]);
  const [cardLength, setCardLength] = useState(5);

  useEffect(() => {
    axios.get(baseUrl).then((res) => setState(res.data));
  }, []);

  const data = state.slice(0, cardLength);

  const changeCardLength = useCallback(() => {
    setCardLength(cardLength + 5);
  }, [cardLength, setCardLength]);

  return (
    <main className="cards">
      <h1>Карточки</h1>
      <div className="cards__wrap">
        {data.map(({ id, title, body }) => {
          return (
            <div key={id} className="card">
              <div className="card__img">
                <img src={defImg} alt="" />
              </div>
              <div className="card__content">
                <div className="content_title">
                  <h3>BRIDGE</h3>
                </div>
                <div className="content_body">{title}</div>
                <div className="content_description">{body}</div>
                <div className="content_autor">
                  Posted by Eugenia, on July 24, 2019
                </div>
                <button>Continue reading</button>
              </div>
            </div>
          );
        })}
      </div>
      {cardLength < 30 && (
        <div className="cards__button">
          <Button onClick={changeCardLength}>
            {" "}
            <p>Загрузить ещё</p>{" "}
          </Button>
        </div>
      )}
    </main>
  );
};
