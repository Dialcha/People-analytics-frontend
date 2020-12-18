import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import axios from 'axios';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles,
  Link,
  LinearProgress,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';

const states = [
  {
    value: 'uniajc',
    label: 'IU Antonio José Camacho'
  },
  {
    value: 'usbcali',
    label: 'Universidad San Buenaventura - Cali'
  },
];

const useStyles = makeStyles(theme => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const DownloadTwo = ({ className, customers, ...rest }) => {
  const classes = useStyles();
  // paginación
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const [values, setValues] = useState({
    bucketUni: 'uniajc',
  });

  const [bucketName, setBucketName] = useState(states[0].value)

  const handleChange = event => {
    console.log(event.target.value)
    setBucketName(event.target.value)
    console.log('estado: ', bucketName)
  };

  let [responseData, setResponseData] = useState('');

  const fetchData = async (bucket) => {
    setResponseData('')
    await axios({
      method: 'post',
      url:
        'https://zey12u6qr8.execute-api.us-east-1.amazonaws.com/version-prueba',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: {
        nombre_ies: bucket
      }
    })
      .then(res => {
        setResponseData(res.data.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchData(bucketName);
  }, [bucketName]);

  const handleLimitChange = event => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <Card>
        <CardHeader
          title="Consulta de predicciones"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                label="Seleccione universidad"
                name="universidad"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={bucketName}
                variant="outlined"
              >
                {states.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>

          </Grid>
        </CardContent>
      </Card>
      <br></br>
    <Card className={clsx(classes.root, className)} {...rest}>
      {responseData === '' ? (
        <>
          <CardHeader
            subheader="los reportes generados podrán ser visualizados en breve."
            title="Cargando reportes"
          />
          <Divider />
          <CardContent>
            <LinearProgress />
            <LinearProgress color="secondary" />
          </CardContent>
        </>
      ) : (
        <>
          <CardHeader
            subheader="Estos son los reportes de predicciones que su institución ha generado."
            title="Reportes"
          />
          <Divider />
          <CardContent>
            <PerfectScrollbar>
              <Box minWidth={1050}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Archivo</TableCell>
                      <TableCell>Link de descarga</TableCell>
                      <TableCell>Fecha de generación de reporte</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {responseData.slice(0, limit).map(link => (
                      <TableRow hover key={link.date}>
                        <TableCell>
                          <Box alignItems="center" display="flex">
                            <Typography color="textPrimary" variant="body1">
                              {link.file_name}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box alignItems="center" display="flex">
                            <Typography color="textPrimary" variant="body1">
                              <Link href={link.url}>Descargar</Link>
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box alignItems="center" display="flex">
                            <Typography color="textPrimary" variant="body1">
                              {link.date}
                            </Typography>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </PerfectScrollbar>
            <TablePagination
              component="div"
              count={responseData.length}
              onChangePage={handlePageChange}
              onChangeRowsPerPage={handleLimitChange}
              page={page}
              rowsPerPage={limit}
              rowsPerPageOptions={[5, 10, 25]}
            />
          </CardContent>
        </>
      )}
    </Card>
    </div>
  );
};

DownloadTwo.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired
};

export default DownloadTwo;
