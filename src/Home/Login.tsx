import { Container } from '@mui/system';
import LoginForm from './components/loginForm';
import { Box, Card, Grid } from '@mui/material';

const Login = () => {
  return (
    <>
      <Box my={3} mt={10}>
        <section style={{ paddingTop: 0.9, paddingBottom: 4, marginTop: 4 }}>
          <Container>
            <Grid container spacing={3} alignItems="center">
              <Grid item lg={4}>
                <Card sx={{ backdropFilter: 'blur(30px)', padding: 3, width: "100%" }}>
                  <LoginForm />
                </Card>
              </Grid>
              <Grid item lg={1}></Grid>
              <Grid item lg={6}>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  alt=""
                  style={{ width: '100%', borderRadius: 2, boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}
                />
              </Grid>
            </Grid>
          </Container>
        </section>
      </Box>
    </>
  );
};

export default Login;

