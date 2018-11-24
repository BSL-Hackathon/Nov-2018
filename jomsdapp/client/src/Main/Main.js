import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../Home';
import { Constitudor } from '../Constitudor';
import { Empresas } from "../Empresas";



class Main extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/constituir" component={Constitudor} />
                <Route path="/empresas" component={Empresas} />
            </Switch>

        );
    }
}

export { Main };