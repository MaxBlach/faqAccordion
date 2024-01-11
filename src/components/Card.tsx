import "../css/Card.css";
import Answer from "./Answer";

interface Props {
  title: string;
}

const Card = ({ title }: Props) => {
  return (
    <div className="card-background">
      <h1 className="title">
        <img className="star" src="/src/assets/icon-star.svg" />
        {title}
      </h1>
      <div className="anwser">
        <Answer />
      </div>
    </div>
  );
};

export default Card;
