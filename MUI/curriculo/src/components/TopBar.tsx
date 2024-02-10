import { AppBar, Toolbar } from "@mui/material"
import PetsIcon from '@mui/icons-material/Pets';

export default function TopBar() {
  return (
    <AppBar>
        <Toolbar> 
            <h2> <PetsIcon  fontSize="small"/> Samu - curriculo </h2>
        </Toolbar>

    </AppBar>
  )
}
