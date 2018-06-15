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
                {Object.keys(Routes).map(function (key) {
                    return (
                        <Route
                            exact={Routes[key].exact}
                            path={Routes[key].url}
                            component={Routes[key].component}
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
