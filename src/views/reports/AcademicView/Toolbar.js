import React from 'react';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardContent,
  makeStyles,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box mt={3}>
        <Card>
          <CardContent>
            
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h1"
            >
              Factores Académicos
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Toolbar;
