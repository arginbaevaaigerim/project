import React from "react";
import styled from "styled-components";
import photo from "../assets/solar_home-bold-duotone.png" 
import chelovec from "../assets/icon_about_us_3.svg.png"
import chemodan from "../assets/icon_about_us_2.svg.png"
import like from "../assets/solar_like-bold-duotone.png"
/////главный контейнер//////
const ProcessContainer = styled.div`
width: 1210px;
height: 687px;
top: 1482px;
left: 165px;
transform:translate(10%);
`;
////текст о нас/////
const Zagolovok = styled.h2`
width: 218.04;
height: 38px;
top: 1482px;
left: 165px;
font-family: Corbel;
font-weight: 700;
font-size: 32px;
line-height: 38px;
letter-spacing: 0%;
vertical-align: middle;
color: #FFFFFF;
`;
//////светящийся контейнер//////

const ContainerSpodcvetcoi = styled.div`
width: 1210px;
height: 322px;
top: 1537px;
left: 165px;
border-radius: 30px;
background: linear-gradient(180deg, rgba(19, 50, 87, 0.75) 0%, rgba(26, 15, 29, 0.75) 100%);
box-shadow: 0px 0px 200px 0px #070F4E2E;
`;
///////контейнер для треугольников////////
const ContainerDliaTreugolnicov = styled.div`
display:flex;
align-items:center;
text-align:center;
width: 145px;
height: 133.85px;
top: 1584px;
left: 647px;
transform:translate(350%);
margin-top:20px; 
`;

const TriangLeft =styled.div`
width:0;
height:0;
border-top:66.5p solid transparent;
border-bottom:66.5px solid transparent;
border-right:72.5px solid red;
transform:translateY(-10px) rotate(-4810deg);
`;
const TriangleRight= styled.div`
width:0;
height:0;
border-top:66.5p solid transparent;
border-bottom:66.5px solid transparent;
border-right:72.5px solid white;
transform:translateY(-10px) rotate(-310deg);
`;
///////////////текст///////
const Text = styled.h2`
width: 250PX;
height: 77PX;
top: 1732px;
left: 595px;
font-family: Corbel;
font-weight: 700;
font-size: 64px;
line-height: 100%;
letter-spacing: 0%;
color: #FFFFFF;
transform:translate(180%);
margin-top:30px;
`;
///////////Контейнер для картинок//////////
const ContainerDliaKartinok = styled.div`
display:flex;
align-items:center;
text-align:center;
justify-content:space-around;
width: 1210px;
height: 265px;
top: 1537px;
left: 165px;
margin-top:40px;
`;
/////////домик/////////////
const ContainerDliaDomika = styled.div`
display:flex;
align-items:center;
text-align:center;
width: 522px;
height: 66px;
top: 1939.47px;
left: 165px;

`;
const Tecst = styled.p`
width: 432px;
height: 19px;
top: 1962.97px;
left: 255px;
font-family: Corbel;
font-weight: 300;
font-size: 18px;
line-height: 19px;
letter-spacing: 0%;
vertical-align: middle;
color: #FFFFFF;
`;
///////////человечьки//////////
const ContainerDliaThelovethov = styled.div`
display:flex;
align-items:center;
text-align:center;
width: 522px;
height: 66px;
top: 2029.47px;
left: 165px;
margin-top:20px;
`;
const Tecst2 = styled.p`
width: 432px;
height: 38px;
top: 2043px;
left: 255px;
font-family: Corbel;
font-weight: 300;
font-size: 18px;
line-height: 19px;
letter-spacing: 0%;
vertical-align: middle;
color: #FFFFFF;
`;
////////////чимодан///////////
const ContainerDliaThemodana = styled.div`
display:flex;
align-items:center;
text-align:center;
width: 522px;
height: 66px;
top: 1939.47px;
left: 735px;

`;
const Tecst3 = styled.p`
width: 432px;
height: 38px;
top: 1953px;
left: 825px;
font-family: Corbel;
font-weight: 300;
font-size: 18px;
line-height: 19px;
letter-spacing: 0%;
vertical-align: middle;
color: #FFFFFF;
`;
////////////лайк///////////
const ContainerDliaLaika = styled.div`
display:flex;
align-items:center;
text-align:center;
width: 522px;
height: 66px;
top: 2029.47px;
left: 735px;

margin-top:20px;
`;

const Tecst4 = styled.p`
width: 432px;
height: 38px;
top: 2043px;
left: 825px;
font-family: Corbel;
font-weight: 300;
font-size: 18px;
line-height: 19px;
letter-spacing: 0%;
vertical-align: middle;
color: #FFFFFF;
`;
/////////контейнер для первых двух столбиков///////
const Container1 = styled.div`
width: 522px;
height: 200px;

`;
/////////контейнер для вторых двух столбиков///////
const Container2 = styled.div`
width: 522px;
height: 200px;

`;
////////контейнер для нижней строки//////
const ContainerDliaNijntiStroki = styled.div`
display:flex;
justify-content:space-between;
width: 1210.4px;
height: 38px;
top: 2131px;
left: 165px;

`;

////////текст для нижнего текста///////////
const Tecst5 = styled.p`
width: 550px;
height: 38px;
top: 2131px;
left: 165px;
font-family: Corbel;
font-weight: 300;
font-size: 18px;
line-height: 19px;
letter-spacing: 0%;
vertical-align: middle;
color: #7A7E93;
`;

///////////текст с права//////////
const Tecst6 = styled.h5`
width: 196.4px;
height: 19px;
top: 2131px;
left: 1061px;
font-family: Corbel;
font-weight: 400;
font-size: 18px;
line-height: 19px;
letter-spacing: 0%;
text-align: center;
vertical-align: middle;
color: #FFFFFF;
`;
const Process = () => {
  return (
    <ProcessContainer id="process">
      <Zagolovok>Немного о нас</Zagolovok>
      <ContainerSpodcvetcoi>
        <ContainerDliaTreugolnicov>
          <TriangLeft></TriangLeft>
          <TriangleRight></TriangleRight>
        </ContainerDliaTreugolnicov>
        <Text>IT-DOOR</Text>
      </ContainerSpodcvetcoi>
      <ContainerDliaKartinok>
        <Container1>

        <ContainerDliaDomika>
        <img src={photo} alt="" />
          <Tecst>Выпускаем Junior–разработчиков с 2022 года</Tecst>
       </ContainerDliaDomika>

      <ContainerDliaThelovethov>
        <img src={chelovec} alt=""/>

        <Tecst2>Поддержка от преподавателей помогает эффективнее
             учиться</Tecst2>
      </ContainerDliaThelovethov>

        </Container1>

        <Container2>

        <ContainerDliaThemodana>
          <img src={chemodan} alt=""/>

         <Tecst3>90% выпускников трудоустраиваются в первые месяцы
           после окончания обучения</Tecst3>
         </ContainerDliaThemodana>

        <ContainerDliaLaika>
          <img src={like} alt=""/>

          <Tecst4>Наши преподаватели – действующие разработчики с
             опытом от 3 лет</Tecst4>
        </ContainerDliaLaika>

        </Container2>

      </ContainerDliaKartinok>
         <ContainerDliaNijntiStroki>
          <Tecst5>Курсы It-Door — это прекрасная возможность погрузиться в профессию и освоить новую специальность всего за год.</Tecst5>
          <Tecst6>Подробнее об It-Door</Tecst6>
          </ContainerDliaNijntiStroki>
    </ProcessContainer>
  );
};

export default Process;


