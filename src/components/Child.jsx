import React from 'react'

const Child = ({value, onChange}) => {

  const handleChange = (e) => {
    //this will change the input value
    // value = e.target.value;
    onChange(e.target.value);
  }

  return (
    <div>
      <div className='contains' style={{backgroundColor:"lightgreen",position:"absolute",top:"140px",width:"400px",height:"300px",marginLeft:"20px",paddingLeft:"20px"}}>
        <h2>Child Component</h2>
        <input type="text" placeholder="Enter anything" 
          onChange={handleChange}
          value={value}
        />
      </div>
    </div>
  )
}

export default Child