import styled from "styled-components";
import React from "react";
import img1 from "../Assets/car-removebg-preview (1).png";
import img2 from "../Assets/food-removebg-preview.png";
import img3 from "../Assets/basket-removebg-preview.png";
import img4 from "../Assets/steerling-removebg-preview.png";
import img5 from "../Assets/bike-removebg-preview.png";
import img6 from "../Assets/black-removebg-preview.png";

const Service=()=>{

    return(
        <Container>
            <Wrapper>
               <Top><h1>Our services</h1></Top>
               <Down>
                <Card>
                    <Left>
                        <h5>Rides</h5>
                        <nav>Request in seconds, ride in minutes</nav>
                    </Left>
                    <Right>
                        <Img1 src={img1}/>
                    </Right>
                </Card>
                <Card>
                <Left>
                        <h5>Rides</h5>
                        <nav>Request in seconds, ride in minutes</nav>
                    </Left>
                    <Right>
                        <Img1 src={img2}/>
                    </Right>
                </Card>
                <Card>
                <Left>
                        <h5>Rides</h5>
                        <nav>Request in seconds, ride in minutes</nav>
                    </Left>
                    <Right>
                        <Img1 src={img3}/>
                    </Right>
                </Card>
                <Card>
                <Left>
                        <h5>Rides</h5>
                        <nav>Request in seconds, ride in minutes</nav>
                    </Left>
                    <Right>
                        <Img1 src={img4}/>
                    </Right>
                </Card>
                <Card>
                <Left>
                        <h5>Rides</h5>
                        <nav>Request in seconds, ride in minutes</nav>
                    </Left>
                    <Right>
                        <Img1 src={img5}/>
                    </Right>
                </Card>
                <Card>
                <Left>
                        <h5>Rides</h5>
                        <nav>Request in seconds, ride in minutes</nav>
                    </Left>
                    <Right>
                        <Img1 src={img6}/>
                    </Right>
                </Card>
               </Down>
            </Wrapper>
        </Container>
    )
}

export default Service;

const Img1 = styled.img`
width: 100%;
height: 50%;
object-fit: cover;
position: absolute;
bottom:0;
`

const Right = styled.div`
width: 30%;
height: 100%;
// background-color: green;
position: relative;
`

const Left = styled.div`
width: 70%;
height: 50%;
// background-color: gold;

h5{
    margin: 0;
    margin-bottom: 15px;
    font-size: 20px;
    color: #2f313fff;
}
nav{
    color: silver;
}
`

const Card = styled.div`
width: 30%;
height: 170px;
border-radius: 10px;
box-shadow: 1px 1px 5px silver;
cursor: pointer;
display: flex;
transition: all ease-in-out 360ms;

&: hover{
    transform: scale(1.05);
}
`


const Down = styled.div`
width: 100%;
height: 80%;
// background-color: pink;
display: flex;
flex-wrap: wrap;
gap: 40px;
`

const Top = styled.div`
width: 50%;
height: 20%;
// background-color: red;
text-align: center;

h1{
    font-size: 40px;
    font-weignt: 500;
    color: #2f313fff;
    margin: 0;
}
`

const Wrapper = styled.div`
width: 89%;
height: 90%;
// background-color: grey;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 40px;
`

const Container = styled.div`
width: 100%;
height: 100vh;
// background-color: green;
display: flex;
justify-content: center;
align-items: center;
`