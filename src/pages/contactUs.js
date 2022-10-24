import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import ContactList from '../components/ContactList';


let contactList = localStorage.getItem("info") ? JSON.parse(localStorage.getItem("info")): [];


const ContactUs = () => {
    let firstRefName = useRef("");
    let lastRefName = useRef("");
    let emailRefName = useRef("");
    let messageRefName = useRef("");
    let [id, setId] = useState(Date.now);
    let [infoList, setInfoList] = useState(contactList);

let clearFields = () => {
    setId(Date.now);
    //Clear all fields
    firstRefName.current.value = "";
    lastRefName.current.value = ""; 
    emailRefName.current.value = ""; 
    messageRefName.current.value = ""; 
}

let handleSubmit = (e) => {
    e.preventDefault();
    // setId(Date.now);
    let info = {
        id: id,
        firstName: firstRefName.current.value, 
        lastName: lastRefName.current.value,
        email: emailRefName.current.value,
        message: messageRefName.current.value
    };
    
    let matchId = infoList.filter((contact) => {
        return contact.id === info.id;
    });

    if(matchId.length == 0){
        setInfoList([...infoList, info]);
        clearFields();
    }
    else {
        infoList.map((contact, index) => {
            if(contact.id === info.id) {
                infoList.splice(index, 1, info);
                setInfoList(infoList);
                clearFields();
            }
        });
    }

};


useEffect(() => {
    // Saving to local storage
    localStorage.setItem("info", JSON.stringify(infoList));}, 
    [infoList]); 

let handleRemove = (e) => {
   let num = parseInt(e.target.id);

    const remove = [...infoList].filter((item) => {
        return item.id !== num;
    })
    setInfoList(remove);
}

let handleRemoveAll = () => {
    setInfoList([]);
}

let handleUpdate = (e) => {
    let num = parseInt(e.target.id);

    infoList.filter((contact) => {
        return contact.id === num })
        .map((contact) => { 
            setId(contact.id);
            firstRefName.current.value = contact.firstName;
            lastRefName.current.value = contact.lastName; 
            emailRefName.current.value = contact.email; 
            messageRefName.current.value = contact.message; 
        });
}

  
  return (
    <div>
        <Box sx={{m: 4}}>
            <form onSubmit={handleSubmit}>
                <label for="firstName">First name</label><br></br>
                <input 
                    tabIndex="1" 
                    type="text" 
                    name="firstName" 
                    id="firstName"
                    ref={firstRefName}  
                    required>
                </input><br></br><br></br>
                
                <label for="lastName">Last name</label><br></br>
                <input 
                    tabIndex="2" 
                    type="text" 
                    name="lastName" 
                    id="lastName" 
                    ref={lastRefName} 
                    required>
                </input><br></br><br></br>
                
                <label for="email">Email</label><br></br>
                <input 
                    tabIndex="3" 
                    type="email" 
                    name="email" 
                    id="email" 
                    ref={emailRefName} 
                    required>
                </input><br></br><br></br>                
                
                <label for="message">Message</label><br></br>
                <textarea 
                    tabIndex="4" 
                    type="message" 
                    name="message" 
                    id="message"
                    ref={messageRefName} 
                    required>
                </textarea><br></br><br></br>
                <Button type="submit" color="primary" variant='contained'>Submit</Button>
            </form>
        </Box>
        <h2>Contact List</h2>
        <ContactList contacts={infoList} handleRemove={handleRemove} handleUpdate={handleUpdate} handleRemoveAll={handleRemoveAll}/>

    </div>
  )
}

export default ContactUs
