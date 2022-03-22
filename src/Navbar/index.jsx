
import React from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">JS Tasks</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Tasks list" id="basic-nav-dropdown">
                <NavDropdown.Item href="/task1">Task 1</NavDropdown.Item>
                <NavDropdown.Item href="/task2">Task 2</NavDropdown.Item>
                <NavDropdown.Item href="/task3">Task 3</NavDropdown.Item>
                <NavDropdown.Item href="/task4">Task 4</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>)
} 