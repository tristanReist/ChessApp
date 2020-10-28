import * as React from 'react';

import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  

const MenuBar = () => {
    const classes = useStyles();
    const history = useHistory(); 

    const goToMenu = () => {
        history.push("/");
    };

    return(
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton 
                edge="start" 
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={goToMenu}>
              <HomeIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              What a wonderfull game of chess provided by the awesomes Tristan Reist
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
};

export default MenuBar