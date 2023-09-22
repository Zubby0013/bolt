import styled from "styled-components";
import React, { useState } from "react";
import {AiOutlineMenu} from "react-icons/ai";

const Header = ()=>{

    const [show, setShow] = useState(false);
    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false)
     
    const headerChange =  () => {
        if (window.pageYOffset >= 70) {
            setScroll(!true);
        } else{
            setScroll(true);
        }
    }
window.addEventListener("scroll", headerChange)
    const Click =()=>{
        setShow(!show)
    }
    const Click2 =()=>{
        setClick(!click)
    }

    return(
       <div>
         {scroll? 
            (
                <Container bg="">
           <Wrapper>
               <Logo src='https://bolt.eu/?_gl=1*1pkexm3*_up*MQ..&gclid=Cj0KCQjw06-oBhC6ARIsAGuzdw0ePvq_Lw6CEPucTi05EKHxU8irm2YiV9e6NNA9h66XVX1kV1j5VS0aAhpMEALw_wcB'/>
               <Right>
                  <Nav onClick={Click} >
                    <h3>Nigeria</h3>
                      {show?  <Card>
                        <Label>
                        <Select>
                            <Option>grd</Option>
                            <Option>bxf</Option>
                            <Option>v</Option>
                            <Option>sss</Option>
                        </Select>
                    </Label>
                        <Label>
                        <Select>
                            <Option>grd</Option>
                            <Option>bxf</Option>
                            <Option>v</Option>
                            <Option>sss</Option>
                        </Select>
                    </Label>
                          <Button1>Submit changes</Button1>
                        </Card>:null}
                  </Nav>
                  <Nav><h4>Support</h4></Nav>
                  <Nav onClick={Click2}><Button>Sign Up</Button>
                     {click? <Card2>
                         <Div></Div>
                         <Div></Div>
                         <Div></Div>
                         <Div></Div>
                     </Card2>: null}
                  </Nav>
                  <Menu><AiOutlineMenu/></Menu>
               </Right>
           </Wrapper>
           
            
       </Container>
            ):
            (<Container bg="#fff">
                <Wrapper>
                    <Logo src='https://bolt.eu/?_gl=1*1pkexm3*_up*MQ..&gclid=Cj0KCQjw06-oBhC6ARIsAGuzdw0ePvq_Lw6CEPucTi05EKHxU8irm2YiV9e6NNA9h66XVX1kV1j5VS0aAhpMEALw_wcB'/>
                    <Right>
                       <Nav onClick={Click} >
                         <h3>Nigeria</h3>
                           {show?  <Card>
                             <Label>
                             <Select>
                                 <Option>grd</Option>
                                 <Option>bxf</Option>
                                 <Option>v</Option>
                                 <Option>sss</Option>
                             </Select>
                         </Label>
                             <Label>
                             <Select>
                                 <Option>grd</Option>
                                 <Option>bxf</Option>
                                 <Option>v</Option>
                                 <Option>sss</Option>
                             </Select>
                         </Label>
                               <Button1>Submit changes</Button1>
                             </Card>:null}
                       </Nav>
                       <Nav><h4>Support</h4></Nav>
                       <Nav onClick={Click2}><Button>Sign Up</Button>
                          {click? <Card2>
                              <Div></Div>
                              <Div></Div>
                              <Div></Div>
                              <Div></Div>
                          </Card2>: null}
                       </Nav>
                       <Menu><AiOutlineMenu/></Menu>
                    </Right>
                </Wrapper>
                
                 
            </Container>)
         }
       </div>
    );
};

export default Header;

const Div = styled.div`
width: 80%;
height: 23%;
background-color: #fff;
border: 1px 0 5px solid silver;
`

const Button1 = styled.button`
width: 90%;
height: 50px;
border-radius: 30px;
background-color: #32bb78ff;
border: 0;
color: #fff;
font-size: 18px;
`

const Card2 = styled.div`
width: 250px;
height: 400px;
background-color: gold;
position: absolute;
top: 50px;
right: -50px;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`

const Card = styled.div`
width: 200px;
height: 250px;
background-color: gold;
position: absolute;
top: 30px;
right: -50px;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`
const Option = styled.option`

`

const Select = styled.select`
width: 150px;
height: 40px;
outline: 0;
border: 0;
border-radius: 5px;
`

const Label = styled.label`

`

const Button = styled.button`
background-color: #2f313fff;
width: 80px;
height: 35px;
border-radius: 30px;
border: 0;
color: #fff;
position: absolute;
    top: -18px;
    left: -30px;
`

const Menu = styled.div`
color: #fff;
font-size: 20px;
margin-left: 50px;
`

const Nav = styled.div`
color: #fff;
position: relative;
cursor: pointer;
h4{
    font-size: 15px;
}
h3{
    font-size: 15px;
    position: absolute;
    top: -25px;
    right: 0;
}
`

const Right = styled.div`
width: 35%;
height: 90%;
// background-color: gray;
display: flex;
justify-content: center;
align-items: center;
gap: 50px;
`

const Logo = styled.img`
width: 40px;
height: 90%;
`

const Wrapper = styled.div`
width: 90%;
height: 50px;
// background-color: red;
display: flex;
justify-content: space-between;
align-items: center;
// padding: 100px 0;
`
const Container = styled.div<{bg:string}>`
width: 100%;
height: 50px;
// background-color: ${({bg})=>bg};
display: flex;
justify-content: center;
position: fixed;
`