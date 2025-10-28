import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled, GlobalStyles} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
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

const FacebookIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

const SitemarkIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="#1976d2" />
        <path d="M16 8v16M8 16h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
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

export default function CreateAccount() {
    const [nameError, setNameError] = React.useState(false);
    const [nameErrorMessage, setNameErrorMessage] = React.useState('');
    const [name, setName] = React.useState('');

    const theme = createTheme({
        palette: {
            mode: 'light',
        },
    });

    const validateName = () => {

        let isValid = true;

        if (!name || name.trim() === " ") {
            setNameError(true);
            setNameErrorMessage('Enter first name');
            isValid = false;
        } else {
            setNameError(false);
            setNameErrorMessage("");
        }

        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateName()) {
            return;
        }
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('name'),
            surname: data.get('surname')
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
                        Create a Google account
                    </Typography>
                    <Typography>
                        Enter your name
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                    >

                        <Box sx={{ width: 500, maxWidth: '100%' }}>
                            <TextField 
                            fullWidth 
                            label="First name" 
                            id="name" 
                            value={name} 
                            onChange={(e) => setName (e.target.value)}
                            error= {nameError}
                            helperText={nameErrorMessage}
                            />
                        </Box>
                        <Box sx={{ width: 500, maxWidth: '100%' }}>
                            <TextField fullWidth label="Surname (optional)"  id="surname" />
                        </Box>         
                        <Box sx={{display:'flex', justifyContent:'space-between'}}>
                        <Button id='next-btn'
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