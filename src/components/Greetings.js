import * as React from 'react';


window.onload = function() {
    Greetings();
}

let Greetings = (person) => {
    let name = person.firstName + " " + person.lastName;
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let greetings = "Good morning";
    let session = "AM";
    if (hours === 0) {
        hours = 12;
    }

    else if (hours === 12) {
        hours = 12; 
        session = "PM";
        greetings = "Good afternoon";
    }
    if (hours > 12) {
        hours = hours - 12; 
        session = "PM";
        greetings = "Good afternoon";
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    greetings = greetings + ", " + name + "! " + hours + ":" + minutes + ":" + seconds + " " + session;
    setTimeout(function(){Greetings()}, 1000);
    const clockStyle = {color:"cyan", fontSize: "24px"};
    return (
    <>
        <h1 style={clockStyle}>{greetings}</h1>
    </>
    )
}

// let Greetings = () => {
//     const clockStyle = {color:"yellowgreen", fontSize: "24px"};
//     return (
//     <p>
//         <h1 style={clockStyle}>{getDigitalClock()}</h1>
//     </p>
//     )
// }

export default Greetings;