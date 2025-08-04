import React, { useState } from "react";
import styled from "styled-components";
import photo from "../assets/7a32d9f1f557178d36c1cd4eb23be6bbcbbb95e6.png" 

const ContactContainer = styled.div`
display:flex;
width: 1116px;
height: 631px;
top: 5386px;
left: 162px;
background: linear-gradient(180deg, rgba(57, 144, 249, 0.135) 0%, rgba(236, 181, 255, 0.135) 100%);
box-shadow: 0px 0px 200px 0px #070F4E2E;
transform:translate(20%);
justify-content:space-between;
margin-top:60px;
`;

const Tecst = styled.h2`
width: 243px;
height: 38px;
top: 5565px;
left: 283px;
font-family: Corbel;
font-weight: 700;
font-size: 32px;
line-height: 38px;
letter-spacing: 0%;
vertical-align: middle;
color: #FFFFFF;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
`;

const Container = styled.div`
 width: 400px;
height: 367px;
top: 5565px;
left: 283px;
border-radius: 4px;
margin-top:200px;
margin-left:50px;
`;

const MelkiiTecst = styled.p`
 width: 30px;
height: 24px;
top: 5621px;
left: 283px;
font-family: Corbel;
font-weight: 400;
font-size: 16px;
line-height: 24px;
letter-spacing: 0%;
vertical-align: middle;
color: #FFFFFF;
`;
const Input = styled.input`
width: 400px;
height: 40px;
top: 5645px;
left: 283px;
border-radius: 4px;
border-width: 2px;
background:#070F4E2E;
color:#FFFFFF;
border: 2px solid #FFFFFF;
`;
const Button = styled.button`
width: 185px;
height: 40px;
top: 5792px;
left: 283px;
border-radius: 4px;
background: #2185D9;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Здесь можно добавить отправку данных на сервер
  };
  return (
    <ContactContainer id="contact">
      <Container>
      <Tecst>Связаться с нами</Tecst>
      <Form onSubmit={handleSubmit}>
        <MelkiiTecst>Имя</MelkiiTecst>
        <Input
          type="text"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <MelkiiTecst>Номер</MelkiiTecst>
        <Input
          type="tel"
          placeholder="+996"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <Button type="submit">Отправить</Button>
      </Form>
      </Container>
      <img src={photo} alt="" />

    </ContactContainer>
   
  );
};

export default ContactForm;


