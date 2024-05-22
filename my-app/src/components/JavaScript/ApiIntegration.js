import React, { useEffect, useState } from 'react'

const ApiIntegration = () => {
    const[data,setData]=useState([]);
    const url="https://gorest.co.in/public/v2/users";
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(response=>{
            setData(response);
            console.log('response==>:',response);
        })
        .catch(error=>{
            console.log('error==>:',error)
        })
    },[])
const postPutEvent=()=>{
    const data={
        name:"sanjana",
        mobile:""
    }
    const url='https://gorest.co.in/public/v2/users'
    fetch(url,{
        method:'POST',
        body:JSON.stringify()
    })
    .then(res=>res.json())
    .then(response=>{
        setData(response);
        console.log('response==>:',response);
    })
    .catch(error=>{
        console.log('error==>:',error)
    })
}

  return (
    <div className='container mt-5'>
        
<table className='table ' style={{width:"50%"}}>
    <tr>
       <th>Name</th>
       <th>Email</th>
       <th>Gender</th>
       <th>Status</th>
    </tr>
    {
        data.map((item,id)=>{
            return(
                <tr key={id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.status}</td>
            </tr>
            )
        })
    }
   <div><button className='btn btn-primary mt-3' onSubmit={postPutEvent}>Submit</button></div>
</table>
       
    </div>
  )
}

export default ApiIntegration