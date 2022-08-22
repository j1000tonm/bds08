import "./styles.css";

import axios from "axios";
import ButtonIcon from "components/ButtonIcon";
import ResultCard from "components/ResultCard";
import { useState } from "react";
import CardLoader from "./CardLoader";
import DescriptionLoader from "./DescriptionLoader";

type FormData = {
  usuariogithub: string;
};

type Apigithub = {
  avatar_url: string;
  url: string;
  followers: string;
  location: string;
  name: string;
};

const GithubSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [apigithub, setApigithub] = useState<Apigithub>();

  const [formData, setFormData] = useState<FormData>({
    usuariogithub: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${formData.usuariogithub}`)
      .then((response) => {
        setApigithub(response.data);
        console.log(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setApigithub(undefined);
        console.log(error);
      });
  };

  return (
    <div className="git-search-container">
      <div className="container search-container">
        <form onSubmit={handleSubmit}>
          <div className="form-content-container">
            <h5>Encontre um perfil Github</h5>
          </div>
          <div>
            <input
              type="text"
              name="usuariogithub"
              value={formData.usuariogithub}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
          </div>
          <ButtonIcon text="Encontrar" />
        </form>
      </div>
      {apigithub && (
        <>
          <div className="container result-container">
            <div className="result-card">
              <div className="row">
                <div className="col-lg-6">
                  {isLoading ? (
                    <CardLoader />
                  ) : (
                    <div className="img-container">
                      <img src={apigithub?.avatar_url} alt="Avatar Github" />
                    </div>
                  )}
                </div>
                <div className="col-lg-6">
                  {isLoading ? (
                    <DescriptionLoader />
                  ) : (
                    <div className="description-container">
                      <h5>Informações</h5>
                      <ResultCard title="Perfil:" description={apigithub.url} />
                      <ResultCard
                        title="Seguidores:"
                        description={apigithub.followers}
                      />
                      <ResultCard
                        title="Localidade:"
                        description={apigithub.location}
                      />
                      <ResultCard title="Nome:" description={apigithub.name} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GithubSearch;
