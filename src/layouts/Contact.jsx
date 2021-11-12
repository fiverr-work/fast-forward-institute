import React from "react";
import styled from "styled-components";

import Button from "../components/Button";
import { Form } from "./Payment";

import { ReactComponent as CloseIcon } from "../img/icons/close.svg";
import { ReactComponent as LeftArrowIcon } from "../img/icons/leftArrow.svg";
import { ReactComponent as TwitterIcon } from "../img/icons/twitter.svg";
import { ReactComponent as FacebookIcon } from "../img/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "../img/icons/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../img/icons/linkedin.svg";

const Contact = ({ setModal }) => {
  function handleSubmit(e) {
    e.preventDefault();
    // setModal(false)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <header>
        <LeftArrowIcon onClick={() => setModal(false)} />
        <h3>Contact</h3>
        <CloseIcon onClick={() => setModal(false)} />
      </header>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <textarea cols="30" rows="10" placeholder="Message" required></textarea>
      <Button type="submit" variant="dark">
        Submit
      </Button>
      <Footer>
        <a href="https://www.twitter.com">
          <TwitterIcon />
        </a>
        <a href="https://www.facebook.com">
          <FacebookIcon />
        </a>
        <a href="https://www.instagram.com">
          <InstagramIcon />
        </a>
        <a href="https://www.linkedin.com">
          <LinkedinIcon />
        </a>
      </Footer>
    </Form>
  );
};

export default Contact;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 38px;
  a {
    padding: 10px;
    :not(:last-child) {
      margin-right: 20px;
    }
    :hover {
      svg {
        path {
          fill: #00c896;
        }
      }
    }
  }
`;
