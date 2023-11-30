import './css/App.css';
import {Outlet} from 'react-router-dom';
import {useState, useEffect} from 'react'
// import { IoPawSharp } from "react-icons/io5"



export default function App() {
  //default home page is not logged in and iwll prompt to log in or sign up, sign up will lead to a form with all fo the parameters and login will lead to a form that 
  //fetch and state to see if there is a user, then change the login/progile/logout/signup options ont eh homepage depending on presence of user using ternary
 


  return (
 <div className="bg-beige p-4 font-extrabold ">
      <header className="font-extrabold font-pacifico text-8xl text-darkestbrown ">
        <h1 className='p-2'>Paws</h1>
      </header>
    <Outlet/>
</div>
  );
}