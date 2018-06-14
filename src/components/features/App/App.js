import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Routes from '../../../Routes';
import NotFound from '../NotFound/NotFound';

function App () {
    return (
        <Router>
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
                <Route component={NotFound}/>
            </Switch>
        </Router>
    )
}

App.Routes = Routes;

export default App;
