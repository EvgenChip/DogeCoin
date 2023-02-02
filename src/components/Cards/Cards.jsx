import React, { useState, useEffect } from "react";
import axios from "axios";
import defImg from "../../assets/image/cardImage/Bitmap.svg";
import "./cards.scss";
import { Button } from "../Button";

const baseUrl = "https://jsonplaceholder.typicode.com/posts/";
export const Cards = () => {
  const [state, setState] = useState([]);
  const [cardLength, setCardLength] = useState(5);
  useEffect(() => {
    axios.get(baseUrl).then((res) => setState(res.data));
  }, []);
  const data = state.slice(0, cardLength);
  console.log(data);
  return (
    <div className="cards">
      {/* <h1>Карточки</h1> */}
      <div className="cards__wrap">
      {data.map((card) => {
        return (
          <div className="card">
            <div className="card__img">
              <img src={defImg} alt="" />
            </div>
            <div className="card__content">
              <div className="content_title">BRIDGE</div>
              <div className="content_body">{card.title}</div>
              <div className="content_description">{card.body}</div>
              <div className="content_autor">
                Posted by Eugenia, on July 24, 2019
              </div>

              <button>Continue reading</button>
            </div>
          </div>
        );
      })}
      </div>

      <div className="cards__button">
        <Button onClick={() => setCardLength(cardLength + 5)}>
          {" "}
          <p>Загрузить ещё</p>{" "}
        </Button>
      </div>
    </div>
  );
};
