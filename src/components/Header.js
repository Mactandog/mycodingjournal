import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Greetings from './Greetings';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


let Header = () => {

  const NavList = styled.a `text-decoration: none;`;
  const StyledLink = styled(Link)`
          padding-left: 1rem;
          color: white;
          text-decoration: none;
          &:hover,
          &:focus {
            color: yellow;
          }
          &:active {
            color: red;
          }`
  let person = {fname: "Ryan Mark", lname: "Eyana"};

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="success">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
              
            </IconButton>
            <Typography
           >
             <h1>MyCompany</h1>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
               <Greetings firstName = {person.fname} lastName = {person.lname}/>
            </Typography>
            <Button color="inherit">Login</Button>
            <NavList>
              <StyledLink to = '/'>Home</StyledLink>
              <StyledLink to = '/aboutus'>About Us</StyledLink>
              <StyledLink to = '/activities'>Activities</StyledLink>
              <StyledLink to = '/portfolio'>Portfolio</StyledLink>
              <StyledLink to = '/hook'>Hooks</StyledLink>
              <StyledLink to = '/contactus'>Contact Us</StyledLink>
              <StyledLink to = '/mycodingjournal'>My Journal</StyledLink>
            </NavList>

          </Toolbar>
        </AppBar>
      </Box>
    );
  }

export default Header;