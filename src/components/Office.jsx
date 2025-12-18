
import React, { useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Container = styled.div`
  width: 1440px;
  height: 906px;
  top: 4329px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, #071327 100%);
  margin-top:150px;
`;

const OfficeContainer = styled.div`
  padding: 40px;
  background-image:url('https://s3-alpha-sig.figma.com/img/f850/f62d/d7850d5bab9549542bb63f1d037e384f?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GAyvLzngFIJoXjcNtwe34WO4GQcbwc9h~kpWgA6KK3Q2lzIAi3CQYvYUfyFfWRyQEUydVlbZzENBIKj3XOjuhwaYPhwo89ucW2lIuzEyitjdM8GA3IBOD~TYOjX4FNmUr7Y6BEShbLAfxqNOR4tRo4titXxoV1wkWENIqBibDyWngCuDsKfp~vMT1avumT2sgWFTIyiMhP30sX~-xzgfRfjgQljaOqFWh6~LVIMLQHcF7Nb5IQ-SloV8XARDMbjZ76kV0tvU-xVWwfCFJk1fv~FYCgRHatCzxZg9RQUqEo7L7a3cATdLLgqvA4Upsi7k7hzaYsKHDC5xlo8-iWjFGA__');
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  width: 1768px;
  height: 724px;
  top: 82px;
`;

const Text = styled.h2`
width: 141px;
height: 38px;
left: 162px;
color:#FFFFFF;
margin-bottom: 10px;
`;

const ContainerImage = styled.div`
width: 1300px;
height: 436px;
top: 3796px;
left: 162px;
 margin-top:306px;
 transform:translate(30%);
`;

const OfficeImage = styled.img`
display:flex;
justify-content:space-around;
  width: 311px;
  height: 378px;
  top: 528px;
  left: 556px;
  border-radius: 16px;
  box-shadow: 0px 9px 14px 0px #0000004D;
`;

const SliderButton = styled.button`
width: 55px;
height: 47px;
top: 3796px;
left: 1092px;
border-radius: 16px;
background: linear-gradient(180deg, rgba(57, 144, 249, 0.135) 0%, rgba(236, 181, 255, 0.135) 100%);
border: 2px solid #0e0923;
color: #FFFFFF;
transform:translate(10%);
margin-top:10px;
  ${({ left }) => (left ? "left: 10px;" : "right: 10px;")}
`;

const Office = () => {
   const swiperRef = useRef(null);
  
    return (
      <Container>
         <Text>Наш офис</Text>
         <OfficeContainer>
        <ContainerImage>

        <Swiper 
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={10}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          
          <SwiperSlide>
            <OfficeImage src="https://i.pinimg.com/474x/c4/f6/b7/c4f6b7658b9dd474966c2bf1b73d3bc5.jpg" alt="Офис 1" />
          </SwiperSlide>
          <SwiperSlide>
            <OfficeImage src="https://i.pinimg.com/1200x/37/73/f3/3773f34bd4427f177e6189fc165ed27a.jpg" alt="Офис 2" />
          </SwiperSlide>
          <SwiperSlide>
            <OfficeImage src="https://i.pinimg.com/1200x/db/e6/14/dbe61467598a34dc1b363374526dcad8.jpg" alt="Офис 3" />
          </SwiperSlide>
          <SwiperSlide>
            <OfficeImage src="https://i.pinimg.com/474x/4c/64/41/4c644179a3f24b5ffda45ace65e24742.jpg" alt="Офис 4" />
          </SwiperSlide>
          <SwiperSlide>
            <OfficeImage src="https://i.pinimg.com/474x/49/27/4c/49274c1c9ac9634e7e87ee1a5e101184.jpg" alt="Офис 5" />
          </SwiperSlide>
        </Swiper>
          
         <SliderButton left onClick={() => swiperRef.current.slidePrev()}>
          <FaArrowLeft />
            </SliderButton>
          <SliderButton onClick={() => swiperRef.current.slideNext()}>
          <FaArrowRight />
        </SliderButton>

        </ContainerImage>
      </OfficeContainer>

      </Container>
     
    );
  };
  
  export default Office;
  