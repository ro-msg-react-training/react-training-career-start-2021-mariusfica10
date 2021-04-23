import React from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'

const NavNavbarComponent = () =>{
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand> <Link to="/"> <h2>Online shop </h2> </Link> </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
            
            <LinkContainer to="/products">
            <Nav.Link>Products</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
            <Nav.Link>Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
            <Nav.Link>Categories</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
            <Nav.Link>My Profile</Nav.Link>
            </LinkContainer>
    
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="secondary">Search</Button>
            </Form>
            </Nav>
            <Nav>
            <LinkContainer to="/login">
            <Nav.Link>Log in</Nav.Link>
            </LinkContainer>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        );

}

export default NavNavbarComponent;
