
import { useState } from "react";
function NewForm() {
	const[formData,setFormData]=useState({
name:'',
email:'',
password:''
	});
  const[error,setError]=useState({})


  
const handleError=()=>{
let formError={}
if(formData.name==""){
  formError.name="please fill the require field"
}if(formData.name.length<10){
  formError.name="name should have at least 10 characters"
}if(formData.email==""){
  formError.email="please fill the required field"
}if(!formData.email.includes("@")){
  formError.email="email is not valid"
}if(formData.password==""){
  formError.password="password is required"
}
console.log("formError",formError);
setError(formError)
}

	const handleInputChange=(e,field)=>{
	  setFormData({
	  ...formData,
  	[field]:e.target.value
	})
  handleError()
	}
	const handleSubmit=()=>{
		console.log("formData",formData);
	}
	return(
<div>
	<div>
		<label htmlFor="">Name</label>
		<input type="text" onChange={(e)=>handleInputChange(e,"name")}/>
	</div>
  {error&&<span style={{color:'red'}}>{error.name}</span>}
	<div>
		<label htmlFor="">Email</label>
		<input type="text" onChange={(e)=>handleInputChange(e,"email")}/>
	</div>
  {error&&<span style={{color:'red'}}>{error.email}</span>}
	<div>
		<label htmlFor="">Password</label>
		<input type="text" onChange={(e)=>handleInputChange(e,"password")}/>
	</div>
  {error&&<span style={{color:'red'}}>{error.password}</span>}
	<button onClick={()=>handleSubmit()}>Submit</button>
</div>
	)
}

export default NewForm;

