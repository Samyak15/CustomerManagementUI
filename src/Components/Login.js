import React, {useState} from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility,VisibilityOff } from "@mui/icons-material";
import "./Login.css";
import { loginApi } from "../Apis";

function Login(props) {
  let [showPassword, setShowPassword] = useState(false);
  let [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  let {setTokenPresent} = props;

  const onFormSubmit = async () => {
    await loginApi(credentials.username, credentials.password);
    setTokenPresent(true);
  };
  return (
    <Box className="LoginBox centered" container>
      <h1>Login</h1>
      <Grid item={true} mb={4}>
        <Grid item={true}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Email
          </Typography>
          <TextField
            className="textfield"
            id="email"
            label="Enter your email"
            variant="filled"
            sx={{ label: { color: "black" } }}
            onChange={(e) => setCredentials((st) => {return {...st, username: e.target.value}})}
            value={credentials.username}
          />
        </Grid>
        <Grid item={true}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Password
          </Typography>
          <TextField
            className="textfield"
            type={showPassword? 'text' : 'password'}
            id="password"
            label="Enter the Password"
            variant="filled"
            sx={{ label: { color: "black" } }}
            onChange={(e) => setCredentials((st) => {return {...st, password: e.target.value}})}
            value={credentials.password}
            InputProps = {{ endAdornment:
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((state) => !state)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              
            }}
          />
      </Grid>
      <Grid
        container
        mb={3}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button
          variant="contained"
          sx={{ marginTop: "20px", width: "40%" }}
          onClick={onFormSubmit}
        >
          Login
        </Button>
      </Grid>
      </Grid> 
    </Box>
  );
}

export default Login;
