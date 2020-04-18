import React from 'react';
import { Router, RouteComponentProps, Link } from '@reach/router';

let Home = (props: RouteComponentProps<any>) => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="dashboard">Dashboard</Link>
      </nav>
    </div>
  )
};
let Dash = (props: RouteComponentProps<any>) => <div>Dash</div>;

const App = () => {
  return (
    <Router>
      <Home path="/"></Home>
      <Dash path="/dashboard"></Dash>
    </Router>
  );
};

export default App;
