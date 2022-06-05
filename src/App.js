import { Grid, Typography, Paper} from "@mui/material";
import './App.css';
import Scoreboard from "./Components/Scoreboard.js";
import GameGrid from "./Components/GameGrid.js";
import ResetButton from "./Components/ResetButton.js";
import { useState } from 'react';

function App() {

  var pageHeight = window.innerHeight;
  const [gameState,setgameState] = useState([ 0,0,0,
                                              0,0,0,
                                              0,0,0]);
  const [p1Score,setp1Score] = useState(0);
  const [p2Score,setp2Score] = useState(0);
  const [turn,setTurn] = useState(1);
  const [starter,setStarter] = useState(1);
  const [gameOver,setgameOver] = useState(false);

  const winStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  const newGame = () => {
    if (starter == 1){
      setStarter(2);
      setTurn(2);
    }
    else{
      setStarter(1);
      setTurn(1);
    }
    setgameOver(false);
    setgameState([  0,0,0,
                    0,0,0,
                    0,0,0]);
  };

  const resetScores = () => {
    setp1Score(0);
    setp2Score(0);
  };

  const p1Win = () => {
    setp1Score(p1Score+1);
    setgameOver(true);
  };

  const p2Win = () => {
    setp2Score(p2Score+1);
    setgameOver(true);
  };

  const checkWin = (newGameState) => {
    for (let i=0; i<winStates.length; i++){
      if (newGameState[winStates[i][0]]==1 && newGameState[winStates[i][1]]==1 && newGameState[winStates[i][2]]==1){
        p1Win();
        return 1;
      }else if (newGameState[winStates[i][0]]==2 && newGameState[winStates[i][1]]==2 && newGameState[winStates[i][2]]==2){
        p2Win();
        return 2;
      }
    }
    return 0;
  };

  const btnPress = (i) => {
    var newGameState = [...gameState];
    if (turn == 1){
      newGameState[i] = 1;
      setTurn(2);
    }
    else {
      newGameState[i] = 2;
      setTurn(1);
    }
    setgameState(newGameState);
    checkWin(newGameState);
  };

  return (
    <Grid container spacing = {0} sx={{backgroundColor: "#afeeee"}} height={pageHeight}>
      <Grid container padding = {5} spacing = {5} justifyContent={"center"} align={"center"} flexWrap={"wrap"} alignContent={"space-around"}>

        <Grid item xs={12}>
          <Paper sx={{backgroundColor: "cyan"}}>
            <Typography fontSize={45}>
              Tic Tac Toe
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Scoreboard player={1} score={p1Score}/>
        </Grid>
        <Grid item xs={6}>
          <GameGrid gameState={gameState} btnPress={btnPress} gameOver={gameOver}/>
        </Grid>
        <Grid item xs={3}>
          <Scoreboard player={2} score={p2Score} />
        </Grid>
        
        <Grid item xs={3}/>
        <Grid item xs={3}>
          <ResetButton buttonText="new game" onClick={newGame}/>
        </Grid>
        <Grid item xs={3}>
          <ResetButton buttonText="reset scores" onClick={resetScores}/>
        </Grid>
        <Grid item xs={3}/>

      </Grid>
    </Grid>
  );
}

export default App;
