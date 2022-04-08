import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


function LandingPage(){

    const ContainerLand = styled.div`
        @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
        font-family: 'Roboto', sans-serif;
        height: 100vh;
        width: 100%;
        background-image: url('https://ss-static-01.esmsv.com/id/10780/galeriaimagenes/obtenerimagen/?id=409&tipoEscala=stretch&width=943&height=443');
        background-repeat: no-repeat;
        background-size: cover;
    `;

    const H1Land = styled.h1`
        font-size: 55px;
        letter-spacing: 4px;
        color: #1B2631;
        margin-top: 0;
        margin-bottom:20px;
    `;

    const BlockLand = styled.div`
        margin-left: 60px;
        position: relative;
        top: 170px;
    `;

    return (  
        <ContainerLand>
            <BlockLand>
                <H1Land>Las mejores recetas <br/> en un solo lugar</H1Land>
                <Button/>
            </BlockLand>
        </ContainerLand>
    )
}


function Button(){

  const MyButtonLand = styled.div`
  margin-left: 40px;
      position: relative;
      display: inline-block;
      padding: 10px 20px;
      color: #d1a044;
      text-transform: uppercase;
      letter-spacing: 4px;
      text-decoration: none;
      font-size: 24px;
      overflow: hidden;
      letter-spacing: 2px;
      cursor: pointer;
      box-shadow:inset 0 0 0 1px rgba(0,0,0,0.1);
      text-decoration: none;
	    transition: all ease 0.5s;
      border-radius: 20px;
      background:#10B87B;
      border: none;
      left: 70px;
      &:hover{
          color: #1B2631;
          text-shadow: 0 1px 1px rgba(0,0,0,0.5);
          background-color: none;
          box-shadow: 0 0 20px #E5F9E3, 0 0 40px #E5F9E3, 0 0 80px #E5F9E3;
          transition: 1.2s;
          border: none;
      }
  `;

  const StyledLinkLand = styled(Link)`
      text-decoration:none;
      color: #1B2631 ;
      &:hover{
          color:white ;
      }
  `

  return(
      <MyButtonLand>
          <StyledLinkLand to='/Home'>Ingresar</StyledLinkLand>
      </MyButtonLand>   
  )  
     
};
export default LandingPage;