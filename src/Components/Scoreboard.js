import { Typography, Paper, Grid } from "@mui/material";

function Scoreboard(props) {
    return (
        <Paper height={300} sx={{backgroundColor: "green", height:"100%", paddingBottom:"5"}}>
            <Grid container height="100%" padding = {8} spacing = {0} flexWrap={"wrap"} justifyContent={"center"} alignContent={"space-around"}>
                <Grid item xs={12}>
                    <Typography fontSize={30}>
                        Player {props.player}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography fontSize={30}>
                        Score: {props.score}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Scoreboard;