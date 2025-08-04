import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  padding: 40px;
  background-image:url("https://s3-alpha-sig.figma.com/img/9820/d570/5a710e4cfd3327b8466fdb6010fbfc22?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ElG5~Z-Tm3u87zcg4u7LZrUeWeb5ye5qj4NeqRF2Rj6xYtTpx18I19n9aK1TyFmFs-9sDZuOGzwiI1d3onI1a76jefKa4MHpoJUwmvA412h7wYnYH2AlsP3E273F6GRJZJCDG1BKWf9rsJXcaRzGj7IImlb1x4zhBuwQd9SgBccCCM50n3UcEJ-LRYAIWEaIIiYLDSJB2lDIhU1vgGj3bv5t4ZCLRfp0Sw79hWmHTu5GXsZLOA-~MF8c~OUnalcCr76FF1Up7W1WNByqzgVRRf4JrnvfdARrJI-w-QehCUllSQ4nZUQz0Uka8YR84A6dASblBGLoHDTXEbOc~AAc0Q__");
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  width: 1768px;
  height: 705px;
  top: 115px;
  rotate: -90 deg;
`;
const TextContainer = styled.div`
  padding: 40px;
  width: 1129px;
  height: 217px;
  top: 218px;
  margin-bottom:100px;
`;
const Text = styled.h2`
  width: 1115px;
  height: 142px;
  top: 218px;
  left: 169px;
  font-family: Corbel;
  font-weight: 700;
  font-size: 59px;
  line-height: 71.24px;
  letter-spacing: 0%;
  color: #FFFFFF;
`;
 const TextMalenkii = styled.a`
  width: 851px;
  height: 56px;
  top: 379px;
  left: 169px;
  font-family: Corbel;
  font-weight: 700;
  font-size: 23px;
  line-height: 27.77px;
  letter-spacing: 0%;
`;

const Knopka = styled.button`
 width: 213.68px;
 height: 48px;
 top: 530px;
 left: 165px;
 border-radius: 4px;
 color:#FFFFFF;
 background: #2185D9;
 transform:translate(15%);
`;

const ConethniContainer = styled.div`
 width:  100%;
 height: 300px;
 top: 578px;
 background: linear-gradient(180deg, rgba(4, 17, 36, 0) 1.32%, #041124 71.81%);

`;

const AboutUs = () => {
  return (
    <AboutContainer id="about">
      <TextContainer>
        <Text>Стань профессиональным разработчиком с нуля всего за 9 месяцев! </Text>
        <TextMalenkii>Курс отлично подходит новичкам без опыта в программировании. Для обучения достаточно уверенно пользоваться ноутбуком и интернетом.</TextMalenkii>
    </TextContainer>
    <Knopka>Узнать больше</Knopka>
    <ConethniContainer>
    </ConethniContainer>
    </AboutContainer>
    
  );
};

export default AboutUs;

