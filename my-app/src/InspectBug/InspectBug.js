import React from 'react'

const InspectBug = () => {
  return (
    <div style={{margin:'20px 10px 10px 20px'}}>InspectBug

      <button disabled>Submit</button><br /><br />
      <button style={{pointerEvents:'none',cursor:'not-allowed',background:'antiquewhite;'}}>submit</button>

    </div>
  )
}

export default InspectBug;