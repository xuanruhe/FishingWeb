import './App.css';

import React from "react"
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Fishes from './components/pages/Fishes';
import Fish from './components/pages/Fish';
import Tools from './components/pages/Tools';
import Weather from './components/pages/Weather';
import SignUp from './components/pages/SignUp';
import Recipe from './components/pages/Recipe';
import Login from './components/pages/Login';
import Forum from './components/pages/Forum';
import Post from './components/pages/Post';


function App() {
  return(
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path = '/' exact component={Home}/>
          <Route path = '/signup' exact component={SignUp}/>
          <Route path = '/fishes' exact component={Fishes}/>
          <Route path = '/tools' exact component={Tools}/>
          <Route path = '/recipe' exact component={Recipe}/>
          <Route path = '/weather' exact component={Weather}/>
          <Route path = '/login' exact component={Login}/>
          <Route path = '/forum' exact component={Forum}/>
          <Route path = '/forum/:title' exact component={Post} />
          <Route path = '/fishes/:name' exact component={Fish} />
        </Switch>
      </Router>
      

    </>
  )
  
}

export default App;
