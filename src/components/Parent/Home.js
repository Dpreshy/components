import React from "react";
import styled from "styled-components";
import Comp from '../Child/Build'


const Home = () => {

    return (


        <Body>
            <Comp  price='$50.0'course= 'Backend' date= '10 december, 2010' direction='Get started' />
            <Comp  price='$70.0'course= 'Frontend' date= '15 september, 1997' direction='Sign up' reverse= 'row-reverse'  />
            <Comp  price='$80.0'course= 'UI/UX' date= '30 march, 1999' direction='Resgister' />

        </Body>

    )
}

export default Home

const Body = styled.div``
