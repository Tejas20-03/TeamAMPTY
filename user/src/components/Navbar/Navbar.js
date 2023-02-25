import React, { useState , useEffect } from 'react';
import { Link , useNavigate , useLocation } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import career from '../../images/career.png';


const Navbar = () => {
    const Classes = useStyles();
    const [user,setUser]= useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const location=useLocation();
    
    const logout=() => {
        dispatch({type:'LOGOUT'});

        navigate.push('/');

        setUser(null);
    }

    useEffect(()=>{
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')));
    },[location]);


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
                        <Button variant="contained" className={Classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to='/auth' variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;


