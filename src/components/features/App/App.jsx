import React  from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import MainPage from '../MainPage/MainPage';
import HelloPage from '../HelloPage/HelloPage';

function App () {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/hello" component={HelloPage} />
            </Switch>
        </Router>
    )
}

export default App;
