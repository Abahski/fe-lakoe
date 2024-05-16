import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Facebook, GitHub, Instagram, Twitter } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { loginApi } from '../../lib/api/call/login';
// import { useAppDispatch } from '../../store';
// import { loginAsync } from '../../store/async/auth';

const LoginForm = () => {
    // const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [formInput, setFormInput] = useState<{ email: string; password: string }>({
        email: '',
        password: ''
    });

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await loginApi({ email: formInput.email, password: formInput.password })

        } catch (error) {
            console.log(error);
        }
    };

  

    return (
        <Box display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            sx={{
                paddingTop: 0.9,
                paddingBottom: 4,
                marginTop: 4,
            }}
            my={0.1} >
            <h2 style={{ marginBottom: 15 }}>Sign in now</h2>
            <form onSubmit={handleLogin}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Email"
                            size='small'
                            variant="outlined"
                            sx={{
                                marginBottom: 2,
                                width: '100%',
                            }}
                            value={formInput.email}
                            onChange={(e) => setFormInput({ ...formInput, email: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Password"
                            size='small'
                            variant="outlined"
                            sx={{
                                marginBottom: 2,
                                width: '100%',
                            }}
                            type="password"
                            value={formInput.password}
                            onChange={(e) => setFormInput({ ...formInput, password: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12} display={'flex'} justifyContent={'flex-end'}>
                        <Typography variant="body2" color="initial">
                            <Box onClick={() => navigate('/register')} sx={{ cursor: 'pointer' }}>
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
                            type="submit"

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
    );
};

export default LoginForm;
