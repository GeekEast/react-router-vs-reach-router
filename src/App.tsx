import React from 'react';
import { Router, RouteComponentProps, Link, useParams } from '@reach/router';

const Home = (props: RouteComponentProps<any>) => <h1>Home</h1>;
const Dash = (props: RouteComponentProps<any>) => <h1>Dash</h1>;
const Invoices = (props: RouteComponentProps<any>) => <h1>Invoices</h1>;
const Team = (props: RouteComponentProps<any>) => <h1>Team</h1>;
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
        <Link to="dashboard/invoices">Invoices</Link>
        <Link to="dashboard/team">Team</Link>
      </nav>
      <Router>
        <Home path="/"></Home>
        <Dash path="dashboard">
          <Invoices path="invoices"></Invoices>
          <Team path="team"></Team>
        </Dash>
      </Router>
    </div>
  );
};

export default App;
