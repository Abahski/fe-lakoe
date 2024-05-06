
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles';
import { Facebook, GitHub, Instagram, Twitter } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      paddingTop: theme.spacing(0.9),
      paddingBottom: theme.spacing(4),
      marginTop: theme.spacing(4),  
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
      marginRight: theme.spacing(0),
    },
    image: {
      width: '100%',
      borderRadius: theme.spacing(2),
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    },
  }));

const LoginForm = () => {
    const classes = useStyles();
    const navigate = useNavigate()
    return (
        <Box display={'flex'} 
            flexDirection={'column'} 
            className={classes.root}
            alignItems={'center'}
            my={0.1}>
            <h2 className="fw-bold mb-4">Sign in now</h2>
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
                    <Grid item xs={12} 
                        display={'flex'} justifyContent={'flex-end'}>
                        <Typography variant="body2" color="initial ">
                            <Box onClick={() => navigate('/register')}
                                sx={{cursor: 'pointer'}}
                                >
                                Register
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
                        Sign In
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <Box className="mt-3" my={3}>
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

export default LoginForm
