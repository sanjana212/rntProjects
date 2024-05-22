import React from 'react';
import DataUplifting from './DataUplifting';
const Parent = () => {
    const getData=(data)=>{
        console.log("comming from DataUplifting==>:",data);
    }
  return (
    <div>
        <DataUplifting onSubmit={getData}/>
    </div>
  )
}
export default Parent;