import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import About from './pages/About';
import Project from './pages/Project';
import Team from './pages/Team';

const App = () => {
  //console.log(window.location)

  return (

      <>
      <Router>
        <Sidebar />
          <Switch>
            <Route path='/about' component={withRouter(About)} />
            <Route path='/project' component={withRouter(Project)} />
            <Route path='/team' component={withRouter(Team)} />
            <Route path='/' exact component={withRouter(Home)} />
          </Switch>
      </Router>
        
    </>

  );
}

const Home = () => (
  <div>
    <h1>REALM Home Page</h1>
  </div>
)

export default App;
