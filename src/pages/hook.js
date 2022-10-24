import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Box } from '@mui/system';
import randomColor from 'randomcolor';
import { Javascript } from '@mui/icons-material';
import ChoreForms from '../components/ChoreForms';


const Hook = () => {
    //Counter Example
    const [count, setCount] = useState(0);
    let decrement = () => {
        setCount(count - 1);
    }


    // Timer Example
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    //random color
    const [color, setRandomColor] = useState("");

    //
    const [itemName, setItemName] = useState(""); // for the fields
    const [items, setItems] = useState([]); //
    
     // useEffect always has a second parameter
     // Syntax: useEffect accepts two arguments.
     // 1st arg is a function, 2nd arg - dependencies (optional)
     // useEffect()
    useEffect(() => {
        let interval = null;
  
        if(isActive) {
        interval = setInterval(() => {
            setSeconds(seconds => seconds + 1)}, 
            1000);
        }
        else if(!isActive && seconds != 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval); // Cleanup function will clear the interval
    }, 
    [isActive, seconds]);

    // Sets a random color for the seconds variable
    useEffect( () => {
        setRandomColor(randomColor())}, 
        [seconds]);


    let toggle = () => {
        setIsActive(!isActive);
    }

    let reset = () => {
        setSeconds(0);
        setIsActive(false);
    }

    let addItem = (e) => {
        e.preventDefault(); // to prevent the page from refreshing
        setItems([...items, {id: items.length, name: itemName}]);
        setItemName("");
    }

    const [ username, setUsername ] = useState("Hi, this is Ryan!");
    
  return (
    <div>
        
        <h2>Hooks Examples</h2>

        <h2>Chore Form</h2>
        <ChoreForms />

        <h2>List of things</h2>
        <form onSubmit={addItem}>
            <label for="myThings">My things</label>
            <br></br>
            <input type="text" name="item" value={itemName} 
                onChange={e => setItemName(e.target.value)}>
            </input>
        </form>
        <ul>
            {items.map(item => {
              return <li key={item.id}>{item.id} {item.name}</li>
            })}
        </ul>

        <h2>{username}</h2>
        <input type="text" name='username' value={username} 
            onChange={
                (event) => {
                    setUsername(event.target.value);
                }}>
        </input>

        
        {/* Counter */}
        <h2>Counter</h2>
        <p>You clicked {count} times</p>
        <ButtonGroup variant="contained" aria-label="outlined primary button group" disableRipple="true">
            <Button onClick={() => setCount(count + 1)}>Increment by 1</Button>
            <Button color="secondary" onClick={decrement}>Decrement by 1</Button>
        </ButtonGroup>
       
        
        <br></br>
        <br></br>

        {/* Timer */}
        <h2>Timer Example</h2>
        <div><h1 style={{color:color}}>{seconds}</h1></div>
        <Box sx={{ '& button': { m: 1 } }}>
            <Button variant="contained" size="medium" onClick={toggle}>
                {isActive ? "Pause" : "Start"}
            </Button>
            <Button variant="contained" size="medium" color="error" onClick={reset}>
                Reset
            </Button>
        </Box>
    </div>
  )
}

export default Hook
