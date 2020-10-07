import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar, Radar } from 'react-chartjs-2';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  colors
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles(() => ({
  root: {}
}));

const GraficaMaterias = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  const data = {
    datasets: [
      {
        backgroundColor: colors.indigo[200],
        data: [18, 5, 19, 27, 29, 19, 20],
        label: 'Ciencia Basica'
      },
      {
        backgroundColor: colors.orange[200],
        data: [11, 20, 12, 29, 30, 25, 13],
        label: 'Algoritmia'
      },
      {
        backgroundColor: colors.red[200],
        data: [11, 20, 12, 29, 40, 25, 13],
        label: 'Optativas'
      }
    ],
    labels: ['Nivel 1', 'Nivel 2', 'Nivel 3', 'Nivel 4', 'Nivel 5','Nivel 6']
  };

  const options = {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: ''
    },
    scale: {
      reverse: false,
      gridLines: {
        color: [
          'black',
          'red',
          'orange',
          'yellow',
          'green',
          'blue',
          'indigo',
          'violet'
        ]
      },
      ticks: {
        beginAtZero: true
      }
    }
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        action={(
          <Button
            endIcon={<ArrowDropDownIcon />}
            size="small"
            variant="text"
          >
            2020-2
          </Button>
        )}
        title="Evolución de riesgo x nivel semestre actual"
      />
      <Divider />
      <CardContent>
        <Box
          height={400}
          position="relative"
        >
          <Radar
            data={data}
            options={options}
          />
        </Box>
      </CardContent>
      <Divider />
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          Ver Detalle
        </Button>
      </Box>
    </Card>
  );
};

GraficaMaterias.propTypes = {
  className: PropTypes.string
};

export default GraficaMaterias;
