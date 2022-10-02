import {Grid} from "@mui/material";

const styles = {
    backgroundColor: '#000',
    maxWidth: '80%',
    justifyContent: 'center',
    padding: 25,
    display: 'flex',
    color: 'red'
}

const NavBar = () => {
    return (
        <Grid flexDirection={"column"} style={styles} >
            <Grid item>
                kacsa
            </Grid>
            <Grid item>
                SOOOK kacsa
            </Grid>

        </Grid>
    );
};

export default NavBar;

