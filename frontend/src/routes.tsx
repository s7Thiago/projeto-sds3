import DashboardPage from "pages/Dashboard/dashboard";
import HomePage from "pages/Home/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";



// Define as rotas de navegação do sistema
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>

                <Route path="/dashboard">
                    <DashboardPage />
                </Route>


            </Switch>
        </BrowserRouter>
    );
}

export default Routes;