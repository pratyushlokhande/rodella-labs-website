import React from "react";
import styled from "styled-components";

const EnquiryForm = () => {
  return (
    <EnquiryFormContainer>
      <Left>
        RODELLA
        <br />
        LABS
        <br />
        INDIA
      </Left>
      <Right>
        <h1>
          Enquiry
          <br />
          Form
        </h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Enter Message..." />
          <button>Submit</button>
        </form>
      </Right>
    </EnquiryFormContainer>
  );
};

const EnquiryFormContainer = styled.div`
  position: relative;
  margin-top: 5rem 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
`;

const Left = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  color: #fff;
`;

const Right = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  /* align-items: center; */

  h1 {
    font-size: 3rem;
  }

  form {
    width: 100%;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    input {
      width: 100%;
      height: 3rem;
      border: 1px solid #fff;
      font-size: 1.5rem;
      background-color: transparent;
      color: #29bf12;
      padding: 0 0.5rem;
      font-weight: 500;

      &:focus {
        outline: none;
        border-color: #29bf12;
      }
    }

    textarea {
      width: 100%;
      height: 10rem;
      border: 1px solid #fff;
      background-color: transparent;
      color: #29bf12;
      padding: 0.5rem;
      font-size: 1.5rem;
      font-weight: 500;

      &:focus {
        outline: none;
        border-color: #29bf12;
      }
    }

    button {
      width: 50%;
      height: 3rem;
      border: none;
      background-color: grey;
      color: #000;
      font-size: 1.5rem;
      font-weight: 500;

      &:focus {
        outline: none;
      }
    }
  }
`;

export default EnquiryForm;
