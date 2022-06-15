import { useNavigate } from "react-router-dom";
import {
  Container,
  Button
} from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';

// MUI
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <Typography variant="h2" component="div" gutterBottom>
          STUDENT CRM
        </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Button 
              variant="contained" 
              size="large" 
              endIcon={<AddBoxIcon />} 
              onClick={() => navigate("/register")}>
               Register a new student 
            </Button>
            <Button 
              variant="contained" 
              size="large" 
              endIcon={<AddBoxIcon />} 
              onClick={() => navigate("/students")}>
               Show all students
            </Button>
          </Stack>
      </div>
    </Container>
  )
}

export default Dashboard