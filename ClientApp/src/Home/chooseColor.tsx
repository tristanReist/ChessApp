import * as React from 'react';
import Button from '@material-ui/core/Button';
import FilterVintageRoundedIcon from '@material-ui/icons/FilterVintageRounded';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { CardActions, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import HelpIcon from '@material-ui/icons/Help';
import TextField from '@material-ui/core/TextField';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { dark } from '@material-ui/core/styles/createPalette';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    buttonLaunch: {
        backgroundColor:"black",
        margin: theme.spacing(1),
        color:"white",
    },
    buttonRandom: {
        backgroundColor: "black",
        margin: theme.spacing(1),
        color:"white",
    }
  }));

const ChooseColor = () => {
    const classes = useStyles();
    const [whiteName, setWhiteName] = React.useState<String>("");
    const [blackName, setBlackName] = React.useState<String>("");
    const [launchGame, setLaunchGame] = React.useState<boolean>(false);

    const history = useHistory();

    React.useEffect(() => {
        const startGame = async () => {
            const result = await axios.post<string>("game/registerPlayers", [whiteName, blackName]);
            history.push("/game/gameId=?" + result.data);
        }
        if (launchGame) {
            startGame();
        }
        
    }, [launchGame]);

    const randomizePlayer = () => {
        if (Math.random() < 0.5) {
            let temp = whiteName;
            setWhiteName(blackName);
            setBlackName(temp);
        }
        startGame();
    };

    const startGame = () => {
        if (whiteName !== "" && blackName !== "")
        {
            setLaunchGame(true);
        }
    };

    const addWhitePlayer = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWhiteName(e.target.value);
    }

    const addBlackPlayer = (e: React.ChangeEvent<HTMLInputElement>) =>  {
        setBlackName(e.target.value);
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant="h5"
                            component="h2"
                            align="center">
                    Enter your name to select a color:
                </Typography>
            </CardContent>
           <CardContent>
                <CardActions className={classes.root}>
                    <TextField
                        id="whitePlayer"
                        label="White player"
                        onChange={addWhitePlayer} />
                </CardActions>
                <CardActions className={classes.root}>      
                    <TextField
                        id="blackPlayer"
                        label="Black player"
                        onChange={addBlackPlayer} />
                </CardActions>
            </CardContent>
            <CardActions className={classes.root}>   
                <Button
                    variant="contained"
                    className={classes.buttonLaunch}
                    startIcon={<PlayCircleOutlineIcon />}
                    onClick={startGame}>
                    Start
                </Button>     
                <Button
                    variant="contained"
                    className={classes.buttonRandom}
                    startIcon={<HelpIcon />}
                    onClick={randomizePlayer}>
                    Start as random
                </Button>
            </CardActions>
        </Card>
    )
}

export default ChooseColor