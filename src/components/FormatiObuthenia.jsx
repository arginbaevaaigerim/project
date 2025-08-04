import React from "react";
import styled from "styled-components";
import domic from "../assets/icon_offline.svg.png"
import soobshenia from "../assets/icon_online.svg.png"
const Container = styled.div`
width: 1190.67px;
height: 266px;
top: 3351px;
left: 165px;
margin-top:100px;
transform:translate(14%);
`;

const KrupniiTecst = styled.h2`
width: 296.1px;
height: 38px;
font-family: Corbel;
font-weight: 700;
font-size: 32px;
line-height: 38px;
letter-spacing: 0%;
vertical-align: middle;
color: #FFFFFF;
transform:translate(9%);
`;
/////////контаинер для двух блоков/////////
const ContainerDliaDvuhBlocov = styled.div`
display:flex;
margin-top:30px;
justify-content:space-around;
width: 1190.67px;
height: 193px;
top: 73px;

`;
/////////1//////////
const BlocOdin = styled.div`
width: 540px;
height: 193px;
top: 73px;
border-radius: 16px;
background: linear-gradient(180deg, rgba(57, 144, 249, 0.135) 0%, rgba(236, 181, 255, 0.135) 100%);
box-shadow: 0px 0px 200px 0px #070F4E2E;
`;
const Domik = styled.div`
width: 48px;
height: 49px;
top: 24px;
left: 24px;
margin-top:20px;
transform:translate(30%);
`;
const Tecst1 = styled.h6`
width: 66.07px;
height: 21.6px;
top: 37.4px;
left: 96px;
font-family: Corbel;
font-weight: 700;
font-size: 18px;
line-height: 21.6px;
letter-spacing: 0%;
vertical-align: middle;
color: #FFFFFF;
transform:translate(120%);
margin-top:-30px;
`;
const MelciiTecst1 = styled.p`
width: 467.22px;
height: 48px;
top: 96.5px;
left: 24px;
font-family: Corbel;
font-weight: 300;
font-size: 16px;
line-height: 24px;
letter-spacing: 0%;
vertical-align: middle;
color: #FFFFFF;
margin-top:30px;
transform:translate(5%);
`;

////////2///////////
const BlocDva = styled.div`
width: 540px;
height: 193px;
top: 73px;
border-radius: 16px;
background: linear-gradient(180deg, rgba(57, 144, 249, 0.135) 0%, rgba(236, 181, 255, 0.135) 100%);
box-shadow: 0px 0px 200px 0px #070F4E2E;
`;
const Soobshenia = styled.div`
width: 48px;
height: 49px;
top: 24px;
left: 24px;
margin-top:20px;
transform:translate(30%);
`;
const Tecst2 = styled.h6`
width: 66.07px;
height: 21.6px;
top: 37.4px;
left: 96px;
font-family: Corbel;
font-weight: 700;
font-size: 18px;
line-height: 21.6px;
letter-spacing: 0%;
vertical-align: middle;
color: #FFFFFF;
transform:translate(120%);
margin-top:-30px;
`;
const MelciiTecst2 = styled.p`
width: 467.22px;
height: 48px;
top: 96.5px;
left: 24px;
font-family: Corbel;
font-weight: 300;
font-size: 16px;
line-height: 24px;
letter-spacing: 0%;
vertical-align: middle;
color: #FFFFFF;
margin-top:30px;
transform:translate(5%);
`;
const FormatiObuthenia = () => {

    return(
        <Container>
            <KrupniiTecst>Форматы обучения</KrupniiTecst>
            <ContainerDliaDvuhBlocov>
                <BlocOdin>
                    <Domik>
                    <img src={domic} alt="" />
                    </Domik>
                    <Tecst1>Офлайн</Tecst1>
                    <MelciiTecst1>Посещение занятий в аудитории, общение с однокурсниками и
                    возможность задать свои вопросы лично преподавателю</MelciiTecst1>
                </BlocOdin>
                <BlocDva>
                    <Soobshenia>
                        <img src={soobshenia} alt=""/>
                    </Soobshenia>
                    <Tecst2>Онлайн</Tecst2>
                    <MelciiTecst2>Онлайн-обучение идет параллельно с офлайн и можно не бояться
                    затянуть учебу на неопределенный срок</MelciiTecst2>
                </BlocDva>


            </ContainerDliaDvuhBlocov>

        </Container>



    );
};


export default FormatiObuthenia;