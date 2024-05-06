
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { Facebook, GitHub, Instagram, Twitter } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';



const LoginForm = () => {
    const navigate = useNavigate()
    return (
        <Box display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            sx={{
                paddingTop: 0.9,
                paddingBottom: 4,
                marginTop: 4,
            }}
            my={0.1}>
            <h2 style={{ marginBottom: 15 }}>Sign in now</h2>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="First name"
                            size='small'
                            variant="outlined"
                            sx={{
                                marginBottom: 2,
                                width: '100%',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Last name"
                            size='small'
                            variant="outlined"
                            sx={{
                                marginBottom: 2,
                                width: '100%',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}
                        display={'flex'} justifyContent={'flex-end'}>
                        <Typography variant="body2" color="initial ">
                            <Box onClick={() => navigate('/register')}
                                sx={{ cursor: 'pointer' }}
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
                            sx={{
                                marginBottom: 2,
                                width: '100%',
                            }}
                        >
                            Sign In
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

export default LoginForm
