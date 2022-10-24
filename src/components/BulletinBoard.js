import React from 'react'

//Using Props
const BulletinBoard = (props) => {
  return (
    <div>
      <h4 style={{display: !props.id && "none"}}>ID: {props.id}</h4>
      <h3 style={{display: !props.category && "none"}}>Category: {props.category}</h3>
      <h3 style={{display: !props.post && "none"}}>Post: {props.post}</h3>
    </div>
  )
}

export default BulletinBoard;


