import { Button, Grid, TextareaAutosize, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useRef, useState } from 'react'
import MyThoughts from '../components/MyThoughts';
import MyToDoList from '../components/ToDoList';


// let myTasksList = localStorage.getItem("tasksRecord") ? JSON.parse(localStorage.getItem("tasksRecord")) : [];
let myTasksList = [];

const MyToDoListPage = () => {


// Task // 
let tasksRef = useRef("");
let taskDateRef = useRef("");
const [tasks, setTasks] = useState(myTasksList);
const [taskId, setTaskId] = useState();

let addTask = (e) => {
  e.preventDefault();
  setTaskId(Date.now);

  let taskDetails = {
    id: taskId,
    date: taskDateRef, 
    task: tasksRef.current.value
  }
alert(taskDetails)
  let matchId = tasks.filter((task) => {
    return task.id === taskDetails.id;
});

if(matchId.length == 0){
    setTasks([...tasks, taskDetails]);
    tasksRef.current.value = "";
}
else {
  tasks.map((task, index) => {
        if(task.id === taskDetails.id) {
          tasks.splice(index, 1, taskDetails);
            setTasks(task);
            tasksRef.current.value = "";
        }
    });
}

}

// useEffect(() => {
//   localStorage.setItem("tasksRecord", JSON.stringify(tasks));},
//   [tasks]);


//   let deleteThought = (e) => {
//     let num = parseInt(e.target.id);

//     const remove = [...thoughts].filter((thought) => {
//       return thought.id !== num;
//     })
//     alert(num)
//     setThoughts(remove);
//   }

//   let editThought = (e) => {
//     let num = parseInt(e.target.id);

//     thoughts.filter((thought) => {
//         return thought.id === num })
//         .map((thought) => { 
//           setId(thought.id);
//           return thoughtsRef.current.value = thought.thoughts;
//       });    
// }

// End of Task // 



  return (
    // Thoughts for the day
    <Box padding={10}>
      <Grid container justifyContent="space-between">

      {/* // My Tasks */}
    
      <Grid item lg={6} border={2} padding={2}>
        <form>
          <Typography variant="h4" color="secondary">Task</Typography>
          <Typography variant="h5" color="warning" >Date:</Typography>
          <input type="date" name="date" ref={taskDateRef} min={new Date().toISOString().split('T')[0]}/>
          <Box mt={2}>
              <TextareaAutosize
                maxRows={10}
                aria-label="maximum height"
                placeholder="Enter your task"
                ref={tasksRef}
                variant="h6"
                style={{ fontSize: '1rem', width: 500, height: 100, marginBottom: 4 }}
              />
          </Box>
          <Button type="submit" variant='contained' color="secondary" onClick={addTask}>Save</Button>
        </form>

        <Box mt={4}>
          <Typography variant="h4" color="success">My Tasks</Typography>
        </Box>
        <MyToDoList />
      </Grid>
      </Grid>
    </Box>
   
  )
}

export default MyToDoListPage
