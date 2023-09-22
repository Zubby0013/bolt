import styled from "styled-components";
import React from "react";
import HomeScreen from "../Pages/HomeScreen";
import {createBrowserRouter} from "react-router-dom";
import Layout from "../Components/Common/Layout";

export const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
          {  
            index: true,
            element: <HomeScreen/>
        }
        ]
    }
])