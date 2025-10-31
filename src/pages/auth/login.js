import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled, GlobalStyles} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link as RouterLink} from "react-router-dom";
import "./style.css"

// Simple icons as SVG components
const GoogleIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18">
        <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z" />
        <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z" />
        <path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z" />
        <path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z" />
    </svg>
);


const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    [theme.breakpoints.up('sm')]: {
        width: '450px',
    },
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
    height: '100vh',
    minHeight: '100%',
    padding: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(0),
    },
    backgroundImage:
        'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
}));

export default function Login() {

    const theme = createTheme({
        palette: {
            mode: 'light',
        },
    });

    const validateInputs = () => {
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const name = document.getElementById('name');

        let isValid = true;

        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage('Please enter a valid email address.');
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }

        if (!password.value || password.value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage('Password must be at least 6 characters long.');
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }

        if (!name.value || name.value.length < 1) {
            setNameError(true);
            setNameErrorMessage('Name is required.');
            isValid = false;
        } else {
            setNameError(false);
            setNameErrorMessage('');
        }

        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateInputs()) {
            return;
        }
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
        });
        // Add your signup logic here
    };

    return (<>
        <GlobalStyles styles={{
            html: {margin:0, padding:0, height:'100%'},
            body: {margin:0, padding:0, height:'100%'},
            '#root':{height:'100%'}
            }}/>
        <ThemeProvider theme={theme}>

            <CssBaseline />
            <SignUpContainer direction="column" justifyContent="space-between">
                <Card variant="outlined" sx={{width:'100vw', height:'100vh', margin:0}}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1}}>
                        <GoogleIcon/>
                    </Box>
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
                    >
                        Sign up
                    </Typography>
                    <Typography>
                        with your Google Account to continue to YouTube. This account will be available to other Google apps in the browser.
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                    >

                        <Box sx={{ width: 500, maxWidth: '100%' }}>
                            <TextField fullWidth label="Email or phone" id="fullWidth" />
                        </Box>
                        <Typography>
                            <Link sx={{textDecoration: 'none'}}>
                                Forgot email?
                            </Link>
                        </Typography>
                        <Typography>
                            Not your computer? Use Guest mode to sign in privately.<Link sx={{textDecoration:'none'}}> Learn more about using Guest mode </Link>
                        </Typography>
                        
                        <Box sx={{display:'flex', justifyContent:'space-between'}}>
                        <Typography>
                            <Link
                            component={RouterLink}
                            to="/create-account" 
                            sx={{textDecoration:'none'}}>Create account</Link>
                        </Typography>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{borderRadius:30}}
                        >
                            Next
                        </Button>
                        </Box>
                    </Box>
                </Card>
            </SignUpContainer>
        </ThemeProvider>
        </>
    );
}