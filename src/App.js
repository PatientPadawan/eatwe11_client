import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from './routes/Landing/Landing';

function App() {
  return (
    <main className="App">
      <Router>
        <Route
          exact
          path="/"
          component={Landing}
        />
      </Router>
    </main>
  );
}

export default App;
