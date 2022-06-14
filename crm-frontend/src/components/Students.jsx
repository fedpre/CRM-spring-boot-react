import { useNavigate } from "react-router-dom";
import {
  Container, 
  Button,
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Students = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Button 
        variant="outlined" 
        size="large" 
        startIcon={<ArrowBackIcon />} 
        onClick={() => navigate("/")}>
      </Button>
     <div>Students</div>
    </Container>
  )
}

export default Students