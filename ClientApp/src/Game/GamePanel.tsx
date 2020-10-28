import * as React from 'react';

import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Card } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { SettingsOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      justifyContent: 'center',
    },
    gameInfo: {
        height: '22vh',
        width: "100%",
        justifyContent: 'center',
        backgroundColor : "grey"
    },
    whitePlayerInfo: {
        height: '32vh',
        width: "100%",
        justifyContent: 'center',
    },
    blackPlayerInfo: {
        height: '32vh',
        width: "100%",
        justifyContent: 'center',
        backgroundColor : "black"
    },
    whiteColorPawn: {
        color: 'white'
    }
}));

interface GamePanelProps {
    gameId: string;
}


const MenuBar = (props : GamePanelProps) => {
    const classes = useStyles();
    const gameId : string = props.gameId;


    const [timerTime, setTimerTime] = React.useState<number>(0);
    const [timerStart, setTimerStart] = React.useState<number>(Date.now());
    const [whitePlayer, setWhitePlayer] = React.useState<string>("");
    const [blackPlayer, setBlackPlayer] = React.useState<string>("");


    const getNames = async () => {
        const result = await axios.get<string[]>("game/getPlayers", { params: { gameId } });
        setWhitePlayer(result.data[0]);
        setBlackPlayer(result.data[1]);
    }
    getNames();
    
    /*
    const timer = setInterval(() => {
        setTimerTime(Date.now() - timerStart)
    }, 1000);

    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

A AJOUTER APRES TIMER
     {timerStart !== 0 &&
                    <Typography gutterBottom variant="h5"
                                component="h2"
                                align="center">
                    {hours} : {minutes} : {seconds}
                    </Typography>
                }
                

*/
    return(
        <div className={classes.root}>
            <Card className={classes.blackPlayerInfo}>
                <Typography className={classes.whiteColorPawn}
                            gutterBottom variant="h5"
                            component="h2"
                            align="center">
                    Black player :
                </Typography> 
                <Typography className={classes.whiteColorPawn}
                    gutterBottom variant="h5"
                    component="h2"
                    align="center">
                    {blackPlayer}
                </Typography> 
            </Card>
            <Card className={classes.gameInfo}>
                <Typography 
                gutterBottom variant="h5"
                            component="h2"
                            align="center">
                    Timer :
                </Typography>
        
               
            </Card>
            <Card className={classes.whitePlayerInfo}>
                <Typography gutterBottom variant="h5"
                                    component="h2"
                                    align="center">
                        White player :
                </Typography> 
                <Typography gutterBottom variant="h5"
                        component="h2"
                        align="center">
                    {whitePlayer}
                </Typography> 
            </Card>
        </div>
    );
};

export default MenuBar