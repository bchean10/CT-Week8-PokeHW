import React, { Component } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" style={{marginBottom:'60px'}}>
                <Container>
                    <Navbar.Brand href="/">Pokemon Again~</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Poke</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}
