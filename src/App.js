import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Root from './components/Root'

function App() {
  return (
    <div>
      <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css"></link>
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet"></link>
      <link href="css/sb-admin-2.min.css" rel="stylesheet"></link>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Root />
          </Route>
          <Route path="/app">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
