import ContentLoader from "react-content-loader";
import './styles.css';

const CardLoader = () => (
  <div className="card-loader-container">
    <ContentLoader
      width={300}
      height={250}
      viewBox="0 0 300 250"
      backgroundColor="#ecebeb"
      foregroundColor="#d6d2d2"
    >
      <rect x="0" y="0" rx="10" ry="10" width="300" height="250" />
    </ContentLoader>
  </div>
);

export default CardLoader;
