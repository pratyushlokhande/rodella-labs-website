import React from "react";
import styled from "styled-components";
import { TiLocation, TiPhone, TiMail } from "react-icons/ti";
import Logo from "./Logo";

const Footer = () => {
  return (
    <FooterContainer>
      <MainFooter>
        <Left>
          <Logo />
        </Left>
        <Right>
          <h3>
            <span>
              <TiLocation />
            </span>
            Lab
          </h3>
          <p>
            1st floor, Composites Technology Center, Dept. of Aerospace
            Engineering, IIT Madras, Chennai
          </p>
        </Right>
        <Right>
          <h3>
            <span>
              <TiPhone />
            </span>
            Phone
          </h3>
          <p>+91 6380 897 553</p>
        </Right>
        <Right>
          <h3>
            <span>
              <TiMail />
            </span>
            Email
          </h3>
          <p>query@rodellalabs.in</p>
        </Right>
      </MainFooter>
      <Line></Line>
      <BottomFooter>
        © 2020 All Rights Reserved to Rodella Technologies Private Limited
      </BottomFooter>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  position: relative;
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MainFooter = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 40%;
  }
`;

const Right = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #fff;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      color: #29bf12;
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    color: grey;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #29bf12;
`;

const BottomFooter = styled.div`
  width: 100%;
  font-size: 1.2rem;
  text-align: center;
`;

export default Footer;
