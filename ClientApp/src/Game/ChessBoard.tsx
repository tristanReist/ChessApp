import * as React from 'react';

import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Case } from "../Models/Case";
import { Button } from '@material-ui/core';
import { SvgIcon } from "@material-ui/core";
import { ReactComponent as Logo } from "./Icons/WhitePawn.svg";

const useStyles = makeStyles((theme) => ({
    root: {
        position:"absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    whiteButton: {
        backgroundColor: "white",
        maxWidth: '10vh',
        minWidth: '10vh',
        maxHeight: '10vh',
        minHeight: '10vh',
        textAlign: 'center'
    },
    blackButton: {
        backgroundColor: "black",
        maxWidth: '10vh',
        minWidth: '10vh',
        maxHeight: '10vh',
        minHeight: '10vh',
    },
    imageIcon: {
        display: 'flex',
        height: 'inherit',
        width: 'inherit'
    },
    iconRoot: {
        textAlign: 'center'
    }
}));


interface ChessBoardProps {
    gameId: string;
}


const ChessBoard = (props: ChessBoardProps) => {
    const classes = useStyles();
    const gameId: string = props.gameId;
    const [cases, setCases] = React.useState<Case[] | undefined>();

    const getCases = async () => {
        const result = await axios.get<Case[]>("game/getCasesInformation", { params: { gameId } });
        //Remap the solutions so that it is as in a chess board
        let temp : Case[] = [];
        for (let i = 7; i >= 0; i--) {
            for (let j = 0; j < 8; j++) {
                temp.push(result.data[i * 8 + j]);
            }
        }
        setCases(temp);
    }
    getCases();

    return (
        <table className={classes.root}>
            {cases !== undefined && 

                <tbody>
                    {cases.map(function (value, index) {
                        return (
                            <span key={index}>
                                <Button key={value.caseIdString} id={value.caseIdString} className={value.isWhite ? classes.whiteButton : classes.blackButton}>
                                    <SvgIcon className={classes.iconRoot}>
                                        <Logo className={classes.imageIcon} />
                                    </SvgIcon>
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