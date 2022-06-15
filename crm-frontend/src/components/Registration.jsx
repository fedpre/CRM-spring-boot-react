import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Container, 
  Button,
  TextField,
  Typography,
  Box
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import PublishIcon from '@mui/icons-material/Publish';

const Registration = () => {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('')
  const [DOB, setDOB] = useState('')
  const [email, setEmail] = useState('')

  const changeFirstName = (e) => {
    setFirstName(e.target.value)
  }
  const changeDOB = (e) => {
    setDOB(e.target.value)
  }
  const changeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newStudent = {
      name: firstName,
      dob: DOB,
      email: email
    }
    
    const res = await axios.post('http://localhost:8080/api/v1/student', newStudent)
    console.log(res);
    setFirstName('')
    setDOB('')
    setEmail('')
  }

  return (
    <Container>
      <Button 
        variant="outlined" 
        size="large" 
        startIcon={<ArrowBackIcon />} 
        onClick={() => navigate("/")}>
      </Button>
      <Typography variant="h2" component="div" gutterBottom>
        Registration
      </Typography>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          'display': 'flex',
          'flexDirection': 'column'
        }}
        noValidate
        autoComplete="off"
      >
      <TextField id="outlined-basic" label="First name" variant="outlined" onChange={changeFirstName} value={firstName}/>
      <TextField id="outlined-basic" label="Birthday" variant="outlined" placeholder="YYYY-MM-DD" onChange={changeDOB} value={DOB}/>
      <TextField id="outlined-basic" label="Email" variant="outlined" onChange={changeEmail} value={email}/>
      <Button 
        variant="contained" 
        size="large" 
        endIcon={<PublishIcon />} 
        onClick={handleSubmit}>
          Register
      </Button>
    </Box>
    </Container>
  )
}

export default Registration