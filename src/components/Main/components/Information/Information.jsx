import { Button } from "../../../Button";

import "./styles.scss";

export const Information = ({ stateModalActive, block }) => {
  const { title, description } = block;

  return (
    <main className="information">
      <div className="information__title">
        <h1>{title}</h1>{" "}
      </div>
      <div className="information__description">{description}</div>
      <div className="information__button">
        {" "}
        <Button onClick={stateModalActive}>
          <p>Оставить заявку</p>
        </Button>{" "}
      </div>
    </main>
  );
};
