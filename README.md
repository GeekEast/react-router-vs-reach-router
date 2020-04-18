### Compare React Router vs Reach Router
- Install
```sh
yarn add react-router-dom @reach-router
yarn add --dev @types/react-router-dom @types/reach__router
```

### Reach Router
- by default: `exact`
#### Nested Router
- nested **component** with `childern`
> withouth nested components, no chilredn components will be displayed
```javascript
const Dashboard = (props: RouteComponentProps<any>) => {
    const { children } = props;

    return (
        <h1>Dash</h1>
        { children }
    )
}
```
- nested **routers**
```javascript
<Router>
    <Dashboard>
          <Invoices path="invoices"></Invoices>
          <Team path="team"></Team>
    </Dashboard>
</Router>
```
> using @reach/router nested router is just like using normal nested components in React

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
