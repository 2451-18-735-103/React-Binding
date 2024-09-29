import React, { useState } from 'react'

const ViewToComponent = () => {
    const [subject, setSubject] = useState("");
   //onChange event is used to call handleChange to update the state based on user input.
    const handleChange = (event) => {
      setSubject(event.target.value);
    };
  
    return (
      <div>
        <h4 style={{ color: "#68cf48" }}>Example for view To component</h4>
        <input placeholder="Enter Subject"   onChange={handleChange}/>
          
        <p><b>{subject}</b> Tutorial</p>
      </div>
    );
}

export default ViewToComponent
