import * as React from "react";
import { useState,useEffect,useContext } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { StoreContext } from "../../context/storeContext";
import axios from "axios";

const LoginSignUp = ({ setShowLogin }) => {

  const {url,setToken} = useContext(StoreContext)
  const [currentState, setCuurentState] = useState("Sign up");
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({...data,[name]:value}))
  }

  // useEffect(() => {
  //   console.log(data);
  // },[data])

  const onLogin = async (e) => {
    e.preventDefault()
    let newUrl = url;
    if (currentState === "Login") {
      newUrl += "/api/user/login"
    }
    else{
      newUrl += "/api/user/register"
    }

    const respose = await axios.post(newUrl,data)
    if (respose.data.success) {
      // console.log(respose.data.token);
      setToken(respose.data.token);
      localStorage.setItem("token",respose.data.token);
      setShowLogin(false)
    }
    else{
      alert(respose.data.message)
    }
  }

  return (
    <Dialog open={true} onClose={() => setShowLogin(false)} maxWidth="xs" fullWidth>
      <DialogTitle sx={{backgroundColor: "#1E1E1E",color: "#FFFFFF",textAlign: "center",}}>
        {currentState}
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: "#1E1E1E" }}>
        <Box component="form" onSubmit={onLogin}>
          {currentState === "Login" 
          ? (<></>) 
          : (
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              autoComplete="name"
              autoFocus
              variant="outlined"
              InputLabelProps={{ style: { color: "#E0E0E0" } }}
              InputProps={{ style: { color: "#FFFFFF" } }}
            />
          )}

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            autoComplete="email"
            autoFocus
            variant="outlined"
            InputLabelProps={{ style: { color: "#E0E0E0" } }}
            InputProps={{ style: { color: "#FFFFFF" } }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            variant="outlined"
            InputLabelProps={{ style: { color: "#E0E0E0" } }}
            InputProps={{ style: { color: "#FFFFFF" } }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#00FFFF", color: "#000000" }}
          >
            {currentState === "Sign up" ? "Create account" : "Login"}
          </Button>
          <Grid container>
            <Grid item>
                {currentState === "Login" 
                ? (<Typography>Create a new Account?<span onClick={() => setCuurentState("Signup")}>Click Here</span></Typography>) 
                : (<Typography>Already have an Account?<span onClick={() => setCuurentState("Login")}>Login Here</span></Typography>)}
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions sx={{ backgroundColor: "#1E1E1E" }}>
        <Button onClick={() => setShowLogin(false)} sx={{ color: "#00FFFF" }}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginSignUp;
