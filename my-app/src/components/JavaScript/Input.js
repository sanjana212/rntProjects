import React, { useEffect, useState } from 'react'

const Input = () => {
    const[input,setInput]=useState('');
    console.log('input==>:',input)
    const[data,setData]=useState([]);
    
    const handleSubmit=()=>{
        console.log(input)
        setData([...data,input]);
    }
    console.log('data==>:',data);
    // useEffect(()=>{
    //   fetch(url.currentWeek,{
    //     method:"POST",
    //     body:JSON.stringify({

    //     })
    //     headers:{
    //       'Content-type': 'application/json; charset=UTF-8',
    //     }
    //   })
    //   .then((response)=>response.json())
    //   .then(data=>console.log(data))
    //   .catch((error)=>console.log(error))
    // },[])
    // useEffect(()=>{
    //   fetch(url.currentWeek,{
    //     method:"POST",
    //    headers:{
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //     Authorization: "Bearer " + sessionStorage.getItem("token")
    //    },
    //   })
    //   .then((res)=>res.json())
    //   .then(res=>console.log(res));
    //   (res?.data).map((item)=>console.log(item
    //     optionData.push({
    //       label:'`week'
    //     })
    //     ))
    // })
  return (
    <div>
        <input type="text" onChange={(e)=>setInput(e.target.value)} />
        <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Input