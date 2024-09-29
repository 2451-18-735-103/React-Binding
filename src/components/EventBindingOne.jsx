import React from 'react'

function EventBindingOne() {

    const shoot = () => {
        alert("Great Shot!");
      }
  return (
    <div>
        <h4 style={{ color: "#68cf48" }}>Example for Event Binding onClick</h4>
       <button onClick={shoot}>Take the shot!</button>
    </div>
  )
}

export default EventBindingOne
