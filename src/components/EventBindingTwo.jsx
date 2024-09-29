import React from 'react'

function EventBindingTwo() {
    const shoot = (a) => {
        alert(a);
      }
    
  return (
    <div>
        <h4 style={{ color: "#68cf48" }}>Example for Event Binding onClick with parameters</h4>
        {/* for passing parameters we need to use arrow function */}
      <button onClick={() => shoot("Goal!")}>Take the shot!</button>
    </div>
  )
}

export default EventBindingTwo
