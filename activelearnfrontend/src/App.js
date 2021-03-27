// import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import JoinPage from './pages/join';
import Create from './pages/create';
import Dashboard from './pages/dashboard';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/join" exact component={JoinPage}/>
        <Route path="/create" exact component={Create}/>
        <Route path="/dashboard" exact component={Dashboard}/>
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
