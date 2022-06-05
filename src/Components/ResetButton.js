import { Paper, Button } from "@mui/material";
import Typography from "@mui/material/node/Typography";

function ResetButton(props){
    return(
        <Paper sx={{backgroundColor: "#6495ed"}}>
            <Button onClick={props.onClick} fullWidth={true} color={"inherit"} sx={{textTransform:"capitalize"}}>
                <Typography fontSize={30}>
                    {props.buttonText}
                </Typography>
            </Button>
        </Paper>
    );
}

export default ResetButton;