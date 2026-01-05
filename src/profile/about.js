import { Box } from "@mui/material";
import { useNavigate,Outlet } from "react-router-dom";
import Button from '@mui/material/Button';


export default function About(){
    const navigate = useNavigate();

    return(
    <>
    <Box
      sx={{
        maxWidth: "100%",
        height: 150,       // height of rectangle
        bgcolor: "primary.main", // background color
        borderRadius: 2,   // rounded corners (optional)
        boxShadow: 3,      // shadow (optional)
        color: "white",
        m: "1rem auto",
      }}
    >
      <div style={{marginLeft: "1rem"}}><h1>Syed Anwar S</h1></div>
      <div style={{marginLeft: "1rem"}}><h3>Front End Developer</h3></div>
      <nav>
      <Button sx={{ ml:"1rem" }} variant="contained" onClick={() => navigate("experience")}>
      Experience
      </Button>
      <Button sx={{ ml:"1rem" }} variant="contained" onClick={() =>navigate("education")}>
      Education
      </Button>
      <Button sx={{ ml:"1rem" }} variant="contained" onClick={() => navigate("skills")}>
      Skills
      </Button>
      <Button sx={{ ml:"1rem" }} variant="contained" onClick={() => navigate("cli")}>
      resume cli
      </Button>
      </nav>
    </Box>

    <Box sx={{ m: "1rem" }}>
        <Outlet />
      </Box>
    </>
    );
}