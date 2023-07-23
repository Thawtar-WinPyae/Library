import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from '../Pages/Home';
import Create from '../Pages/Create';
import Search from '../Pages/Search';
import Layout from '../Pages/Layout';
import Details from '../Components/Details';
  
const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: "",
            element: <Home></Home>
        },
        {
            path: "/create",
            element: <Create></Create>,
        },
        {
            path: "/search",
            element: <Search></Search>,
        },
        {
          path: "/books/:id",
          element: <Details></Details>,
      },
      ]
    },
    
  ]);

  export default router;
  