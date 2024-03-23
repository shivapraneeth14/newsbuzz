import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Dasboard from './components/Dashboard.jsx';
import Performance from './components/Performance.jsx';
import Manage from './components/Manage.jsx';
import Create from './components/Create.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
      path:"Dashboard",
      element:<Dasboard/>
    },
    {
      path:"Manage",
      element:<Manage/>
    },
    {
      path:"Create",
      element:<Create/>
    },
    {
      path:"Performance",
      element:<Performance/>
    },
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>
);
