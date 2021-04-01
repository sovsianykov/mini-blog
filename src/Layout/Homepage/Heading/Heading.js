import React from 'react';
import {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        width:'100%',
        flexGrow: 1,
        position : "fixed",
        top:0 ,
        zIndex: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Heading() {
    const classes = useStyles();
    const [isopen, setIsopen] = useState(false)
    const toogle =() => {
        setIsopen( !isopen )
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Mini-blog
                    </Typography>

                    <Button color="inherit">New Articles</Button>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Logout</Button>

                </Toolbar>
            </AppBar>
        </div>
    );
}
