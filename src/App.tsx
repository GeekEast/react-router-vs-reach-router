import React from 'react';
import { Router, RouteComponentProps, Link, useParams } from '@reach/router';

const Home = (props: RouteComponentProps<any>) => <h1>Home</h1>
const Dash = (props: RouteComponentProps<any>) => <h1>Dash</h1>;
const Invoice = (props: RouteComponentProps<any>) => {
  const params = useParams();
  return <h1>Invoice {params.id}</h1>;
};

const App = () => {
  return (
    <div>
      {/* will be showed on every page */}
      <nav> 
        <Link to="/">Home</Link>
        <Link to="dashboard">Dashboard</Link>
        <Link to="invoice/4">Invoice 4</Link>
        <Link to="invoice/5">Invoice 5</Link>
        <Link to="invoice/6">Invoice 6</Link>
      </nav>
      <Router>
        <Home path="/"></Home>
        <Dash path="dashboard"></Dash>
        <Invoice path="invoice/:id"></Invoice>
      </Router>
    </div>
  );
};

export default App;
