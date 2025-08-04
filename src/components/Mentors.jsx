import React, { useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const MentorsContainer = styled.div`
width: 1425px;
height: 436px;
top: 3796px;
left: 162px;
border-bottom-right-radius: 16px;
border-bottom-left-radius: 16px;
transform:translate(14%);
margin-top:190px;
`;
const Text = styled.h2`
 width: 208px;
height: 38px;
top: 3806px;
left: 162px;
font-family: Corbel;
font-weight: 700;
font-size: 32px;
line-height: 38px;
letter-spacing: 0%;
vertical-align: middle;
color: #FFFFFF;

`;

const SliderButton = styled.button`
width: 65px;
height: 57px;
top: 3796px;
left: 1092px;
border-radius: 16px;
background: linear-gradient(180deg, rgba(57, 144, 249, 0.135) 0%, rgba(236, 181, 255, 0.135) 100%);
border: 2px solid #0e0923;
color: #FFFFFF;
transform:translate(1700%);
margin-top:-50px;
  ${({ left }) => (left ? "left: 10px;" : "right: 10px;")}
`;
const MentorImage = styled.img`
 width: 400px;
height: 460px;
top: 3888px;
left: 453px;
border-radius: 16px;
margin-top:10px;
`;

const Mentors = () => {
  const swiperRef = useRef(null);

  return (
    <MentorsContainer id="mentors">
      <Text>Наши ментора</Text>
      <SliderButton left onClick={() => swiperRef.current.slidePrev()}>
        <FaArrowLeft />
      </SliderButton>
      <SliderButton onClick={() => swiperRef.current.slideNext()}>
        <FaArrowRight />
      </SliderButton>

      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={10}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
          <SwiperSlide>
          <MentorImage src="https://th.bing.com/th/id/OIP.byLcR0QiGbqGPEwjc7KPFQHaLH?w=204&h=306&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Mentor 1" />
        </SwiperSlide>
        <SwiperSlide>
          <MentorImage src="https://th.bing.com/th/id/OIP.e1H0jtR3N9b7q9yTbdvRzwHaJ4?rs=1&pid=ImgDetMain" alt="Mentor 2" />
        </SwiperSlide>
        <SwiperSlide>
          <MentorImage src="https://th.bing.com/th/id/OIP.z0z1uCUe1ITqVmKO8PW_ogHaJF?w=161&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Mentor 3" />
        </SwiperSlide>
        <SwiperSlide>
          <MentorImage src="https://i.pinimg.com/originals/e2/37/02/e237029135f7f5dbaecc61fc92eeff33.jpg" alt="Mentor 4" />
        </SwiperSlide>
        <SwiperSlide>
          <MentorImage src="https://th.bing.com/th/id/OIP.qSw5buBO3OkIKANOe1BkZwHaLH?w=204&h=306&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Mentor 5" />
        </SwiperSlide>
      </Swiper>
    </MentorsContainer>
  );
};

export default Mentors;

