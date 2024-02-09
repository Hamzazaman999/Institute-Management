import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const Admission = () => {
  return (
        <>
        <Box>
        <form>
          <TextField id="outlined-basic" label="First Name" variant="outlined" />
          <TextField id="outlined-basic" label="Last Name" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <Button variant="contained">Registered</Button>

          </form>
          </Box>
        </>
      );
    } 

export default Admission