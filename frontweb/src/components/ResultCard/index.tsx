import "./styles.css";

type Props = {
  title: string;
  description: string;
}

const ResultCard = ( {title, description} : Props ) => {
  return (
    <div className="result-card-container">
      <h2 className="result-title">{title}</h2>
      <p className="result-description">{description}</p>
    </div>
  );
};

export default ResultCard;
