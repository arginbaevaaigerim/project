
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
            <OfficeImage src="https://s3-alpha-sig.figma.com/img/882a/9b9e/baa3c34b8f54de09d2047b5d6a488dfe?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bNjsO9~emq34BzpGZF2vgtYL-nzDMgrdnZVWNls795SYkLyXIeDKchTCjyAK~FJ6SfJi0Zhj9zVdCPbhze6ohDG8S9a-OXd5YdgAuJpX0w1zHZqFH7qaXR1x2uBxi-LA3Br8m-S3BFnLTOfiVihgHcN6DTZFac8HKALVPrBPLPb4CJwUEBrC0FXusz6W9aKq32xhIibhaFKcN0sknIBzsrGOg402TJHhkvDC5vuCNMN85xSrUTxQIb8S2wFDYeTY0UydmsZsF3ubn3bHhvNj0YSiD~ldwAoE~Ra09uMCufkpA63bUGwD3-jdnLIJmLNEx-BVTzXT9ScYu6~cZIB6wA__" alt="Офис 2" />
          </SwiperSlide>
          <SwiperSlide>
            <OfficeImage src="https://s3-alpha-sig.figma.com/img/bf05/5eb9/2b09f88772aec87ae3438487b03d8552?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YFec8S7LJs7X7aI4dwWmQ--XMVbhXDvhyuPiLtM5jUMco6ZO~dwsoVJrDzvnGjM8Jgp47ko79xTQZSP70shBomQjNv6K0ByM1D--F4nvO9rps4os0f3-T4PB02QEypmQllxAo6uxzKS97WLJSwQAShzA2I9UXMDuOs47JB1ulBRWW0FNpOOJPWqyunuLf5VPaovIzL77ftOIjgfiFeqMZHYPVpgwl5GpUNFLX-kpz5u6mMZDrbml8iO7y4vaesI9fVuoMt7D9LS0XYoAADY45CO6ZGYyAn8LaNdT4KuuIiM6tQqJ8moSEy2bDrQjLnEGCwGbvQSPv5V4EWcNFXDhig__" alt="Офис 3" />
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
  