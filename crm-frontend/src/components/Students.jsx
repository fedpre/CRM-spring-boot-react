import { useNavigate } from "react-router-dom";
import {
  Container, 
  Button,
  Typography,
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect } from "react";
import axios from 'axios';

import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70, valueGetter: (params) =>
  `${params.row.id || ''}`, },
  { field: 'name', headerName: 'First name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 250,
  },
];


const Students = ({ studentInfo, setStudentInfo}) => {
  const navigate = useNavigate()

  useEffect(() => {
    const fetchStudent = async() => {
      const res = await axios.get('http://localhost:8080/api/v1/student')
      console.log(res.data);
      setStudentInfo(res.data)
    }
  
    fetchStudent()
  }, [])

  if (!studentInfo) {
    return <div></div>
  }

  return (
    
    <Container>
      <Button 
        variant="outlined" 
        size="large" 
        startIcon={<ArrowBackIcon />} 
        onClick={() => navigate("/")}>
      </Button>
     <div>
      <Typography variant="h2" component="div" gutterBottom>
        Students
      </Typography>
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={studentInfo}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
     </div>
    </Container>
  )
}

export default Students