import ButtonIcon from "components/ButtonIcon";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Desafio Github API</h1>
      <h5>Bootcamp Spring React - DevSuperior</h5>
      <div>
        <Link to="/githubsearch">
          <ButtonIcon text="Começar" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
