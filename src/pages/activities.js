import React from 'react'
import BoardData from '../components/BoardData';
import BulletinBoard from '../components/BulletinBoard';
import ExpenseTracker from '../components/ExpenseTracker';
import PersonnelTable from '../components/PersonnelTable'

const Actitivities = () => {
    let currentTime = new Date().toString();
    // let fname = "Ryan";
    // let lname = "Eyana";
  
    let boardComponents = BoardData.map(board => {
      return <BulletinBoard id={board.id} category={board.category} post={board.post}/>});
  
      return (
        <div>
            <h1>Activities</h1>
            <div className='table'>
                <PersonnelTable/>
            </div>
            
            {/* <Greetings firstName = {fname} lastName = {lname}/> */}
            {boardComponents}
            <p>
                <span className='blue'>The current time is: {currentTime}</span>
                <br/>
                </p>
            
                {/* <BulletinBoard category= "Current Events" post= "Our Current Events"/>
                <BulletinBoard category= "Announcement" post= "Announcement"/>
                <BulletinBoard category= "Quotes of the Day" post= "I am under the water."/>
                <BulletinBoard post= "We will keep you posted."/> */}
            <ExpenseTracker />
        </div>
     )
}

export default Actitivities
