import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const ContactList = ({contacts, handleRemove, handleUpdate, handleRemoveAll}) => {
  return (

<Box sx={{m: 5}}>
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <Button onClick={handleRemoveAll}>Delete All</Button>
              <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>First name</TableCell>
                  <TableCell>Last name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Message</TableCell>
                  <TableCell>Action</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>   
                  <TableCell>{contact.id}</TableCell>
                  <TableCell>{contact.firstName}</TableCell>
                  <TableCell>{contact.lastName}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.message}</TableCell>
                  <TableCell>
                    <button type='button' id={contact.id} onClick={handleRemove}>Remove</button>
                    <button type='button' id={contact.id} onClick={handleUpdate}>Update</button>
                  </TableCell>
              </TableRow>
            ))}
          </TableBody>
      </Table>
  </TableContainer>
</Box>
  )
}

export default ContactList
