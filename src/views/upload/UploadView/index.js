import axios from 'axios';
import React, { useState } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Upload from './Upload';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

function UploadView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Upload Files">
      <Container maxWidth={false}>

        <Upload/>

      </Container>
    </Page>
  );
}

export default UploadView;
