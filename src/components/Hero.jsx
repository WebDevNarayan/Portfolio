import React from "react";
import styled, { keyframes } from "styled-components";

const animate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const animate2 = keyframes`
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const Square = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  span:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #fff;
    border-radius: 35% 65% 67% 36% / 45% 46% 58% 62%;
    animation: ${animate} 6s linear infinite;
  }

  &:hover span:nth-child(1) {
    border: none;
    background: -webkit-linear-gradient(90deg, #6f31eb, #00a0ff, #aedae6);
    background: linear-gradient(90deg, #6f31eb, #00a0ff, #aedae6);
  }

  span:nth-child(2) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #fff;
    border-radius: 35% 65% 67% 36% / 45% 46% 58% 62%;
    animation: ${animate} 4s linear infinite;
  }

  &:hover span:nth-child(2) {
    border: none;
    background: -webkit-linear-gradient(90deg, #6f31eb, #00a0ff, #aedae6);
    background: linear-gradient(90deg, #6f31eb, #00a0ff, #aedae6);
  }

  span:nth-child(3) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #fff;
    border-radius: 35% 65% 67% 36% / 45% 46% 58% 62%;
    animation: ${animate2} 11s linear infinite;
  }

  &:hover span:nth-child(3) {
    border: none;
    background: -webkit-linear-gradient(90deg, #41a8bf, #a044c1, #6f1fbf);
    background: linear-gradient(90deg, #41a8bf, #a044c1, #6f1fbf);
  }
`;

const Content = styled.div`
  margin: 10px;
  z-index: 20;
  position: relative;
  color: #fff;
  text-align: center;

  a {
    position: relative;
    display: flex;
    border: 1px solid #fff;
    padding: 15px 20px;
    font-weight: 800;
    color: #fff;
    border-radius: 75% 20% 42% 65% / 55% 43% 58% 57%;
    text-transform: uppercase;
    font-size: 18px;
    margin-top: 20px;
    text-decoration: none;
  }

  a:hover {
    background: #fff;
    color: #000;
  }

  p {
    margin-bottom: 10px;
    font-size: 35px;
  }
`;

const Hero = () => {
  return (
    <Square className="lg:h-[400px] lg:w-[400px] h-[300px] w-[300px]">
      <span></span>
      <span></span>
      <span></span>
      <Content>
        <img
          className="rounded-full z-30"
          src="/images/thumbnail.jpg"
          alt="thumbnail"
        />
      </Content>
    </Square>
  );
};

export default Hero;
