import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/error-page";
import App from './app';
import Home from './pages/home-page';
import POS from './pages/pos-page';
import Dashboard from './pages/dashboard-page';
import Orders from './pages/orders-page';
import Categories from './pages/categories-page';
import MenuItems from './pages/menu-items-page';
import SetupStore from './pages/setup-store-page';
import Timekeeping from './pages/timekeeping-page';
import reportWebVitals from './reportWebVitals';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './stylesheets/index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "pos",
        element: <POS />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "menu-items",
        element: <MenuItems />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "settings",
        element: <SetupStore />,
      },
      {
        path: "timekeeping",
        element: <Timekeeping />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
