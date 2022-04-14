import React from "react";
import styled from "styled-components";
import { TiArrowRightOutline } from "react-icons/ti";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const Content = ({ title, subTitle, images }) => {
  //   const images = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <ContentContainer>
      <Heading>
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
      </Heading>

      <Container>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={4}
          //   onSlideChange={() => console.log("slide change")}
          //   onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 1000,
          }}
          loop={true}
        >
          {/* <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide> */}
          {images.map((image) => (
            <SwiperSlide>
              <SlideContainer src={`//unsplash.it/400?${image}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <a href="#">
        Know More <TiArrowRightOutline />{" "}
      </a>
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a {
    position: relative;
    text-align: center;
    background-color: #fff;
    color: #000;
    padding: 1rem 2rem;
    margin: 3rem auto 0 auto;
    text-decoration: none;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 1.2rem;
    line-height: 1.2;
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10rem 0 5rem 0;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    justify-content: center;
  }

  h3 {
    color: grey;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const SlideContainer = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  background-color: grey;
`;

export default Content;
