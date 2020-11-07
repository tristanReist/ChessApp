import * as React from 'react';

import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Case } from "../Models/Case";
import { movePiece } from "../Models/Piece";
import { Icon } from '@material-ui/core';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        position:"absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    selectedButton: {
        position: "relative",
        backgroundColor: "green",
        '&:hover': {
            backgroundColor: "green"
        },
        maxWidth: '10vh',
        minWidth: '10vh',
        maxHeight: '10vh',
        minHeight: '10vh',
        justify: "center",
        justifyContent: 'center'
    },
    whiteButton: {
        position: "relative",
        color : "white",
        backgroundColor: "white",
        '&:hover': {
            backgroundColor: "white"
        },
        maxWidth: '10vh',
        minWidth: '10vh',
        maxHeight: '10vh',
        minHeight: '10vh',
        justify: "center",
        justifyContent: 'center'
    },
    blackButton: {
        position: "relative",
        backgroundColor: "black",
        '&:hover': {
            backgroundColor: "black"
        },
        maxWidth: '10vh',
        minWidth: '10vh',
        maxHeight: '10vh',
        minHeight: '10vh',
        justify:"center",
       justifyContent: 'center'
    },
    imageIcon: {
        position: "relative",
        justify: "center",
        height: "10vh",
        width: '10vh',
    },
}));


interface ChessBoardProps {
    gameId: string;
}


const ChessBoard = (props: ChessBoardProps) => {
    const classes = useStyles();
    const { gameId } = props;
    const [cases, setCases] = React.useState<Case[]>([]);

    const stringToIntId = (s: string) => {
        //Convert string to int from 0 to 63
        let intId: number = (s.charCodeAt(0) - 97) * 8 + s.charCodeAt(1) - 48;

        //ind for case is the index of our case in the cases element, which is not in 
        //the same order
        let indForCase = 8 * (7 - Math.trunc(intId / 8)) + intId % 8;

        return indForCase;
    }




    React.useEffect(() => {
        const getCases = async () => {
            const result = await axios.get<Case[]>("game/getCasesInformation", { params: { gameId } });
            //Remap the solutions so that it is as in a chess board
            let temp: Case[] = [];
            for (let i = 7; i >= 0; i--) {
                for (let j = 0; j < 8; j++) {
                    let tempCase: Case = result.data[i * 8 + j];
                    temp.push(tempCase);
                }
            }

            setCases(temp);
        }
        getCases();

    }, [gameId]);

    const displayPossibilities = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        let caseId: string = e.currentTarget.id;
        if (cases != undefined && cases[stringToIntId(caseId)].piece != null  )  {
            movePiece(cases[stringToIntId(caseId)].piece, cases);
            const newList: Case[] = cases.map((item) => {
                return item;
            });
            setCases(newList);
        }
    }


    return (
        <table className={classes.root}>
            {cases !== undefined && 

                <tbody>
                    {cases.map(function (value, index) {
                        return (
                            <span key={index}>

                                <Button key={value.caseIdInt}
                                    id={value.caseIdString}
                                    className={value.isIlluminated  ? classes.selectedButton : (value.isWhite ? classes.whiteButton : classes.blackButton)}
                                    onClick={displayPossibilities}>
                                    {value.piece != null &&
                                        <Icon color="primary" aria-label="upload picture" component="span" className={classes.imageIcon}>
                                        <img src={require(`${value.piece.logo}`)} />
                                        </Icon>
                                    }
                                </Button>
                                {index % 8 == 7 && <br />}
                            </span>
                        );
                    })}
  
              </tbody>        
            }
        </table>

    );
};

export default ChessBoard