import {Grid, Typography} from "@mui/material";

const styles = {
    backgroundColor: '#000',
    maxWidth: '80%',
    justifyContent: 'center',
    padding: 25,
    display: 'flex',
}

const NavBar = () => {
    return (
        <Grid style={styles}>
            <Typography>
                kacsa
            </Typography>
            <Typography>
                SOOOK kacsa
            </Typography>

        </Grid>
    );
};

export default NavBar;

