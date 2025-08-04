import React from "react";
import styled, { keyframes } from "styled-components";
import photo1 from "../assets/b4493013ddb6add3d42295b019f59742b7e2d95f.png" 
import photo2 from "../assets/88585652093b9f2e371e55eb5dbcebddbdea8d71.png" 
import photo3 from "../assets/6f49c8b2265f5d5d67e77f739a33a365a18d2038.png" 

const HeroContainer = styled.div`
display:flex;
justify-content:space-between;
 padding: 80px;
 width: 1470.07px;
 height: 563px;
 top: 834px;
 left: 64px;
 
`;

// Данные об иконках
const icons = [
  { id: 1, src: "https://th.bing.com/th/id/R.b003c8fae2d8aa56d40321f922f95543?rik=7qOoIbx72bM%2few&pid=ImgRaw&r=0" },
  { id: 2, src: "https://th.bing.com/th/id/R.8e102399bf2f2aa6050fdecf55e9117d?rik=GtCleW2xUIbrXg&pid=ImgRaw&r=0" },
  { id: 3, src: "https://th.bing.com/th/id/OIP.tN4gXLbU58rUPClx94DP2QHaHa?w=216&h=216&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 4, src: "https://cdn3.iconfinder.com/data/icons/brands-pack/240/react-1024.png" },
  { id: 5, src: "https://th.bing.com/th?q=Python+Icon.png&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=KG&setlang=ru&adlt=moderate&t=1&mw=247" }
];

// Анимация вращения
const rotate = keyframes`
  from {
    transform: rotate(20deg) translateX(200px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(200px) rotate(-360deg);
  }
`;
// Контейнер круга
const CircleContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;  
  justify-content: center;
  align-items: center;
`;
//круг внутри квадрата 
const Crug = styled.div`
 position:relative;
 width: 400px;
 height: 400px;
 border-radius: 9999px;
 border-width: 3px;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 border: 3px solid;
 border-image-source: linear-gradient(271.56deg, #6980B5 1.32%, rgba(46, 56, 79, 0) 98.75%);
 box-shadow: 0px 0px 200px 0px #070F4E2E;
 border: 2px solid  #fef1f9 ;
`;


// Центральный круг
const CenterCircle = styled.div`
 width: 300px;
height: 300px;
top: 8px;
border-radius: 9999px;
display:flex;
margin-top:30px;
align-items:center;
justify-content:center;
font-size:14px;
font-weight:bold;
text-align:center;
position:absolute;
background: linear-gradient(180deg, rgba(57, 144, 249, 0.15) 0%, rgba(236, 181, 255, 0.15) 100%);

`;

// Иконки на орбите
const OrbitIcon = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  animation: ${rotate} 5s linear infinite;
  animation-delay: ${(props) => props.delay}s;

  img {
    width: 100%;
    height: 100%;
    border-radius:50px;
  }
`;
/////////////////////////////////////////////
const Container = styled.div`
 width: 224px;
height: 204px;
top: 156px;
left: 146px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`;
//текст
const Text = styled.h2`
 width: 88px;
height: 91px;
top: 156px;
left: 215px;
font-family: Corbel;
font-weight: 400;
font-size: 100px;

letter-spacing: 0%;
vertical-align: middle;
color:#FFFFFF;
`;
//текст
const Texth3 = styled.h3`
 width: 224px;
height: 104px;
top: 256px;
left: 146px;
font-family: Corbel;
font-weight: 400;
font-size: 46px;
line-height: 52px;
letter-spacing: 0%;
text-align: center;
vertical-align: middle;
color:#9897B0;
`;

//Контейнер для текста
const ContainerTecst = styled.div`
width: 435px;
height: 256px;
top: 146px;
left: 610px;

`;
const TextVKontainire = styled.h3`
width: 199px;
height: 28px;
top: 146px;
left: 610px;
font-family: Corbel;
font-weight: 400;
font-size: 24px;
line-height: 28px;
letter-spacing: 0%;
text-align: center;
vertical-align: middle;
color:#FFFFFF;
`;

const TextPVkontainire = styled.p`
width: 435px;
height: 140px;
top: 204px;
left: 610px;
font-family: Corbel;
font-weight: 400;
font-size: 18px;
line-height: 28px;
letter-spacing: 0%;
vertical-align: middle;
color:#9897B0;
`;
const ContainerDlaStrelki = styled.div`
width: 147px;
height: 28px;
top: 374px;
left: 610px;
border: 2px solid #FF0000;
`;

const TextSoStrelcoi = styled.h3`
width: 117px;
height: 28px;
top: 374px;
left: 610px;
display:flex;
font-family: Corbel;
font-weight: 400;
font-size: 24px;
line-height: 28px;
letter-spacing: 0%;
text-align: center;
vertical-align: middle;
color:#FFFFFF;
`;
const Strelka = styled.h4`
width: 19px;
top: 389px;
left: 738px;
border-width: 2px;
color: #FF0000;
`;

////////////////////////////////////////////////
///контейнер для картинок
const ContainerDlaCartinoc = styled.div`
width: 442.07px;
height: 430px;
top: 22px;
left: 869px;

`;

const CartinkaJS = styled.div`
display:flex;
width: 227.86px;
height: 227.86px;
top: 22px;
left: 1090.97px;
angle: -15 deg;
margin-left:210px;
box-shadow: 0px 4px 4px 0px #00000040;
`;

const CartinkaHTML = styled.div`
display:flex;
width: 142.84px;
height: 142.84px;
top: 333px;
left: 1081px;
angle: 45 deg;
 transform: rotate(-50deg) translate(310%);
margin-top:80px;
`;

const CartinkaREACT =styled.div`
display:flex;
width: 278px;
height: 278px;
top: 248px;
left: 869px;
margin-left:20px;
`;



const HeroSection = () => {
  return (
      <HeroContainer>
      <Crug>
      <CircleContainer>
        <CenterCircle>
          <Container>
          <Text>IT </Text>
          <Texth3>Профессии 2024</Texth3>
          </Container>
        </CenterCircle>
        {icons.map((icon, index) => (
        <OrbitIcon key={icon.id} delay={index * 1.5}>
          <img src={icon.src} alt="icon" />
        </OrbitIcon>
      ))}
    </CircleContainer>
      </Crug>
      <ContainerTecst>
        <TextVKontainire>Frontend Developer</TextVKontainire>
        <TextPVkontainire>Фронтенд разработчик (англ. Frontend Developer) - это специалист в области веб-разработки, который занимается созданием пользовательских интерфейсов (UI) для веб-приложений, сайтов и других веб-ресурсов.</TextPVkontainire>
        < ContainerDlaStrelki>
        <TextSoStrelcoi>Подробнее
          <Strelka>— </Strelka>
        </TextSoStrelcoi >
        </ ContainerDlaStrelki>

      </ContainerTecst>
      <ContainerDlaCartinoc>
       <CartinkaJS> <img src={photo1} alt="" /> </CartinkaJS>
       <CartinkaREACT> <img src={photo3} alt=""/></CartinkaREACT>
       <CartinkaHTML><img src={photo2} alt=""/> </CartinkaHTML>
      </ContainerDlaCartinoc>
    </HeroContainer>
   
  );
};

export default HeroSection;


