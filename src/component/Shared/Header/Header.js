import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import './Header.css';
import Box from '@mui/material/Box';


const Header = () => {
    const {user , logout } = useAuth();
    return (
    
    <div className="navStyle">
        <Navbar expand={'lg'} bg="dark" variant="dark">
        <Container >
        <Navbar.Brand>Hawar-Gari</Navbar.Brand>
        <Nav className="me-auto">
        <NavLink className="about" to="/home">Home</NavLink>
        <NavLink className="about" to="/aboutus">About Us</NavLink>
        <NavLink className="about" to="/products">Products</NavLink>
        <NavLink className="about" to="/addproducts">Add Products</NavLink>
      

        

        {
            
            user?.email ?
            
                <Box>
                    <NavLink to="/dashboard">
                        <Button variant="dark" >Dashboard</Button>
                    </NavLink>
                    <span className="userName"> {user.displayName}</span>
                    <Button onClick={logout} variant="dark" >Logout</Button>
                </Box>
                
        
            :
            <div>
                
            <NavLink className="about"  to="/login">
                <Button variant="dark" >Login</Button>
            </NavLink>
            </div>
        }
        </Nav>
        </Container>
    </Navbar>
    </div>
    
    );
};

export default Header;