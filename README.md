### Compare React Router vs Reach Router
- Install
```sh
yarn add react-router-dom @reach-router
yarn add --dev @types/react-router-dom @types/reach__router
```

### Reach Router
- by default: `exact`


#### Nested Router
> I prefer the 2nd method
- Method 1: Put nested routers **outside** parent component with `children` keyword
```javascript
const Dashboard = (props: RouteComponentProps<any>) => {
    const { children } = props;

    return (
        <h1>Dash</h1>
        { children }
    )
}

<Router>
    <Dashboard path="dashboard">
          <Invoices path="invoices"></Invoices>
          <Team path="team"></Team>
    </Dashboard>
</Router>
```
- Method 2: Put nested routers **inside** parent component with `/*` keyword
```javascript
const Dashboard = (props: RouteComponentProps<any>) => {
    return (
        <h1>Dash</h1>
        <Router>
          <Invoices path="invoices"></Invoices>
          <Team path="team"></Team>
        </Router>
    )
}
<Router>
    <Dashboard path="dashboard/*"></Dashboard>
</Router>
```

#### Default Router for 404
- You have to set it for **each level** of Routers
```javascript
<Router>
    <Home path="/"></Home>
    <Dash path="dashboard">
        <Dashboard path="/"></Dashboard>
        <Invoices path="invoices"></Invoices>
        <Team path="team"></Team>
        {/* Dash Level */}
        <Error default></Error>
    </Dash>
    {/* Rourter Level  */}
    <Error default></Error>
</Router>
```
