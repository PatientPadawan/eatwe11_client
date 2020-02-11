import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from './routes/Landing/Landing';
import Dashboard from './routes/Dashboard/Dashboard';
import Meals from './routes/Meals/Meals';
import Anthropometric from './routes/Anthropometric/Anthropometric';

function App() {
  return (
    <main className="App">
      <Router>
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
          path="/quiz"
          component={Anthropometric}
        />
      </Router>
    </main>
  );
}

export default App;
