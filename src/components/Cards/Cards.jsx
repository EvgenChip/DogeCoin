import React, { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/posts/";
export const Cards = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get(baseUrl).then((res) => setState(res.data));
  }, []);
  const data = state.slice(0, 5);
  console.log(data);
  return (
    <div className="cards">
      {data.map((card) => {
        return (
          <div className="card">
            <div className="card__img">
              <img src="" alt="" />
            </div>
            <div className="card__content">
              <div className="content_title"></div>
              <div className="content_body">{card.title}</div>
              <div className="content_description">{card.body}</div>
              <div className="content_autor"></div>
              <div className="card__button"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
