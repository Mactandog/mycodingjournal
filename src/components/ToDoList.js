import React from 'react'
import Typography from '@mui/material/Typography'
import { Grid, Button, Card } from '@mui/material'
import { Box } from '@mui/system'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';


const MyToDoList = ({myTasks, deleteTask, editTask}) => {
  return (
    <Box>
        {myTasks.map((task) => (
            <Card sx={{ marginBottom: 3, padding: 2, backgroundColor: 'secondary' }}>
              <Grid container key={task.id}>
              <Grid item lg={10} md={10} >
                  <Typography variant="h6" color="primary" textAlign="left">{task.date}</Typography>
                  <Typography variant="h5" color="black" textAlign="left" sx={{ display: 'block', wrap: 'true'}}>{task.task}</Typography>
              </Grid>
              <Grid item lg={2} md={2}>
                <Button
                  type='button'
                  id={task.id}
                 onClick={editTask}
                  variant="text"
                  color="warning"
                  startIcon={ <ModeEditOutlinedIcon />}
                >Edit
                </Button>
                <Button
                  type='button'
                  id={task.id}
                 onClick={deleteTask}
                  variant="text"
                  color="secondary"
                  startIcon={ <DeleteForeverIcon />} 
                >
                  Delete
                </Button>
              
              </Grid>
             </Grid>
             </Card>
        )
            
        )}
     
  </Box>

  )
}

export default MyToDoList
