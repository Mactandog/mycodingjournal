import React from 'react';
import "../assets/expenseTracker.css";


// Class 
// class ExpenseTracker extends React.Component {
//     render() {
//         return (
//             <div>
//                 <div><b>Item:</b> Laptop</div>
//                 <div><b>Amount:</b> 70,000</div>
//                 <div><b>Spend date:</b> 10/17/2022</div>
//                 <div><b>Category:</b> Computer</div>
//             </div>
//         )
//     }
// }

let ExpenseTracker = () => {
    const itemStyle2 = {color:"red", fontSize: "24px"}; //on file declaration
    return (
        // from external CSS file
        // <div style={itemStyle}>

        // on file style declaration
        // <div style={itemStyle2}>

        // inline style
            <div style={{color:"red", fontSize: "24px"}}> 
            <div><b>Item:</b> Laptop</div>
            <div><b>Amount:</b> 70,000</div>
            <div><b>Spend date:</b> 10/17/2022</div>
            <div><b>Category:</b> Computer</div>
        </div>
    )
}

export default ExpenseTracker;