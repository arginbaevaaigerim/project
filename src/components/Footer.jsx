import React,{useState} from "react";
import styled from "styled-components";
import instagram from "../assets/mdi_instagram.png" 
import whatsapp from "../assets/ic_baseline-whatsapp.png" 
import telegram from "../assets/ri_telegram-line.png" 

const ContactContainer = styled.div`
width: 1620px;
height: 430px;
top: 5386px;
left: 162px;
background: linear-gradient(180deg, rgba(4, 17, 36, 0.135) 0%, rgba(236, 181, 255, 0.135) 100%);
box-shadow: 0px 0px 200px 0px #070F4E2E;
margin-top:30px;
`;
const Container = styled.div`
width: 1000px;
height: 300px;
transform:translate(10%);
margin-top:300px;
`;
const Tecst = styled.h5`
width: 114px;
height: 36px;
top: 90px;
left: 663px;
font-family: Corbel;
font-weight: 400;
font-size: 30px;
line-height: 100%;
letter-spacing: 0%;
color: #FFFFFF;
margin-top:60px;
transform:translate(600%);
`;

const MelkiiTecst = styled.p`
 width: 447px;
height: 42px;
top: 164px;
left: 497px;
font-family: Corbel;
font-weight: 300;
font-size: 17px;
line-height: 100%;
letter-spacing: -3%;
text-align: center;
transform:translate(115%);
margin-top:20px;
`;

const ContainerDliaTecsta = styled.div`
display:flex;
 width: 377px;
height: 22px;
top: 244px;
left: 532px;
transform:translate(145%);
margin-top:20px;
justify-content:space-around;
`;
const Text = styled.p`
width: 59px;
height: 22px;
top: 244px;
left: 532px;
font-family: Corbel;
font-weight: 400;
font-size: 18px;
line-height: 100%;
letter-spacing: 0%;
color: #FFFFFF;
`;

const DliaKartin = styled.div`
display:flex;
width: 159px;
height: 35px;
top: 304px;
left: 641px;
margin-top:20px;
transform:translate(420%);
justify-content:space-around;
`;


const Footer = () => {
  

return (
    <ContactContainer >
      <Container>
      <Tecst>IT-DOOR</Tecst>
        <MelkiiTecst>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</MelkiiTecst>

       <ContainerDliaTecsta>
        <Text>Курсы</Text>
        <Text>Менторы</Text>
        <Text>О Нас</Text>
        <Text>Контакты</Text>
       </ContainerDliaTecsta>
        
        <DliaKartin>
                 <img src={instagram} alt="" />
                 <img src={whatsapp} alt="" />
                 <img src={telegram} alt="" />

        </DliaKartin>
    
      </Container>
     
     
      
      

    </ContactContainer>
   
  );
};
  
  export default Footer;
  
  
  