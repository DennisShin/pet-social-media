import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './css/index.css';

import App from './App';
import LogIn from "./LogIn.js"
import Home from "./Home.js"
import UserProfile from  './UserProfile.js'
import Adoption from "./Routes/Adoption/AdoptionPage.js"
import Shop from "./Routes/Shop.js"
import Social from "./Routes/Social/SocialPage.js"
import SignUp from './SignUp.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  children:[
      {
        path:"/login",
        element: <LogIn/>
      },
      {
        path:"/signup",
        element: <SignUp/>
      },
      {
        path:"/home",
        element: <Home/>,
        children: [ 
        {
          path:'/home/userprofile',
          element: <UserProfile/>,
          // loader: async () => fetch('/api/me').then(response=>response.json())
      },
        {
          path: "/home/social",
          element: <Social/>
        },
        {
          path:"/home/shop",
          element: <Shop/>
        },
        {
          path: "/home/adoption",
          element: <Adoption/>
          }
        ]},
      ]
  }])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
reportWebVitals();
