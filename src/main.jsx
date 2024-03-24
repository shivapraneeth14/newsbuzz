import React from 'react';
import ReactDOM from  "react-dom/client"
import App from './App.jsx';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './components/Dashboard.jsx';
import Performance from './components/Performance.jsx';
import Manage from './components/Manage.jsx';
import Create from './components/Create.jsx';
import Topcommented from './components/Topcommented.jsx';
import Topliked from './components/Topliked.jsx';
import Topshared from './components/Topshared.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "Dashboard",
        element: <Dashboard />,
      },
      {
        path: "Manage",
        element: <Manage />
      },
      {
        path: "Create",
        element: <Create />
      },
      {
        path: "Performance",
        element: <Performance />
      },
      {
        path: "/Dashboard/Topcommented",
        element: <Topcommented />
      },
      {
        path: "/Dashboard/Topliked",
        element: <Topliked/>
      },
      {
        path: "/Dashboard/Topshared",
        element: <Topshared />
      }
     
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);