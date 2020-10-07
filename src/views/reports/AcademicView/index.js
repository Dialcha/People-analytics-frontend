import React from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';
import GraficaMaterias from './GraficaMaterias';
import DistribucionMats from './DistribucionMats';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));


/***/



/** */

const Academic = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Factores académicos">
      <Container maxWidth={false}>
        <Toolbar />
      </Container>
      <br />
      <Container maxWidth={false}>
        <Grid container spacing={3}>
        <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <GraficaMaterias />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <DistribucionMats />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Academic;
