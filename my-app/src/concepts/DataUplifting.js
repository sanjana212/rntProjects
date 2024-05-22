import React, { useState } from 'react'

const DataUplifting = (props) => {

    const [name, setName] = useState("");
    const [newData, setNewData] = useState([]);
    console.log('name==>',name);
  
    const handleInputChange = (e) => {
        setName(e.target.value);
    }
    const handleSubmit = () => {
       props.onSubmit(name);
    }

    return (
        <div className='container mt-5'>
            <input type="text" value={name} onChange={handleInputChange} />
            <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default DataUplifting