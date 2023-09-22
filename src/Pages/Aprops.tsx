import styled from "styled-components";
import React from "react";
import {AiOutlineCheck} from "react-icons/ai";
import {FaUserFriends,FaSpider} from "react-icons/fa";


const Aprops=()=>{

    return(
        <Container>
            <Wrapper>
              <Top>
                <In>
                   <h1>À propos</h1>
                   <p>Bolt is the first European mobility super-app. We’re making cities for people, offering better alternatives for every purpose a private car serves — including ride-hailing, shared cars, scooters, and food and grocery delivery.</p>
                </In>
                </Top>
              <Middle src='https://bolt.eu/static/world-map-optimized-6338bdae39fa9d215fb417b5845792a7.svg'></Middle>
              <Down>
                <TP>
                    <Div>
                        <Circle><AiOutlineCheck/></Circle>
                    </Div>
                    <Div><FaSpider/></Div>
                    <Div><FaUserFriends/></Div>
                </TP>
                <Dn></Dn>
              </Down>
            </Wrapper>
        </Container>
    )
}
export default Aprops;

const In = styled.div`
width: 75%;
height: 70%;    
// background-color: pink;
text-align: center;

h1{
  font-size: 45px;
  font-weight: 600;
  color: #2f313fff;
  margin: 0;
}
p{
    font-size: 20px;
    font-weight: 200;
    color: #2f313fff; 
    margin-top: 10px;
    margin: 0;

}
`

const Dn = styled.div`
width: 100%;
height: 30%;
`
const Circle = styled.div`
width: 30px;
height: 30px;
background-color: #32bb78ff;
color: #fff;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
`

const Div = styled.div`
width: 33.3%;
height: 100%;
// background-color: red;
display: flex;
align-items: center;
justify-content: center;
`

const TP = styled.div`
width: 100%;
height: 70%;
display: flex;
`

const Down = styled.div`
width: 100%;
height: 30%;
// background-color: pink;
`

const Middle = styled.img`
width: 100%;
height: 45%;
object-fit: cover;
`

const Top = styled.div`
width: 100%;
height: 25%;
// background-color: blue;
display: flex;
justify-content: center;
align-items: center;
`

const Wrapper = styled.div`
width: 89%;
height: 90%;
// background-color: grey;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
// gap: 40px;
`

const Container = styled.div`
width: 100%;
height: 140vh;
background-color: #fbf9f9ff;
display: flex;
justify-content: center;
align-items: center;
margin-top: 50px;
`