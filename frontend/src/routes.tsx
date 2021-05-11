import DashboardPage from "pages/Dashboard/dashboard_page";
import HomePage from "pages/Home/home_page";
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