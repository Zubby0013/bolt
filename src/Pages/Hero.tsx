import styled from "styled-components";
import React from "react";
import bg from "../Assets/bg-2.jpg"


const Hero=()=>{

    return(
       <Container>
           <Wrapper>
                <Left>
                    <Top>
                        <Div>
                            <h1>Go wherever, whenever</h1>
                        </Div>
                        <Div1>
                            <p>Bolt is the all-in-one mobility app. Get picked up by a top-rated driver in minutes and enjoy a comfortable ride to wherever you’re going; or skip the traffic entirely on one of our industry-leading scooters.</p>
                        </Div1>
                    </Top>
                    <Down>
                        <Button>Get the app</Button>
                    </Down>
                </Left>
                <Right></Right>
           </Wrapper>
       </Container>
    )
} 
export default Hero;

const Div1 = styled.div`
width: 75%;
// background-color: gold;

p{
    font-size: 20px;
    font-weight: 250;
    color: #fff; 
}
`

const Div = styled.div`
width: 55%;
// height: 40%;
// background-color: pink;

h1{
    font-size: 60px;
    font-weight: 500;
    color: #fff;
}
`

const Button = styled.button`
width: 150px;
height: 50px;
background-color: #32bb78ff;
border-radius: 30px;
border: 0;
font-size: 20px;
color: #fff;
margin-top: 40px;
`

const Top = styled.div`
width: 100%;
height: 80%;
`

const Down = styled.div`
width: 20%;
height: 80%;
`

const Right = styled.div`
width: 40%;
height: 100%;
// background-color: red;
// padding: 100px 0;
`

const Left = styled.div`
width: 60%;
height: 80%;
// background-color: grey;
`

const Wrapper = styled.div`
width: 89%;
height: 80%;
// background-color: blue;
// padding: 100px 0;
display: flex;
`

const Container = styled.div`
width: 100%;
height: 99vh;
// padding: 100px 0;
background-image: url(${bg});
background-position: fixed;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
`