import React, { Fragment } from 'react';
import { Router, RouteComponentProps, Link, useNavigate } from '@reach/router';

const Home = (props: RouteComponentProps<any>) => <h1>Home</h1>;
const Dash = (props: RouteComponentProps<any>) => (
  <Fragment>
    <Router>
      <Dashboard path="/"></Dashboard>
      <Invoices path="invoices"></Invoices>
      <Team path="team"></Team>
      <Error default></Error>
    </Router>
  </Fragment>
);
const Dashboard = (props: RouteComponentProps<any>) => <h1>Dashboard</h1>;
const Invoices = (props: RouteComponentProps<any>) => <h1>Invoices</h1>;
const Team = (props: RouteComponentProps<any>) => {
  const navigate = useNavigate();
  const onBtnClick = () => navigate('/');
  return (
    <div>
      <h1>Team</h1><button onClick={onBtnClick}>Go back to Home</button>
    </div>
  );
};
const HomeNav = (props: RouteComponentProps<any>) => <h1>Home Navigation</h1>;
const DashboardNav = (props: RouteComponentProps<any>) => (
  <h1>Dashboard Navigation</h1>
);
const Error = (props: RouteComponentProps<any>) => <h1>404 Page Not Found</h1>;

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

      <div>
        <Router>
          <HomeNav path="/"></HomeNav>
          <DashboardNav path="/dashbaord"></DashboardNav>
        </Router>
      </div>
      <Router>
        <Home path="/"></Home>
        <Dash path="dashboard/*"></Dash>
        <Error default></Error>
      </Router>
    </div>
  );
};

export default App;
