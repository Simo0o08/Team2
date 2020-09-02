import React from 'react';
//import logo from './logo.svg';
import './App.css';
// import Profiles from './Profiles';
//import Login from './Login';
import HomePage from './HomePage';
//import SimpleModal from './SimpleModal';
import WelcomePage from './WelcomePage';
import Login from './Login';
import SignUp from './SignUp';
import Profiles from './Profiles';
import {BrowserRouter as Router ,Switch , Route } from 'react-router-dom';
import SelectImg from './SelectImg';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <SelectImg /> */}
    <Switch>
    <Route path='/' exact component={WelcomePage} />
    <Route path='/Login' component={Login} />
    <Route path='/SignUp' component={SignUp} />
    <Route path='/HomePage' component={HomePage} />
    <Route path='/Profiles' component={Profiles} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
