import Navbar from "components/Navbar";
import GithubSearch from "pages/GithubSearch";
import Home from "pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
        <Route path="/" exact>
            <Home />
        </Route>       
        <Route path="/githubsearch">
            <GithubSearch />
        </Route>       
    </Switch>
  </BrowserRouter>
);

export default Routes;
