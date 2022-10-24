import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import ChoresList from './ChoresList';

let choreList = localStorage.getItem("chores") ? JSON.parse(localStorage.getItem("chores")): [];



const ChoreForms = () => {
    const [choreName, setName] = useState("");
    const [choreDesc, setChoreDesc] = useState("");
    const [choreDate, setChoreDate] = useState("");
    const [choreData, setChoreData] = useState(choreList);
    
  
let handleSubmit = (e) => {
    e.preventDefault();
    //Add Chore
    setChoreData([...choreData, {id: choreData.length, name: choreName, desc: choreDesc, date: choreDate}]);
}



useEffect(() => {
    localStorage.setItem("chores", JSON.stringify(choreData));}, 
    [choreData]); 

let clearStorage = () => {localStorage.clear();}

    return (
        <div>
            <form onSubmit={e => {handleSubmit(e)}}>
                <label for="choreName">Chore Name</label><br></br>
                <input type="text" name="choreName" value={choreName} onChange={e => {setName(e.target.value)}}></input><br></br><br></br>
                <label for="choreDesc">Description</label><br></br>
                <input type="text" name="choreDesc" value={choreDesc} onChange={e => {setChoreDesc(e.target.value)}}></input><br></br><br></br>
                <label for="choreDate">Date</label><br></br>
                <input type="date" name="choreDate" value={choreDate} onChange={e => {setChoreDate(e.target.value)}}></input><br></br><br></br>
                <Box sx={{m: 3}}>
                    <Button sx={{mr: 3}} color="success" type='submit' variant='contained'>Submit</Button>
                    <Button color="error" variant='contained' onClick={clearStorage}>Clear</Button>
                </Box>
            </form>

            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" variant="medium">Chore</TableCell>
                                <TableCell align="center">Description</TableCell>
                                <TableCell align="center">Data</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {choreData.map(chore => {
                                return <ChoresList  name={chore.name} desc={chore.desc} date={chore.date}/>})}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
  )
}

export default ChoreForms
