import React from 'react';
import { useNavigate } from 'react-router-dom';
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

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const LoginView = () => {
  const { loginWithRedirect } = useAuth0();
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Page className={classes.root} title="Login">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Box mb={3}>
            <Typography color="textPrimary" variant="h2">
              Bienvenido
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="body2">
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
