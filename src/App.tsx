import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Main = () => <div>Main Page</div>;
const PageOne = () => <div>PageOne</div>;
const PageTwo = () => <div>PageTwo</div>;
const Page = ({
  match: {
    params: { id },
  },
}: any) => <div>Page {id}</div>;
const SimplePage = () => <div>Simple Page</div>
const Error = () => <div>404</div>;

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pageone">One</Link>
          </li>
          <li>
            <Link to="/pagetwo">Two</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/pageone" exact component={PageOne}></Route>
        {/* order 1: 定 */}
        <Route path="pageone/simple" componet={SimplePage}></Route> 
        {/* order 2: 动 */}
        <Route path="/pageone/:id" component={Page}></Route>
        <Route path="/pagetwo" exact component={PageTwo}></Route>
        <Route path="/" exact component={Main}></Route>
        <Route component={Error}></Route>
      </Switch>
    </Router>
  );
};

export default App;
