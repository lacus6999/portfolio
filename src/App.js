import './App.css';
import {Button, Grid} from "@mui/material";
import AppFrame from "./components/AppFrame";

function App() {
    return (
        <AppFrame>
            <Grid container>
                <Grid item>
                    <Button >Hello World</Button>
                </Grid>
            </Grid>
        </AppFrame>
    );
}

export default App;
