import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import axios from 'axios';
import MenuBar from './MenuBar';
import GamePanel from './GamePanel';
import ChessBoard from './ChessBoard';

const useStyles = makeStyles((theme) => ({
    page: {
        position: "absolute",
        height: '100vh',
        width: "100%",
        top: "0",
        left: "0",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    echiquier: {
        position: "absolute",
    },
}));

const Game = () => {
    const classes = useStyles();

    var tmp = window.location.href.indexOf("gameId=?") + 8;
    var gameId = window.location.href.slice(tmp, window.location.href.length);


    return (
        <div className={classes.page}>
            <MenuBar/>

            <Grid container spacing={3} className={classes.echiquier}>
                <Grid item xs={8}>
                    <ChessBoard
                        gameId={gameId}
                    />
                </Grid>
                <Grid item xs={4}>
                    <GamePanel
                        gameId={gameId}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default Game