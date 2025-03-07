import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Navbar
const Navbar = styled.nav`
    background-color: #2c3e50;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: center; 
    max-width: 100%;
    flex-wrap: wrap; 
`;

const NavList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap; 
    gap: 15px;
    justify-content: center; 
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
    return (
        <Navbar>
            <NavList>
                <NavItem><NavLink to="/">Home</NavLink></NavItem>
                <NavItem><NavLink to="/education">Education</NavLink></NavItem>
                <NavItem><NavLink to="/experience">Experience</NavLink></NavItem>
                <NavItem><NavLink to="/certifications">Certifications</NavLink></NavItem>
                <NavItem><NavLink to="/projects">Projects</NavLink></NavItem>
                <NavItem><NavLink to="/references">References</NavLink></NavItem>
                <NavItem><NavLink to="/calculator">Calculator</NavLink></NavItem>
            </NavList>
        </Navbar>
    );
}
