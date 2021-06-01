import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navv from './Navv';
import Sche from './Scheduler'
import Adduser from './Adduser';
import Dashbord from './Dashbord';
import Addcomp from './Addcomp';
import Addcompupdate from './Addcompupdate';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
 
  
  return (
    <div className="pp">
          <Router>
      <Navv/>
      <Route path='/adduser' component={Adduser} ></Route>
      <Route path='/dashbord' component={Dashbord} ></Route>
      <Route path='/addc' component={Addcomp} ></Route>
      <Route path='/compupdate' component={Addcompupdate} ></Route>
      <Route path='/' component={Sche} exact></Route>


      
      {/* <Adduser></Adduser> */}
      {/* <Dashbord/> */}
      {/* <Addcomp></Addcomp> */}
      {/* <Addcompupdate></Addcompupdate>
      <Sche></Sche> */}
      </Router>
      
    </div>
  );
}

export default App;
