import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import Earn from "./Earn";
import Service from "./Service";
import Making from "./Making";
import Aprops from "./Aprops";


const HomeScreen =()=>{

    return(
        <div>
          <Hero/>
          <Earn/>
          <Service/>
          <Making/>
          <Aprops/>
        </div>
    )
}
export default HomeScreen;