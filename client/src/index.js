import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Adoption from "./Routes/Adoption.js"
import AdoptionForm from "./Routes/Adoption/AdoptionForm.js"
import Shop from "./Routes/Shop.js"
import Social from "./Routes/Social.js"

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([{
    path: "/",
    element: <App/>,
    children: [
      {
        path: "Social",
        element: <Social/>
      },
      {
        path:"Shop",
        element: <Shop/>
      },
      {
        path: "Adoption",
        element: <Adoption/>,
        children: [
          {path: "Adoption Application",
          element: <AdoptionForm/>}
        ]
      }
    ]
  }])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
reportWebVitals();
