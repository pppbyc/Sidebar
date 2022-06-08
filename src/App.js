import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import Vision from './pages/Vision';
import Scope from './pages/Scope';
import Feature from './pages/Feature';

const App = () => {
  //console.log(window.location)

  return (

      <>
      <Router>
        <Sidebar />
          <Switch>
            <Route path='/vision' component={withRouter(Vision)} />
            <Route path='/scope' component={withRouter(Scope)} />
            <Route path='/feature' component={withRouter(Feature)} />
            <Route path='/' exact component={withRouter(Home)} />
          </Switch>
      </Router>
        
    </>

  );
}

const Home = () => (
  <div className="home">
    <h2>REALM Home Page</h2>
  </div>
)

export default App;
