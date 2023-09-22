import styled from "styled-components";
import React from "react";
import driver from "../Assets/driver.webp";

const Earn=()=>{

    return(
        <Container>
            <Wrapper>
                 <Top>
                    <Text><h1>Earn money with Bolt</h1></Text>
                    <Div>
                        <Button cl="#fff" bg="#2f313fff">Driver</Button>
                        <Button cl="#2f313fff" bg="#fff">Courier</Button>
                        <Button cl="#2f313fff" bg="#fff">Resturant or store owner</Button>
                        <Button cl="#2f313fff" bg="#fff">Fleet owner</Button>
                    </Div>
                 </Top>
                 <Down>
                    <Left>
                        <Img src={driver}/>
                    </Left>
                    <Right>
                        <Wrap>
                            <Tp><h2>Drive and earn money</h2></Tp>
                            <Txt>
                                <Lft><Circle>1</Circle></Lft>
                                <Rght>
                                <h5>Drive more, earn more</h5>
                                <p>Our 150+ million riders will send you plenty of ride requests. When demand is high, you can earn even more.</p>
                                </Rght>
                            </Txt>
                            <Txt>
                            <Lft><Circle>1</Circle></Lft>
                                <Rght>
                                <h5>Set your schedule</h5>
                                <p>Drive for as long and as often as you like. Weekdays; weekends; evenings — fit driving around your lifestyle.</p>
                                </Rght>
                            </Txt>
                            <Txt>
                            <Lft><Circle>1</Circle></Lft>
                                <Rght>
                                <h5>Get paid each week</h5>
                                <p>You’ll receive your earnings at the end of each week — no need to wait around for payday.</p>
                                </Rght>
                            </Txt>
                            <Div2><Button1>Learn more</Button1></Div2>
                        </Wrap>
                    </Right>
                 </Down>
            </Wrapper>
        </Container>
    )
}
export default Earn;

const Button1 = styled.button`
width: 150px;
height: 50px;
border-radius: 30px;
margin-top: 30px;
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
height: 20%;
display: flex;
`

const Tp =styled.div`
width: 100%;
height: 20%;
// text-align: center;

h2{
    font-size: 40px;
    font-weight: 400;
    color: #2f313fff;
    margin: 0;
}
`

const Div2 =styled.div`
width: 100%;
height: 20%;
`

const Wrap = styled.div`
width: 90%;
height: 80%;
// background-color: red;
`

const Right = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 10px;
`

const Left = styled.div`
width: 50%;
height: 100%;
`

const Button = styled.div<{bg: string, cl:string}>`
padding: 10px 12px;
border-radius: 30px;
border: 1px solid grey;
cursor: pointer;
// border: 0;
background-color: ${({bg})=>bg};
color: ${({cl})=> cl};
`

const Text = styled.div`
width: 100%;
hight: 50%;
text-align: center;

h1{
    font-size: 40px;
    font-weignt: 500;
    color: #2f313fff;
    margin: 0;
}
`
const Div = styled.div`
width: 100%;
hight: 50%;
display: flex;
gap: 30px;
margin-top: 20px;
display: flex;
justify-content: center;
align-items: center;
`

const Down = styled.div`
width: 100%;
height: 80%;
// background-color: pink;
display: flex;
justify-content: center;
align-items: center;
`

const Top = styled.div`
width: 50%;
height: 20%;
// background-color: red;
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
height: 120vh;
// background-color: green;
display: flex;
justify-content: center;
align-items: center;
// padding: 100px 0;
`