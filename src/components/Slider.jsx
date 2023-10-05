import React from "react";
import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-2227px);
  }
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 300px;
  padding-top: 100px;
`;

const Slider = styled.div`
  padding: 50px 0;
  height: 40px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;

  ::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  ::before {
    left: 0;
    top: 0;
  }
`;

const SlideTrack = styled.div`
  animation: ${scroll} 40s linear infinite;
  display: flex;
  width: 4296px;

  :hover {
    animation-play-state: paused;
  }
`;

const Slide = styled.div`
  height: 40px;
  padding-right: 120px;
  position: relative;

  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-size: contain !important;
    opacity: 1;
    transition: 0.1s ease-out;
  }
`;

const img = styled.img`
  max-width: none;
  opacity: 0;
  transition: 0.1s ease-out;
`;

const SliderComponent = () => {
  return (
    <SliderContainer>
      <Slider>
        <SlideTrack className="slider-animation">
          <Slide className="slide yahoo">
            <img
              src="https://hypra.tech/wp-content/themes/hypra_theme/img/yahoo_logo.png"
              height="40"
              width="275"
              alt="yahoo"
            />
          </Slide>
          <Slide className="slide bloomberg">
            <img
              src="https://hypra.tech/wp-content/themes/hypra_theme/img/bloomberg_logo.png"
              height="40"
              width="217"
              alt="bloomberg"
            />
          </Slide>
          <Slide className="slide forbes">
            <img
              src="https://hypra.tech/wp-content/themes/hypra_theme/img/forbes_logo.png"
              height="40"
              width="154"
              alt="forbes"
            />
          </Slide>
          <Slide className="slide forklog">
            <img
              src="https://hypra.tech/wp-content/themes/hypra_theme/img/forklog_logo.png"
              height="40"
              width="166"
              alt="forklog"
            />
          </Slide>
          <Slide className="slide ain">
            <img
              src="https://hypra.tech/wp-content/themes/hypra_theme/img/ain_logo.png"
              height="40"
              width="65"
              alt="ain"
            />
          </Slide>
          <Slide className="slide vector">
            <img
              src="https://hypra.tech/wp-content/themes/hypra_theme/img/vector_logo.png"
              height="40"
              width="197"
              alt="vector"
            />
          </Slide>
          <Slide className="slide inventure">
            <img
              src="https://hypra.tech/wp-content/themes/hypra_theme/img/inventure_logo.png"
              height="40"
              width="313"
              alt="inventure"
            />
          </Slide>

          <Slide className="slide yahoo">
            <img
              src="https://hypra.tech/wp-content/themes/hypra_theme/img/yahoo_logo.png"
              height="40"
              width="275"
              alt="yahoo"
            />
          </Slide>
          <Slide className="slide bloomberg">
            <img
              src="https://hypra.tech/wp-content/themes/hypra_theme/img/bloomberg_logo.png"
              height="40"
              width="217"
              alt="bloomberg"
            />
          </Slide>
          <Slide className="slide forbes">
            <img
              src="https://hypra.tech/wp-content/themes/hypra_theme/img/forbes_logo.png"
              height="40"
              width="154"
              alt="forbes"
            />
          </Slide>
          <Slide className="slide forklog">
            <img
              src="https://hypra.tech/wp-content/themes/hypra_theme/img/forklog_logo.png"
              height="40"
              width="166"
              alt="forklog"
            />
          </Slide>
          <Slide className="slide ain">
            <img
              src="/wp-content/themes/hypra_theme/img/ain_logo.png"
              height="40"
              width="65"
              alt="ain"
            />
          </Slide>
          <Slide className="slide vector">
            <img
              src="https://hypra.tech/wp-content/themes/hypra_theme/img/vector_logo.png"
              height="40"
              width="197"
              alt="vector"
            />
          </Slide>
          <Slide className="slide inventure">
            <img
              src="https://hypra.tech/wp-content/themes/hypra_theme/img/inventure_logo.png"
              height="40"
              width="313"
              alt="inventure"
            />
          </Slide>
        </SlideTrack>
      </Slider>
    </SliderContainer>
  );
};

export default SliderComponent;
