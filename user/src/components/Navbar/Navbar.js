import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";

import useStyles from './styles';
import career from '../../images/career.png';
import { GoogleLogin , googleLogout } from '@react-oauth/google';

const Navbar = () => {
    const Classes = useStyles();
    const user = null;
    return (
        <AppBar className={Classes.appBar} position="static" color="inherit">
            <div className={Classes.brandContainer}>

                <Typography component={Link} to="/" className={Classes.heading} variant="h2" align="center">Team Ampty</Typography>
                <img className={Classes.image} src={career} alt="Career" height="60" />
            </div>
            <Toolbar className={Classes.toolbar}>
                {user ? (
                    <div className={Classes.profile}>
                        <Avatar className={Classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={Classes.user} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={Classes.logout} color="secondary" >Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to='/auth' variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;


