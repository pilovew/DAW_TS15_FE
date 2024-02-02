import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Login.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: '/protected',
    element: <div>Página protegida</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
