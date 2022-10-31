import React from 'react'
import Typography from '@mui/material/Typography'
import { Grid, Button, Card } from '@mui/material'
import { Box } from '@mui/system'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';


const MyThoughts = ({myThoughts, editThought, removeThought}) => {
  return (
    <Box>
        {myThoughts.map((thought) => (
            <Card sx={{ marginBottom: 3, padding: 2 }}>
              <Grid container key={thought.id}>
                <Grid item lg={10} md={10} >
                    <Typography variant="h6" color="primary" textAlign="left">{thought.date}</Typography>
                    <Typography variant="h5" color="black" textAlign="left">{thought.thoughts}</Typography>
                </Grid>
                <Grid item lg={2} md={2}>
                  <Button
                    type='button'
                    id={thought.id}
                    onClick={editThought}
                    variant="text"
                    color="warning"
                    startIcon={ <ModeEditOutlinedIcon />}
                  >Edit
                  </Button>
                  <Button
                    type='button'
                    id={thought.id}
                    onClick={removeThought}
                    variant="text"
                    color="primary"
                    startIcon={ <DeleteForeverIcon />} 
                  >Delete
                  </Button>
                </Grid>
              </Grid>
             </Card>
        )
            
        )}
     
  </Box>

  )
}

export default MyThoughts
