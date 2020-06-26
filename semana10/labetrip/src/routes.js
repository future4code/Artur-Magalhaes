import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Apply from './pages/ApplyTripPage';
import CreateTrip from './pages/CreateTripPage';
import DetailTrip from './pages/DetailTripPage';
import Home from './pages/HomePage';
import ListTrip from './pages/ListTripPage';
import Login from './pages/LoginPage';

export default function Routes() {
  return(
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/apply/:id" exact component={Apply} />
        <Route path="/createtrip" exact component={CreateTrip} />
        <Route path="/detailtrip/:id" exact component={DetailTrip} />
        <Route path="/listtrip" exact component={ListTrip} />
        <Route path="/login" exact component={Login} />
      </Switch>
    );
}