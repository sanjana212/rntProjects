import React, { useReducer, useState } from 'react'

const initialState={
    list:[
        {title:"web Development",flag:false},
        {title:"web Design",flag:true},
        {title:"web practice",flag:false},
        {title:"web Assignment",flag:true},
    ]
}

function reducer(state,action){
switch(action.type){
    case "ON_SELECT":
        return {...state,...action.payload};
        default:
            return state
    
}
}

const Chips = (props) => {
  const[state,dispatch]=useReducer(reducer,initialState);
  function selectItem(item,index){
    state.list[index].flag=! state.list[index].flag
    dispatch({
        type:"ON_SELECT",
        payload:state.list,
    })
  }
  return (
    <div className='container'>
        <h3>Select Skills</h3>
        <div style={{display:"flex",flexWrap:"wrap"}}>
            {state.list.map((item,index)=>{
            return(
                <div key={index}
                style={{
                    border:"0.5px solid black",
                    borderRadius:'15px',
                    padding:'5px',
                    margin:"10px",
                    background:`${item.flag ?'grey':'white'}`
                }}
                onClick={()=>selectItem(item,index)}
                >
                    <p style={{margin:"0px"}}>{item.title}</p>
                    <span><i className="fa fa-pencil" style={{cursor:"pointer"}} aria-hidden="true"></i></span>
                    <span><i className="fa fa-trash me-4" style={{marginLeft:"10px"}} aria-hidden="true"></i></span>
                </div>
            )
        })}</div>
    </div>
  )
}

export default Chips;