import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import AllGadgets from './Components/AllGadgets/AllGadgets.jsx';
import Laptops from './Components/Laptops/Laptops.jsx';
import Phones from './Components/Phones/Phones.jsx';
import SmartWatches from './Components/SmartWatches/SmartWatches.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'allProducts',
        element: <AllGadgets></AllGadgets>
      },
      {
        path: 'laptops',
        element: <Laptops></Laptops>
      },
      {
        path: 'phones',
        element: <Phones></Phones>
      },
      {
        path: 'smartWatches',
        element: <SmartWatches></SmartWatches>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
