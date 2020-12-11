import React from 'react';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardContent,
  makeStyles,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
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
              variant="h2"
            >
              Factores que están Influyendo en la deserción estudiantil
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Toolbar;
