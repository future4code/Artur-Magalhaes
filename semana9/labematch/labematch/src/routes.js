import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Match from './pages/Match';

export default function Routes() {
    return(
        <Switch>
            <Route path="/" exact component={Match} />
        </Switch>
    )
}