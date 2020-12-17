import React from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import logo from '../../assets/logo.png';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import { useAuth0 } from '@auth0/auth0-react';
import backgroundvid from '../../assets/videobackground.mp4';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    
  },
}));

const LoginView = () => {
  const { loginWithRedirect } = useAuth0();
  const classes = useStyles();
  const navigate = useNavigate();

  return (
   
    <Page className={classes.root} title="Login">
        <video autoPlay loop muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top:"50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zindex:"-1",
          }}
        >
    <source src={backgroundvid} type="video/mp4" />
     </video>
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
        mx="auto"
        
      >
        
        <Container maxWidth="sm" justifyContent="center">
          
          <Box mb={3}
          
          justifyContent= "center"
          position="relative"
          color= "white"
          >  <Avatar alt="logo" src={logo} className={classes.large} />
            <Typography color="text.primary" variant="h1" >
              Bienvenido
            </Typography>
            <Typography color="text.secondary" gutterBottom variant="body2">
              Inicia sesión en la plataforma de people analytics
            </Typography>
          </Box>

          <Box my={2}>
            <Button
              color="primary"
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              onClick={() => loginWithRedirect()}
            >
              Ingresar
            </Button>
          </Box>
          

        </Container>
        
      </Box>
    </Page>
  );
};

export default LoginView;
