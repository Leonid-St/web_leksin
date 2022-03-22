import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// or less ideally
import { NavBar } from './Navbar';
import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import { Task1 } from './Task1';
import { Task2 } from './Task2';
import { Task3 } from './Task3';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch >
        <Route  path='/task1' ><Task1/></Route>
        <Route  path='/task2' ><Task2/></Route>
        <Route  path='/task3' ><Task3/></Route>
        {/* <Route  path='/task1' ><Task4/></Route> */}
      </Switch>
    </div>
  );
}

export default App;
