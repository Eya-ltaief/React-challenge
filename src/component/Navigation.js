import React from 'react'
import { Navbar,  Nav} from "react-bootstrap";
import { NavLink } from 'react-router-dom'
import './navigation.css'
const Navigation = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">
                <img src="cocktail.png" alt="cocktail" className="logo"/>
            </Navbar.Brand>
            <Nav className="mr-auto">
            <NavLink exact to='/' href="#home"><h6>Welcome</h6></NavLink>    
            </Nav>
            </Navbar>
        </div>
    )
}

export default Navigation
