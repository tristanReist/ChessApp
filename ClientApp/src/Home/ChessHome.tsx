import * as React from 'react';

import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    allGrid: {
        height:'100vh',
        width:'100vw',
        textAlign:"center",

    },
    dark: {
        backgroundColor:"blue",
        color:"white",
    },
    blue: {
        backgroundColor:"black",
        color:"white",
    },

  }));

const ChessHome = () => {
    const classes = useStyles();
    const history = useHistory();

    const startGame = () => {
        history.push("/colorChoice");
    };

    return (
    <div className={classes.root}>
      <Grid container
        className={classes.allGrid}>
        <Grid item xs={6}
            className={classes.dark}>
            <Button variant="contained" 
                    color="primary"
                    onClick={startGame}>
                Start game
            </Button>
        </Grid>
        <Grid item xs={6}
            className={classes.blue}>
            Hello
        </Grid>
      </Grid>
    </div>
    );
};

export default ChessHome