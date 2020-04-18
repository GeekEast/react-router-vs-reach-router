import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';

let Home = (props: RouteComponentProps<any>) => <div>Home</div>;
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
