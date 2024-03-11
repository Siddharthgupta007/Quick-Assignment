import React from 'react'

const Student_details = (props) => {
  return (
    <div>
      <h1>Student Details Component</h1>
      <h3>Username from Home: {props.username}</h3>
    </div>
  )
}

export default Student_details