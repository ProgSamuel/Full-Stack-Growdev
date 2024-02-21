import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from '@mui/material';
// import login from "../assets/login.jpg"
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';

export default function Login() {
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
          <LockIcon
            fontSize="medium"
            sx={{
              backgroundColor: '#ef5350',
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

          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me?"
          />

          <Button variant="contained">Login </Button>

          <Box component={"p"} onClick={()=>navigate("/home")} sx={{cursor: "pointer"}}> Don't have account? Signup </Box>

          <Box component={"small"}> Copyright © mysite | 2024  </Box>

        </Box>
      </Grid>
    </Grid>
  );
}
