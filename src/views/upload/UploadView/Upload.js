import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles,
  Typography
} from '@material-ui/core';

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import config from 'src/auth_config.json';

const useStyles = makeStyles(() => ({
  root: {},
  input: {
    display: 'none'
  }
}));

const Upload = ({ className, ...rest }) => {
  //Obtener metadata

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  //
  let prefix_u = '';
  const [userMetadata, setUserMetadata] = useState(null);

  if (userMetadata) {
    prefix_u = userMetadata.u_prefix;
    console.log('prueba adentro prefix_u: ', prefix_u);
  }

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = config.domain;

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: 'read:current_user'
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, []);

  //
  if (userMetadata) {
    console.log('prueba: ', JSON.stringify(userMetadata.u_prefix, null, 2));
  }

  console.log('uuser: ', user);

  //
  const classes = useStyles();
  const [values, setValues] = useState({
    universidad: 'udea',
    archivo: null
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleChangeFile = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.files
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      if (!values['archivo']) {
        throw new Error('Secciona un archivo primero');
      }
      //
      if (prefix_u.length > 0 && userMetadata) {
        console.log(
          'prueba adentro para enviar a bucket: ',
          userMetadata.u_prefix
        );

        const formData = new FormData();
        formData.append('bucketName', prefix_u);
        formData.append('data', values['archivo'][0]);
        console.log('el archivo: ', values['archivo'][0]);
        await axios
          .post('http://localhost:8080/api/v1/data-upload', formData, {
            headers: {
              enctype: 'multipart/form-data'
            }
          })
          .then(res => {
            Swal.fire(
              'Buen trabajo!',
              'Archivo para predicción cargado correctamente',
              'success'
            );
          });
      }

      //

      // handle success
    } catch (error) {
      // handle error
    }
  };

  return (
    <form
      autoComplete="off"
      noValidate
      method="POST"
      onSubmit={handleSubmit}
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          subheader="Para predicciones del modelo"
          title="Carga de archivos"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <input
                required
                accept=".csv"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                name="archivo"
                onChange={handleChangeFile}
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                  Seleccione el archivo
                </Button>
              </label>
            </Grid>

            <Grid item md={6} xs={12}>
              {values['archivo'] === null ? (
                <Typography color="textPrimary" variant="body1">
                  No ha seleccionado ningún archivo
                </Typography>
              ) : (
                <Typography color="textPrimary" variant="body1">
                  Archivo a cargar: {values['archivo'][0].name}
                </Typography>
              )}
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            value="Submit"
          >
            Enviar CSV
          </Button>
        </Box>
      </Card>
    </form>
  );
};

Upload.propTypes = {
  className: PropTypes.string
};

export default Upload;
