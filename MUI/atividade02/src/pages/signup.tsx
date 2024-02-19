import { Box, Button, Grid, TextField } from "@mui/material"
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { useNavigate } from "react-router-dom";
// import signup from "../assets/signup.jpg"

export default function Signup(){
    const navigate = useNavigate()
    return (
        <Grid
      // width={"1000"}
      container
      // direction="row"
      // justifyContent="space-between"
      // alignItems="center"
    >
      {/* <Grid item xs={6}>
          <Box sx={{width:"500px"}} component={"img"} src={login}  alt="login" ></Box>
        </Grid> */}

      <Grid
        item
        xs={6}
      >
        <Box
          component={'form'}
          sx={{
            width: '300px',
            display: 'flex',
            flexDirection: 'column',
            p: 3,
            gap: 2,
            justifyContent: 'center',
          }}
        >
          <VerifiedUserIcon
            fontSize="medium"
            sx={{
              backgroundColor: '#00bfa5',
              padding: '1rem',
              borderRadius: '50%',
              color: 'white',
              m: 'auto',
            }}
          />
          <h3>Sign in</h3>

          <TextField
            id="outlined-basic"
            type="email"
            label="Email"
            variant="outlined"
            required
          />
          <TextField
            id="outlined-basic"
            type="password"
            label="Password"
            variant="outlined"
            required
          />

<TextField
            id="outlined-basic"
            type="password"
            label="Repeat your password"
            variant="outlined"
            required
          />

          
          <Button variant="contained">Signup </Button>

          <Box component={"p"} onClick={()=>navigate("/")} sx={{cursor: "pointer"}}> You have account? Login </Box>
 
          <Box component={"small"}> Copyright © mysite | 2024  </Box>

        </Box>
      </Grid>
    </Grid>
    )
}