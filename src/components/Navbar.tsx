

import { Link } from "react-router";
import styled from "styled-components";

// This component creates a navigation bar shared across the website.

// Style the navigation bar with BU-inspired colors
const Nav = styled.nav`
    background-color: #cc0000;
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
`;

// Style the website title
const Logo = styled(Link)`
    color: white;
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
`;

// Arrange navigation links horizontally
const Links = styled.div`
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
`;

// Style each navigation link
const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 16px;

    &:hover {
        text-decoration: underline;
    }
`;

// Display the website title and navigation links
export default function Navbar() {
    return (
        <Nav>
            <Logo to="/">BU Dining Connect</Logo>

            <Links>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/menu">Weekly Menu</NavLink>
                <NavLink to="/vote">Vote</NavLink>
                <NavLink to="/requests">Club Requests</NavLink>
                <NavLink to="/staff">Staff Dashboard</NavLink>
            </Links>
        </Nav>
    );
}
