import React from "react";
import { Button } from "./GlobalStyles";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import myLogo from "../images/Logo.png";

import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  background: var(--maincolor);
  background: linear-gradient(to right top, pink, pink);
  text-align: center;
  justify-content: center;
  padding: 0 120px;

  @media screen and (max-width: 820px) {
    padding: 0 0;
  }
`;
const InfoWrapper = styled.div``;
const InfoTitle = styled.h2`
  color: white;
  font-family: "MonteCarlo", cursive;
  font-size: clamp(1rem, 8vw, 4rem);
  padding: 3rem 0;
  text-align: center;
  @media screen and (max-width: 820px) {
    padding: 1rem 0;
  }
`;
const InfoSubtitle = styled.h3`
  color: white;
`;
const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  margin: auto auto;
  width: 90%;
  max-width: 1300px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    align-items: center;
  }
`;
const ContactWrapper = styled.div`
  padding: 30px;
  height: 200px;
  display: flex;
  flex-direction: column;
  /* align-it ems: flex-start; */
  justify-content: space-between;
  color: white;
  @media screen and (max-width: 820px) {
    align-items: center;
  }
`;
const ContactTitle = styled.h2`
  font-weight: 400;
`;
const ContactSubtitle = styled.p`
  font-weight: 200;
`;
const ContactText = styled.p`
  font-weight: 400;
`;
const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;
const FormLabel = styled.label`
  color: #fff;
  padding: 5px 0 0 0;
`;
const FormInput = styled.input`
  width: 100%;
  padding: 10px 20px;
  border-radius: 20px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;
const FormTextarea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px 20px;
  border-radius: 20px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;
  margin: 0 0 5px 0;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;
const FormSubmitButton = styled(Button)`
  ${Button}
`;
const SocialMedia = styled.div``;
const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
const Logo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  img {
    height: 70px;
  }
`;

const Copyright = styled.div`
  color: #fff;
  margin-bottom: 16px;
`;
const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;
const Social = styled.a`
  color: #fff;
  font-size: 24px;
`;
function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterSection id="contact">
        <InfoWrapper>
          <InfoTitle>Kontakt</InfoTitle>
          <InfoSubtitle>Zrealizujmy wspólnie Twoje marzenia!</InfoSubtitle>
        </InfoWrapper>
        <ContactContainer>
          <ContactWrapper>
            <ContactTitle>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ContactTitle>
            <ContactSubtitle>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ContactSubtitle>
            <ContactText>Lorem@ipsum.pl</ContactText>
          </ContactWrapper>

          <Form action="https://formspree.io/f/mrgrqpqa" method="POST">
            <FormLabel for="name">IMIE</FormLabel>
            <FormInput
              name="name"
              id="name"
              type="text"
              placeholder="imię"
              required="required"
            />
            <FormLabel for="email">EMAIL</FormLabel>
            <FormInput
              name="email"
              id="email"
              type="email"
              placeholder="email"
              required="required"
            />
            <FormLabel for="message">WIADOMOŚĆ</FormLabel>
            <FormTextarea name="message" id="message" placeholder="wiadomość" />
            <FormSubmitButton type="submit">Wyślij</FormSubmitButton>
          </Form>
        </ContactContainer>
        <SocialMedia>
          <SocialMediaWrapper>
            <Logo to="/" onClick={toggleHome}>
              <img src={"#"} alt="logo"></img>
            </Logo>
            <Copyright>Z kwiatów uszyte© 2021</Copyright>
            <SocialWrapper>
              <Social href="#" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </Social>
              <Social href="#" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </Social>
            </SocialWrapper>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterSection>
    </>
  );
}

export default Footer;
