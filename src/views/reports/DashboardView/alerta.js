import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function DescriptionAlerts() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        El <strong>60% </strong>de sus estudiantes está en riesgo de Deserción  — <strong>Tome acciones rápidamente!</strong>
      </Alert>
      
    </div>
  );
}