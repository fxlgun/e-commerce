import React from "react";
import styled from "styled-components";

const Marq = styled.span`
   animation: marquee 10s linear infinite;
    :hover{
            animation-play-state: paused;
        }
 
        
    @keyframes marquee{
            0%{transform: translateX(100%);}
            100%{transform: translateX(-100%);}
        }
`;


const Container = styled.div`
    height: 30px;
    background-color: #0a9396;
    color: white;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
   `

const Announcement = () => {
  return (
    <Container> <Marq>Super Deal! Free shipping on orders over 500 Rs.</Marq>  </Container>
  );
};

export default Announcement;
