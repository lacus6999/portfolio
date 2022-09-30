import {Container, createTheme} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import NavBar from "./NavBar";

const theme = createTheme({
        components: {
            MuiButton: {
                defaultProps: {
                    variant: 'contained'
                }
            }
        }
    }
);
const styles = {
    backgroundColor: '#000',
    maxWidth: '80%',
    justifyContent: 'center',
    padding: 25,
    display: 'flex',
    flexDirection: 'column'
}

const AppFrame = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <Container disableGutters={true} style={styles}>
                <NavBar/>
                {children}
            </Container>
        </ThemeProvider>
    );
};

export default AppFrame;

