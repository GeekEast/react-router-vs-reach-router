import React, { Fragment } from 'react';
import { Router, RouteComponentProps, Link, useParams } from '@reach/router';

const Home = (props: RouteComponentProps<any>) => <h1>Home</h1>;
const Dash = (props: RouteComponentProps<any>) => (
  <Fragment>
    {/* this will be showed on every children page */}
    {/* <h1>Dash</h1> */}
    {props.children}
  </Fragment>
);
const Dashboard = (props: RouteComponentProps<any>) => <h1>Dashboard</h1>;
const Invoices = (props: RouteComponentProps<any>) => <h1>Invoices</h1>;
const Team = (props: RouteComponentProps<any>) => <h1>Team</h1>;
const Invoice = (props: RouteComponentProps<any>) => {
  const params = useParams();
  return <h1>Invoice {params.id}</h1>;
};
const Error = (props: RouteComponentProps<any>) => <h1>404 Page Not Found</h1>

const App = () => {
  return (
    <div>
      {/* nav will be showed on every page */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="dashboard">Dashboard</Link>
        <Link to="dashboard/invoices">Invoices</Link>
        <Link to="dashboard/team">Team</Link>
      </nav>
      <Router>
        <Home path="/"></Home>
        <Dash path="dashboard">
          {/* this will only be showed in the exact /dashboard page, not showed in other children pages */}
          <Dashboard path="/"></Dashboard>
          <Invoices path="invoices"></Invoices>
          <Team path="team"></Team>
          {/* you have to use Default Router again here */}
          <Error default></Error>
        </Dash>
        <Error default></Error>
      </Router>
    </div>
  );
};

export default App;
