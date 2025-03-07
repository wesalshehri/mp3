import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Navbar Container
const Navbar = styled.nav`
  background-color: #2c3e50;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-wrap: nowrap; /* Prevents items from wrapping */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

// Mobile Menu Button (Hamburger)
const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  display: none; /* Hidden on desktop */

  @media (max-width: 768px) {
    display: block; /* Show only on mobile */
  }
`;

// Navigation List
const NavList = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 15px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #2c3e50;
    padding: 10px 0;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")}; /* Show when open */
  }
`;

const NavItem = styled.li`
  display: inline;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 15px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #1abc9c;
    border-radius: 5px;
  }
`;

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar>
      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>☰</MenuButton>
      <NavList isOpen={menuOpen}>
        <NavItem><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></NavItem>
        <NavItem><NavLink to="/education" onClick={() => setMenuOpen(false)}>Education</NavLink></NavItem>
        <NavItem><NavLink to="/experience" onClick={() => setMenuOpen(false)}>Experience</NavLink></NavItem>
        <NavItem><NavLink to="/certifications" onClick={() => setMenuOpen(false)}>Certifications</NavLink></NavItem>
        <NavItem><NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink></NavItem>
        <NavItem><NavLink to="/references" onClick={() => setMenuOpen(false)}>References</NavLink></NavItem>
        <NavItem><NavLink to="/calculator" onClick={() => setMenuOpen(false)}>Calculator</NavLink></NavItem>
      </NavList>
    </Navbar>
  );
}

