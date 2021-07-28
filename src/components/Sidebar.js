import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: white;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(FaTimes)`
  color: var(--maincolor);
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
  color: #fff;
`;

const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  color: var(--maincolor);
  cursor: pointer;
  &:hover {
    color: #0467fb;
    transition: 0.2s ease-in-out;
  }
`;

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="aboutMe"
            onClick={toggle}
            offset={-80}
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
          >
            O mnie
          </SidebarLink>
          <SidebarLink
            to="offer"
            onClick={toggle}
            offset={-80}
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
          >
            Oferta
          </SidebarLink>
          <SidebarLink
            to="gallery"
            onClick={toggle}
            offset={-80}
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
          >
            Galeria
          </SidebarLink>
          <SidebarLink
            to="contact"
            onClick={toggle}
            offset={-80}
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
          >
            Kontakt
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
