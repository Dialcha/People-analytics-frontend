import React, { useState, useEffect, useCallback } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import DownloadResults from './DownloadResults';
import DownloadTwo from './DownloadTwo';
import data from './data';
import data2 from './data2';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const DownloadView = () => {
  const classes = useStyles();
  const [customers] = useState(data);
  
  return (
    <Page className={classes.root} title="Customers">
      <Container maxWidth={false}>
        <Box mt={3}>
          <DownloadTwo customers={customers}/>
        </Box>
      </Container>
    </Page>
  );
};

export default DownloadView;
