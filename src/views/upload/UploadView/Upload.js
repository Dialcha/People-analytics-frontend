import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
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
  makeStyles
} from '@material-ui/core';

const states = [
  {
    value: 'udea',
    label: 'Universidad de Antioquia'
  },
  {
    value: 'univalle',
    label: 'Universidad del Valle'
  },
  {
    value: 'icesi',
    label: 'Universidad ICESI'
  }
];

const useStyles = makeStyles(() => ({
  root: {},
  input: {
    display: 'none'
  }
}));

const Upload = ({ className, ...rest }) => {
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
      const formData = new FormData();
      formData.append('image', values['archivo'][0]);
      await axios.post(`http://AntivirusBackend-env.eba-hfkhj7p2.us-east-2.elasticbeanstalk.com/api/v1/data-upload`, formData, {
        headers: {
          'enctype': 'multipart/form-data'
        }
      }).then(res => {
        Swal.fire(
          'Buen trabajo!',
          'Archivo para predicción cargado correctamente',
          'success'
        )
      });
      // handle success
    } catch (error) {
      // handle error
    }
  };

  return (
    <form
      autoComplete="off"
      noValidate
      method='POST'
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
              <TextField
                fullWidth
                label="Seleccione universidad"
                name="universidad"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.universidad}
                variant="outlined"
              >
                {states.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>

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
