import ButtonIcon from "components/ButtonIcon";
import { useState } from "react";
import "./styles.css";

type FormData = {
  usuariogithub: string;
}

const GithubSearch = () => {

  const [formData, setFormData] = useState<FormData>({
    usuariogithub: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]:value });
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="git-search-container">
      <div className="container search-container">
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <h4>Encontre um perfil Github</h4>
            <input 
                type="text"
                name="usuariogithub"
                value={formData.usuariogithub}
                className="search-input"
                placeholder="Usuário Github"
                onChange={handleChange}
            />
            <ButtonIcon text="Encontrar" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default GithubSearch;
