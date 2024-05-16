import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Facebook, GitHub, Instagram, Twitter } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { IRegister } from "../../types/app";
import { Register } from "../../lib/api/call/register";
import React from "react";

const RegisterForm = () => {
    const [formRegister, setFormRegister] = React.useState<IRegister>({
        username: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormRegister({
            ...formRegister,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (): Promise<void> => {
        try {
            await Register(formRegister);
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Box display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{
                paddingTop: 0.9,
                paddingBottom: 4,
                marginTop: 4,
            }}
            my={0.1}>
            <h2 style={{ marginBottom: 15 }}>Sign up now</h2>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Username"
                        size="small"
                        variant="outlined"
                        type="text"
                        sx={{
                            marginBottom: 2,
                            width: '100%',
                        }}
                        name="username"
                        value={formRegister.username}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Email"
                        size="small"
                        variant="outlined"
                        sx={{
                            marginBottom: 2,
                            width: '100%',
                        }}
                        type="email"
                        name="email"
                        value={formRegister.email}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Password"
                        size="small"
                        variant="outlined"
                        sx={{
                            marginBottom: 2,
                            width: '100%',
                        }}
                        type="password"
                        name="password"
                        value={formRegister.password}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="flex-end">
                    <Typography variant="body2" color="initial">
                        <Box onClick={() => navigate('/login')} sx={{ cursor: 'pointer' }}>
                            Login
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
                        onClick={handleSubmit}
                    >
                        Sign Up
                    </Button>
                </Grid>
            </Grid>
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

export default RegisterForm;
