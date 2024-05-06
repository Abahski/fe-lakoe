import { Container, Grid, Card, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LoginForm from './components/loginForm';
import { Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(0),  
  },
  card: {
    backdropFilter: 'blur(30px)',
    padding: theme.spacing(2),
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  },
  formInput: {
    marginBottom: theme.spacing(2), 
    width: '100%',
  },
  socialButton: {
    marginRight: theme.spacing(1),
  },
  image: {
    width: '100%',
    height: '60vh',
    borderRadius: theme.spacing(2),
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Box my={3} mt={10}>
      <section className={classes.root}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            {/* Form Register */}
              <Grid item lg={4}>
                <Card  className={classes.card}>
                  <LoginForm />
                </Card>
              </Grid>
            {/* End Form Register */}
            <Grid item lg={1}></Grid>
            {/* Image Register */}
              <Grid item lg={6}>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  alt=""
                  className={classes.image}
                />
              </Grid>
            {/* End Image Register */}
          </Grid>
        </Container>
      </section>

    </Box>
  );
};

export default Login;
