import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import { makeStyles } from '@material-ui/core/styles';
import { Facebook, GitHub, Instagram, Twitter } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      paddingTop: theme.spacing(0.9),
      paddingBottom: theme.spacing(4),
      marginTop: theme.spacing(4),  
    },
    card: {
      backdropFilter: 'blur(30px)',
      padding: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    },
    formInput: {
      marginBottom: theme.spacing(2), 
      width: '100%',
    },
    image: {
      width: '100%',
      borderRadius: theme.spacing(2),
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    },
  }));
const RegisterForm = () => {
    const navigate = useNavigate()
    const classes = useStyles();
    return (
        <Box display={'flex'} 
            flexDirection={'column'} 
            alignItems={'center'}
            className={classes.root}
            my={0.1}>
            <h2 className="fw-bold mb-4">Sign up now</h2>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                        fullWidth
                        label="First name"
                        size='small'
                        variant="outlined"
                        className={classes.formInput}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        fullWidth
                        label="Last name"
                        size='small'
                        variant="outlined"
                        className={classes.formInput}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        fullWidth
                        label="Email address"
                        variant="outlined"
                        size='small'
                        className={classes.formInput}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        fullWidth
                        type="password"
                        label="Password"
                        size='small'
                        variant="outlined"
                        className={classes.formInput}
                        />
                    </Grid>
                    <Grid item xs={12} 
                        display={'flex'} justifyContent={'flex-end'}>
                        <Typography variant="body2" color="initial ">
                            <Box onClick={() => navigate('/login')}
                                sx={{cursor: 'pointer'}}
                                >
                                Login
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            className={classes.formInput}
                        >
                         Sign Up
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <Box className="mt-3" my={1}>
                <Button>
                    <Facebook />
                </Button>
                <Button>
                    <Instagram />
                </Button>
                <Button>
                    <Twitter />
                </Button>
                <Button>
                    <GitHub />
                </Button>
            </Box>
        </Box>
    )
}

export default RegisterForm
