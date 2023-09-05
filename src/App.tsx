import Main from 'pages/Main';
import Welcome from 'pages/Welcome';
import { Route, Switch, Redirect } from 'wouter';
import useLocation from 'wouter/use-location';

function App() {
  const [location] = useLocation();
  if (location === "/") {
    return <Redirect to="/create"></Redirect>
  }
  return (
    <div>
      <Switch>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/create">
          <Welcome />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
