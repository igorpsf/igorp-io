import React, {useState} from 'react';
import {Route, Routes} from "react-router";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>

                    <div className="d-flex ms-auto">
                        <NavbarToggle area-controls="responsive-navbar-nav"/>
                    </div>

                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                            <Nav.Link to="/projects" as={NavLink}>Projects</Nav.Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
            </Routes>
        </>
    );
};

export default Header;