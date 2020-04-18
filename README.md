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

#### Programatically Navigate
- navigate returns a **promise**, you can use `await`
```javascript
const Team = (props: RouteComponentProps<any>) => {
  const navigate = useNavigate();
  const onBtnClick = () => navigate('/');
  return (
    <div>
      <h1>Team</h1><button onClick={onBtnClick}>Go back to Home</button>
    </div>
  );
};
```

#### Redirect
> Please use `noThrow` for some reason
- from `localhost:1111/dash` to `localhost:111/dash/dashboard` in `Router`
```javascript
<Router>
  <Redirect from="/dash" to="dashboard" noThrow></Redirect>
</Router>
```
- from `localost:1111/dash` to `localhost:1111/dashboard` in `Router`

```javascript
<Router>
  <Redirect from="/dash" to="../dashboard" noThrow></Redirect>
</Router>
```
- from anywhere in code outside `Router`
```javascript
 <Invoices path="invoices" redirect={true}></Invoices>


const Invoices = (props: RouteComponentProps<any>) => {
  if (props.redirect){
    return <Redirect to="/" noThrow></Redirect>
  }
  return <h1>Invoices</h1>;
};
```

### Commits
- [React Router](https://github.com/GeekEast/react-router-vs-reach-router/commit/1f8f7a71a6a7fd535d045bd0db0088e53e77e85c)
- Reach Router
  - [basic usage](https://github.com/GeekEast/react-router-vs-reach-router/commit/12ee4ea58c53930ee02d4c824a7aa4ee4e0aabb2)
  - [Nav with Link](https://github.com/GeekEast/react-router-vs-reach-router/commit/4280de827970ed48ed49ae56ad41f3299ec36158)
  - [dynamic path & read params from url using props](https://github.com/GeekEast/react-router-vs-reach-router/commit/aeea322420a9265f6a772df1e05797ea9efbf21f)
  - [dynamic path & read params from url using useParams Hooks](https://github.com/GeekEast/react-router-vs-reach-router/commit/9ee329379496696e19d63d017f504cca2c7b4352)
  - [nest rourtes without nested components](https://github.com/GeekEast/react-router-vs-reach-router/commit/866b88539a3744902bddb972adcb0eda77a82911)
  - [nest rourtes with nested components - Right Way!](https://github.com/GeekEast/react-router-vs-reach-router/commit/adaf6e0f328660cae3d3907ef0f88412685e539f)
  - [content shared among parent path and chilrend path in nested routers](https://github.com/GeekEast/react-router-vs-reach-router/commit/efadfaa0661a8424fb80fdb78534d295d16d0665)
  - [content only on the parent path & not shared among children path in nested routers](https://github.com/GeekEast/react-router-vs-reach-router/commit/e4c19d026ae0c62f1cf4c8855ac0ae8faec4436f)
  - [default router for 404 not found](https://github.com/GeekEast/react-router-vs-reach-router/commit/41b6b6c70d51bf8c9e4da832fd8fd52bc3c3d0bf)
  - [mutiple routers for same url](https://github.com/GeekEast/react-router-vs-reach-router/commit/2a0b220b1fe20a3a39eb791b826719403f9cd8f3)
  - [embedded routers & summary of nested rourters](https://github.com/GeekEast/react-router-vs-reach-router/commit/4f0cae81627272ab3f7860c948e765591dcb7f81)
  - [programatically navigate without hooks](https://github.com/GeekEast/react-router-vs-reach-router/commit/f7690e1f014e1d080c450e7e1daf025625733d67)
  - [programatically navigate with hooks](https://github.com/GeekEast/react-router-vs-reach-router/commit/4e860fbad60abafdc7e1037f70e7d919c928c362)
  - [you can use await before navigate()](https://github.com/GeekEast/react-router-vs-reach-router/commit/ebdec787e8cdc1d794d2b339639068d648e0311a)
