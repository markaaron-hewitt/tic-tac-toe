import { Grid, Typography, Paper, Button } from "@mui/material";

function GameGrid(props){

    const displayDict = {0:"",1:"X",2:"O"};

    GameGrid = (
        <Paper sx={{backgroundColor: "cyan"}}>
            <Grid container spacing={0} padding={0}>
                {props.gameState.map((val,index) =>
                    <Grid item key={"button"+(index+1)} xs={4}>
                        <Paper elevation={2}>
                            <Button 
                                style={{ height: 100 }}
                                onClick={() => props.btnPress(index)}
                                fullWidth={true}
                                variant={"outlined"}
                                disabled={val!=0 || props.gameOver } 
                                color={"inherit"}>
                                    <Typography fontSize={40} fontWeight={700}>
                                        {displayDict[val]}
                                    </Typography>
                            </Button>
                        </Paper>
                    </Grid>
                )}
            </Grid>
        </Paper>
    );

    return GameGrid;
}

export default GameGrid;