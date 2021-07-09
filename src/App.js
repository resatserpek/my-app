import React from 'react';
import './App.css';
import SimpleTabs from './components/tabpanel/TabPanel'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImageAvatars from './components/avatar/ImageAvatars';
import Typography from '@material-ui/core/Typography';

import Links from './components/links/Links';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {

  const classes = useStyles();


  return (
    <div className="App">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Container>
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <ImageAvatars></ImageAvatars>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="h2" gutterBottom>
                      Kurt Cobain
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Kurt Cobain, in full Kurt Donald Cobain, (born February 20, 1967, Aberdeen, Washington, U.S.—died April 5, 1994, Seattle, Washington), American rock musician who rose to fame as the lead singer, guitarist, and primary songwriter for the seminal grunge band Nirvana.
                    </Typography>
                  </Grid>
                </Grid>
              </Container>



            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Links></Links>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <Container>
                <SimpleTabs ></SimpleTabs>
              </Container>
            </Paper>
          </Grid>

        </Grid>
      </Container>






    </div>
  );
}

export default App;
