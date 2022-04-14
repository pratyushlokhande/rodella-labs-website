import React from "react";
import styled from "styled-components";
import {} from "react-icons/ti";
import {
  TiSocialFacebookCircular,
  TiSocialInstagramCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";
import Logo from "./Logo";

const Home = () => {
  return (
    <HomePage>
      <HomePageLeft>
        <h1>
          <span>Rodella</span> Labs
        </h1>
        <p>Advanced Aerial Systems</p>
        <ul>
          <li>
            <TiSocialFacebookCircular />
          </li>
          <li>
            <TiSocialInstagramCircular />
          </li>
          <li>
            <TiSocialLinkedinCircular />
          </li>
        </ul>
      </HomePageLeft>
      <HomePageRight>
        <Logo />
      </HomePageRight>
    </HomePage>
  );
};

const HomePage = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #000;
  display: flex;
`;

const HomePageLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  h1 {
    line-height: 1.2;
    margin-top: 2rem;
    text-transform: uppercase;
    display: flex;
    gap: 2rem;
    align-items: center;
    color: #fff;

    span {
      background-color: #fff;
      color: #000;
      display: block;
      padding: 0.5rem 1rem;
      width: fit-content;
    }
  }

  p {
    /* color: #d6ccc2; */
    color: #3de612;
    /* width: 60%; */
    line-height: 1.2;
    letter-spacing: 0.1rem;
    font-size: 2.5rem;
    text-transform: uppercase;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1rem;
    list-style-type: none;
    margin-top: 1rem;
    li {
      font-size: 3rem;
    }
  }
`;

const HomePageRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

export default Home;
