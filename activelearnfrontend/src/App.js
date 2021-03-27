// import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import JoinPage from './pages/join';
import Create from './pages/create';
import Teacher from './pages/teacher';
import Dashboard from './pages/dashboard';
import Student from './pages/student';
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
        <Route path="/teacher" exact component={Teacher}/>
        <Route path="/student" exact component={Student}/>
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
