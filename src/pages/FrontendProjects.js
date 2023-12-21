import React from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Button} from 'reactstrap'
import tictactoe from '../assets/TicTacToe.ss.png'
import piglatin from '../assets/PigLatin.ss.png'
import { NavLink } from "react-router-dom"
import Header1 from "../pages/Header1"

const Frontend = () => {
    return(
       <>
       <Header1/>
       <body id="home">
        <h1 id="title">Front End Projects </h1>
        <div id="projectCards">
            <Card
                style={{
                    width: '18rem'
                }}
            >
                <img
                    alt="Screenshot of Tic Tac Toe game"
                    src={tictactoe}
                />
                <CardBody>
                    <CardTitle tag="h5">
                    Tic Tac Toe
                    </CardTitle>
                    <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                    >
                    Language: React.js
                    </CardSubtitle>
                    <CardText>
                    Tic-tac-toe is a simple, two-player game played on a 3x3 grid. Players take turns marking either an "X" or an "O" in empty squares. The goal is to get three of your marks in a row, either horizontally, vertically, or diagonally, before your opponent does.
                    </CardText>
                    <NavLink to="https://tic-tac-toe-blnf.onrender.com/" target="_blank">
                        <Button >
                        Click Here to Play!
                        </Button>
                    </NavLink>
                </CardBody>
                </Card>
            <Card
                style={{
                    width: '18rem'
                }}
            >
                <img
                    alt="Screenshot of Pig Latin App"
                    src={piglatin}
                />
                <CardBody>
                    <CardTitle tag="h5">
                    Pig Latin
                    </CardTitle>
                    <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                    >
                    Language: React.js
                    </CardSubtitle>
                    <CardText>       
                        Pig Latin is a language game where words are altered according to a set of rules. In Pig Latin, to translate a word into Pig Latin, you typically move the first consonant or consonant cluster of a word to the end of the word and add "ay." If a word starts with a vowel, you simply add "way" or "ay" at the end. 
                    </CardText>
                    <NavLink to="https://pig-latin-crying-pigs.onrender.com/" target="_blank">
                        <Button >
                        Click Here to Play!
                        </Button>
                    </NavLink>
                </CardBody>
            </Card>
        </div>
       </body>
       </> 
    )
}

export default Frontend