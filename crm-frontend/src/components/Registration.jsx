import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Container, 
  Button,
  TextField
} from "@mui/material";

const Registration = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Button 
        variant="outlined" 
        size="large" 
        startIcon={<ArrowBackIcon />} 
        onClick={() => navigate("/")}>
      </Button>
      <div>Registration</div>
      
    </Container>
  )
}

export default Registration