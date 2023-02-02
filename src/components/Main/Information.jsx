import { Button } from "../Button";

import "./information.scss";
export const Information = ({ stateModalActive, block }) => {
  return (
    <div className="information">
      <div className="information__title">{block.title}</div>
      <div className="information__description">{block.description}</div>
      <div className="information__button">
        {" "}
        <Button onClick={stateModalActive}>
          <p>Оставить заявку</p>
        </Button>{" "}
      </div>
    </div>
  );
};
