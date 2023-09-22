import styled from "styled-components";
import React from "react";
import des from "../Assets/desktop.png";

const Making=()=>{

    return(
        <Container>
            <Wrapper>
                <Left>
                <Wrap>
                            <Tp><h2>Making cities for people, not cars</h2>
                                <h6>By sharing our knowledge of the industry and real-time data we’re helping to improve our cities.</h6>
                            </Tp>
                            <Txt>
                                <Lft><Circle>1</Circle></Lft>
                                <Rght>
                                <h5>Sharing best practices</h5>
                                <p>By sharing our knowledge of the industry and real-time data we’re helping to improve our cities.</p>
                                </Rght>
                            </Txt>
                            <Txt>
                            <Lft><Circle>1</Circle></Lft>
                                <Rght>
                                <h5>One app, many ways to move</h5>
                                <p>With multiple transport services inside a single app, getting around safely, in a more sustainable way, has never been easier.</p>
                                </Rght>
                            </Txt>
                            <Txt>
                            <Lft><Circle>1</Circle></Lft>
                                <Rght>
                                <h5>Sustainability as a priority</h5>
                                <p>We’re compensating for the CO2 emissions our transport and delivery solutions create, minimising our impact on the local environment.</p>
                                </Rght>
                            </Txt>
                            <Div2><Button1>Learn more</Button1></Div2>
                        </Wrap>
                </Left>
                <Right>
                    <Img src={des}/>
                </Right>
            </Wrapper>
        </Container>
    )
}
export default Making;

const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`

const Right = styled.div`
width: 53%;
height: 100%;
// background-color: gold;
`

const Button1 = styled.button`
width: 150px;
height: 50px;
border-radius: 30px;
margin-top: 20px;
margin-left: 40px;
border: 0;
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
const Rght = styled.div`
width: 80%;
height: 100%;

h5{
    font-size: 20px;
    font-weight: 350;
    color: #2f313fff;
    margin: 0;
}
p{
   margin: 0;
   margin-top: 10px;
   color: grey;
}
`

const Lft = styled.div`
width: 10%;
height: 100%;
display: flex;

`

const Txt =styled.div`
width: 100%;
height: 23%;
display: flex;
gap: 8px;
`

const Tp =styled.div`
width: 90%;
height: 40%;
// text-align: center;

h2{
    font-size: 40px;
    font-weight: 600;
    color: #2f313fff;
    margin: 0;
margin-bottom: 10px;

}
h6{
    font-size: 20px;
    font-weight: 300;
    color: #2f313fff;
    margin: 0;
}
`

const Div2 =styled.div`
width: 100%;
height: 20%;

`

const Wrap = styled.div`
width: 100%;
height: 80%;
// background-color: red;
gap: 15px;
`

const Left = styled.div`
width: 42%;
height: 100%;
// background-color: red;
`

const Wrapper = styled.div`
width: 89%;
height: 90%;
// background-color: grey;
display: flex;
justify-content: space-between;
align-items: center;
`

const Container = styled.div`
width: 100%;
height: 100vh;
// background-color: green;
display: flex;
justify-content: center;
align-items: center;
`