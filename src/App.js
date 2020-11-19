import React from 'react';
import { Route } from 'react-router-dom';

import Landing from './containers/LandingContainer';
import Dashboard from './containers/DashboardContainer';
import Meals from './containers/MealsContainer';
import Anthropometric from './containers/AnthropometricContainer';

function App() {
  return (
    <main className="App">
      <Route
        exact
        path="/"
        component={Landing}
      />
      <Route
        path="/dashboard"
        component={Dashboard}
      />
      <Route
        path="/meals"
        component={Meals}
      />
      <Route
        path="/assess"
        component={Anthropometric}
      />
    </main>
  );
}

export default App;
