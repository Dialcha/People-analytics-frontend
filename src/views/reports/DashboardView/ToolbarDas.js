import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardContent,
  makeStyles,
  Typography
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

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
