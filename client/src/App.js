import './css/App.css';
import NavBar from './NavBar.js'
import {Outlet} from 'react-router-dom';
import {useState, useEffect} from 'react'


export default function App() {
  //default home page is not logged in and iwll prompt to log in or sign up, sign up will lead to a form with all fo the parameters and login will lead to a form that 
  //fetch and state to see if there is a user, then change the login/progile/logout/signup options ont eh homepage depending on presence of user using ternary
 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pets Pets Pets!</h1>
      </header>
      <NavBar/>
      <Outlet/>
    </div>
  );
}


