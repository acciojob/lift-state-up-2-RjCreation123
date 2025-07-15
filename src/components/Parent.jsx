import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {

  const [input, setInput] = useState("");

  const inputChange = (value) => {
    setInput(value);
  }

  return (
    <div>
        <div className='container' style={{backgroundColor:"blue", width:"500px", height:"500px",padding:"10px",paddingLeft:"20px"}}>
          <h1>Parent Component</h1>
          <p style={{color:"white"}}>Current State : {input}</p>
        </div>
        <Child value={input}
          onChange={inputChange}
        />
    </div>
  )
}

export default Parent