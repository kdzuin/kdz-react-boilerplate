import React from 'react';
import { Helmet } from 'react-helmet';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Routes from '../../../Routes';

function App () {
    return [
        (
            <Helmet key="meta-tags">
                <title>The Application</title>
                <meta name="description" content="This is a boilerplate for side projects with client routing"/>
            </Helmet>
        ),
        (
            <Router key="router">
                <Switch>
                    {Routes.map(function (route, key) {
                        return (
                            <Route
                                exact={route.exact}
                                path={route.url}
                                component={route.component}
                                key={key}
                            />
                        )
                    })}
                </Switch>
            </Router>
        )
    ]
}

App.Routes = Routes;

export default App;
