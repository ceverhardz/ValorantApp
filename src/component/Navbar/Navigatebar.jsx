import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledNavLink = styled(Nav.Link)`
    padding-left: 1.375rem !important;
    padding-right: 1.375rem !important;
    text-decoration: none;
    color: black;
    font-size: 16px;
`
const StyledNav = styled(Navbar)`
    background-color: #FFFFFF;
    box-shadow: 0px 6px 60px rgba(22, 28, 51, 0.06);
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
`

const StyledNavBar = styled(Navbar.Brand)`
    font-weight: 500;
    font-size: 28px;
    text-decoration: none;
    color: #211B3D;
`


export default function Navigatebar() {
    return (
        <StyledNav expand="lg">
        <Container>
            <StyledNavBar as={Link} to="/">ValorantApp</StyledNavBar>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <StyledNavLink as={Link} to="/">Home</StyledNavLink>
                <StyledNavLink as={Link} to="/about">About</StyledNavLink>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </StyledNav>
    )
}
