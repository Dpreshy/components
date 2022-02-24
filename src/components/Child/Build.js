import React from "react";
import styled from "styled-components";

const Build = ({direction, date, course, price, reverse }) => {

    return (
        <Comp>
            <Compo>
                <Parent>
                   <Box>
                       <Boxwrap reverse={reverse}>
                       <Boxxx>{date} </Boxxx>
                       <Boxx>
                           {course}
                       </Boxx>
                       <Boxer>
                           {price}
                       </Boxer>
                       </Boxwrap>
                   <Button>{direction} </Button>

                   </Box>
                </Parent>
                
            </Compo>

        </Comp>

    )
}

export default Build

const Comp = styled.div`
display:flex;
justify-content: center;
align-items: center;
margin: 30px;
`


const Compo = styled.div``

const Parent = styled.div`
width: 800px;
background: black;
height: 200px;
display:flex;
justify-content: center;
align-items: center
`

const Boxwrap = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
flex-direction: ${({reverse})=>reverse}


`


const Box= styled.div`
width: 600px;
background: white;
height: 150px;
border-radius: 20px;
margin: 30px;
display:flex;
flex-direction:column;
justify-content: center


`

const Button = styled.button`
background: red;
padding:10px;
border-radius:5px;
border:none;
outline:none;
color:white;
width:100px;
margin-left:250px

`

const Boxx = styled.div`
width: 50px;
heigth: 50px;

`

const Boxxx = styled.button`
width:60px;
height: 50px;
background:black;
border-radius:3px;
color:white;
display:flex;
justify-content: center;
align-items: center;
font-size:10px
`

const Boxer = styled.div`

`