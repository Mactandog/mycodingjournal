import { Button, Grid, TextareaAutosize, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useRef, useState } from 'react'
import MyThoughts from '../components/MyThoughts';
import MyToDoList from '../components/ToDoList';


let myThoughtsList = localStorage.getItem("thoughtsList") ? JSON.parse(localStorage.getItem("thoughtsList")) : [];
 let myTasksList = localStorage.getItem("tasksRecord") ? JSON.parse(localStorage.getItem("tasksRecord")) : [];


const MyCodingJournal = () => {
// Thoughts for the day // 
const date = new Date();  
let today = date.toLocaleDateString('en-US');
let thoughtsRef = useRef("");
const [thoughts, setThoughts] = useState(myThoughtsList);
const [id, setId] = useState(Date.now());

let addThoughts = (e) => {
  e.preventDefault();
  setId(Date.now);

  let thoughtDetails = {
    id: id,
    date: today, 
    thoughts: thoughtsRef.current.value
  }

  let matchId = thoughts.filter((thought) => {
    return thought.id === thoughtDetails.id;
});

if(matchId.length === 0){
    setThoughts([...thoughts, thoughtDetails]);
    thoughtsRef.current.value = "";
}
else {
  thoughts.map((thought, index) => {
        if(thought.id === thoughtDetails.id) {
          thoughts.splice(index, 1, thoughtDetails);
            setThoughts(thoughts);
            thoughtsRef.current.value = "";
        }
    });
}

}

useEffect(() => {
  localStorage.setItem("thoughtsList", JSON.stringify(thoughts));},
  [thoughts]);


  let deleteThought = (e) => {
    let num = parseInt(e.target.id);

    const remove = [...thoughts].filter((thought) => {
      return thought.id !== num;
    })
    alert(num)
    setThoughts(remove);
  }

  let editThought = (e) => {
    let num = parseInt(e.target.id);

    thoughts.filter((thought) => {
        return thought.id === num })
        .map((thought) => { 
          setId(thought.id);
          return thoughtsRef.current.value = thought.thoughts;
      });    
}

  let deleteAllThoughts = (e) => {
    setThoughts([]);
  }
// End of Thoughts for the day // 





// Task // 
let tasksRef = useRef("");
let taskDateRef = useRef("");
const [tasks, setTasks] = useState(myTasksList);
const [taskId, setTaskId] = useState(Date.now);

let addTask = (e) => {
  e.preventDefault();
  setTaskId(Date.now);

  let taskDetails = {
    id: taskId,
    date: taskDateRef.current.value, 
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

useEffect(() => {
  localStorage.setItem("tasksRecord", JSON.stringify(tasks));},
  [tasks]);


  let deleteTask = (e) => {
    let num = parseInt(e.target.id);

    const remove = [...tasks].filter((task) => {
      return task.id !== num;
    })
    alert(num)
    setTasks(remove);
  }

  let editTask = (e) => {
    let num = parseInt(e.target.id);

    tasks.filter((task) => {
        return task.id === num })
        .map((task) => { 
          setId(task.id);
          return tasksRef.current.value = task.task,
                  taskDateRef.current.value = task.date;
      });    
}

  let deleteAllTasks = (e) => {
    setTasks([]);
  }

// End of Task // 



  return (
    // Thoughts for the day
    <Box padding={10}>
      <Grid container justifyContent="space-between">
      <Grid item lg={6} border={2} padding={2}>
        <form>
          <Typography variant="h4" color="primary" m={2}>Thoughts for the day</Typography>
          <Typography variant="h5" color="warning" m={1}>Date: {today}</Typography>
          <Box>
              <TextareaAutosize
                maxRows={10}
                aria-label="maximum height"
                placeholder="Share your thoughts...."
                ref={thoughtsRef}
                variant="h6"
                style={{ fontSize: '1rem', width: 500, height: 100, marginBottom: 4 }}
              />
          </Box>
          <Button type="submit" variant='contained' onClick={addThoughts}>Save</Button>
        </form>

        <Box mt={4}>
          <Typography variant="h4" color="success">My Thoughts</Typography>
        </Box>
        <Box m={2}>
          <Button type="submit" variant='contained' color='error' onClick={deleteAllThoughts}>Delete All Tasks</Button>
        </Box>
        <MyThoughts myThoughts={thoughts} editThought={editThought} removeThought={deleteThought} />
      </Grid>
    

      {/* // My Tasks */}
    
      <Grid item lg={6} border={2} padding={2}>
        <form>
          <Typography variant="h4" color="secondary">Task</Typography>
          
          <Typography variant="h5" color="warning">Date</Typography>
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
          <Button type="submit" variant='contained' color="secondary" onClick={addTask}>Add Task</Button>
        </form>

        <Box mt={4}>
          <Typography variant="h4" color="success">My Tasks</Typography>
        </Box>
        <Box m={2}>
          <Button type="submit" variant='contained' color='error' onClick={deleteAllTasks}>Delete All Tasks</Button>
        </Box>
        <MyToDoList myTasks={tasks} deleteTask={deleteTask} editTask={editTask} />
      </Grid>
      </Grid>
    </Box>
   
  )
}

export default MyCodingJournal
