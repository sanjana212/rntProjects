
import Table from './components/Table';
import { Component, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, HashRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import TaskNav from './components/TaskNav';
import Page from './components/Checkbox';
// import Home from './components/Home';
import FormTable from './components/FormTable';
import Form from './components/Form';
import UserManager from './apps/UserManagerApp';
import EditPage from './components/rnt/EditPage';
import MyForm from './components/MyForm';
import FormValidation from './components/FormValidation';
import { TableWithForm } from './components/TableWithForm';
import DataTable from 'react-data-table-component';
import GridTable from './components/GridTable';
// import DropDownAgGrid from './components/DropDownAgGrid';
import ReactSelect from './components/ReactSelect';
import NxtTable from './components/JavaScript/NxtTable';
import Input from './components/JavaScript/Input';
// import ApiIntegration from './components/JavaScript/ApiIntegration';
// import Transition from './components/JavaScript/Transition';
import Home from './MyProject/Home';
// import About from './MyProject/About';
import Contact from './MyProject/Contact';
import Navbar1 from './Navbar/Navbar';
import { AnimatePresence } from 'framer-motion';
import Parent from './concepts/Parent';
// import { PieChart } from './charts/PieChart';
import MyTable from './AgGridEdit/MyTable';
// import { Tooltip } from 'bootstrap';
// import Tooltip from './ToolTip/Tooltip';
// import ReactLottie from './Lottie/ReactLottie';
// import ReadMoreFunc from './ReadMoreFunc.js/ReadMoreFunc';
// import CardCaraousal from './CardCarousal/CardCaraousal';
// import Task from './TaskByP/Task';
// import PgTask from './PgTask/PgTask';
// import UnsplashClone from './UnsplashClone/UnsplashClone';
// import Test from './MyPracticeTest.js/Test';
// import NursuryHome from './MyProject/home/NursuryHome';
// import MyPlants from './MyProject/MyPlants/MyPlants';
// import Chatboat from './chatboat/Chatboat';
// import Sidebar from './components/Sidebar';
// import Chips from './Chips/Chips';
// import DatePicker1 from './Datepicker/DatePicker';
// import Sidebar from './Sidebar/Sidebar';
// import TextWrap from './textWrap/TextWrap';
// import ReadMoreFunc from './ReadMoreFunc.js/ReadMoreFunc';
// import PDFViewer from './PDFViewer/PDFViewer';
// import New from './Canvas/Canvas';
// import Canvas from './Canvas/Canvas';
// import SlidebarDiv from './SlidebarDiv/SlidebarDiv';
// import AccCreation3 from './ocr-form/AccCreation3';
// import Form3 from './ocr-form/form3/Form3';
// import Msidebar from './MSidebar/Msidebar';
// import Login from './rdms/login/Login';
// import Interval from './Interval/Interval';
// import InspectBug from './InspectBug/InspectBug';
// import Header from './MyProject/Header/Header';
// import Calc from './calculator/Calc';
// import AddTodo from './redux-toolkit/components/AddTodo';
// import TodoList from './redux-toolkit/components/TodoList';
// import Register from './redux-toolkit/auth/Register';
// import Login from './redux-toolkit/auth/Login';
// import Scss from './Scss/Scss';
import Resume from './resumeBuilder/Resume';
// import Msidebar from './MSidebar/Msidebar';
import Dashboard from './MSidebar/pages/Dashboard';
import Analytics from './MSidebar/pages/Analytics';
import Product from './MSidebar/pages/Product';
import ProductList from './MSidebar/pages/ProductList';
import Comments from './MSidebar/pages/Comments';
import About from './MSidebar/pages/About';
import Msidebar from './MSidebar/Msidebar';
import Signals from './Signals/Signals';
import BeautyPage from './BeautyPage/BeautyPage';
import MyProjects from './MyProjects';
// import Chatboat from './chatboat/Chatboat';
import Calc from './calculator/Calc';
import UnsplashClone from './UnsplashClone/UnsplashClone';
import Mygame from './Mygame/Mygame';
import Responsive from './Responsive/Responsive';
// import { PieChart } from './charts/PieChart';
import PieChart from '../src/charts/PieChart';
import NewForm from '../src/FormByNewWay/NewForm';
const App = () => {
  return (
    <div style={{ margin: '10px 10x 10px 10px' }}>
      {/* <NxtTable/>  */}
      {/* <Input />
      {/* <ApiIntegration/> */}
      {/* <UnsplashClone/> */}
      {/* <Chatboat/> */}
      {/* <Form3/> */}
      {/* <Test/> */}
      {/* <Msidebar/> */}
      {/* <Login/> */}
      {/* <Interval/> */}

      {/* <GridTable/> */}
      {/* <InspectBug/> */}
      {/* <Calc /> */}
      {/* <Scss/> */}
      {/* <Resume/> */}
      {/* <Msidebar/> */}
      {/* <Signals /> */}
      {/* <BeautyPage/> */}
      {/* <MyProjects/> */}
      {/* <Mygame /> */}
      {/* <Responsive/> */}
      {/* <Routes>
        <Route path='/' element={<MyProjects/>}></Route>
        <Route path='/Msidebar' element={<Msidebar/>}></Route>
        <Route path='/Resume' element={<Resume/>}></Route>
        <Route path='/BeautyPage' element={<BeautyPage/>}></Route>
        <Route path='/Calc' element={<Calc/>}></Route>
        <Route path='/PieChart' element={<PieChart/>}></Route>
        <Route path='/UnsplashClone' element={<UnsplashClone/>}></Route>

        <Route path='/MyComponent' element={<MyComponent/>}></Route>
        <Route path='/UnsplashClone' element={<UnsplashClone/>}></Route>
        <Route path='/PieChart' element={<PieChart/>}></Route>
        <Route path='/UnsplashClone' element={<UnsplashClone/>}></Route>
      </Routes> */}
      {/* <PieChart/> */}
    </div>
  )
}
export default App;

// const App = () => {
//   const navigate = useNavigate()
//   return (
//     <div>
//       <Msidebar>
//         <Routes>
//           <Route path='/' element={<Dashboard />} />
//           <Route path='/Dashboard' element={<Dashboard />} />
//           <Route path='/About' element={<About />} />
//           <Route path='/Analytics' element={<Analytics/>} />
//           <Route path='/Product' element={<Product />}/>
//           <Route path='/ProductList' element={<ProductList />}/>
//           <Route path='/Comments' element={<Comments />}/>
//         </Routes>
//       </Msidebar>
//     </div>
//   )
// }
// export default App;


// const App = () => {
//   const location = useLocation();
//   return (
//     <div >
//       <Header/>
//       <Navbar1 />
//       <AnimatePresence>
//         <Routes>
//           <Route path='/' element={<NursuryHome />} />
//           <Route path='/About' element={<About />} />
//           <Route path='/Contact' element={<Contact />} />
//           {/* <Route path='/MyProject/MyPlants/MyPlants' element={<MyPlants/>} /> */}
//         </Routes>
//       </AnimatePresence>
//     </div>

//   )
// };
// export default App;
////////////////////------------------------Redux-----------------------------//////////////////////////////////////////
// const App = () => {
//   return (
//     <div>
//       {/* <h1>My Taks</h1> */}
//       {/* <AddTodo/>
//       <TodoList/> */}
//       {/* <Login/> */}
//       <Register />
//     </div>
//   )
// }
// export default App;
/////////////////////------------------------Redux CRUD--------------////////////////////////

// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App



// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(data => setUsers(data))
//   }, []);
//   const handleDelete = (id) => {
//     const filterUsers = users.filter((user) => user.id !== id);
//     console.log('filterUsers==>:', filterUsers)
//     setUsers(filterUsers);
//   }


//   return (

//  <>
//  <TaskNav/>

//        <Routes>
//          <Route path='/' element={<Home />} />
//          <Route path='Table' element={<Table users={users}
//             setUsers={setUsers}
//             handleDelete={handleDelete} />} />
//          <Route path='Checkbox' element={<Page />} />

//       </Routes>
//     </>
//   );
// }





// const App = () => {
//   const columns=[
//     {
//       name:'name',
//       selector:row=>row.name,
//       sortable:true,


//     },
//     {
//       name:'email',
//       selector:row=>row.email,
//       sortable:true,



//     },
//     {
//       name:'age',
//       selector:row=>row.age,
//       sortable:true,



//     }
//   ]

//   const data=[
//     {
//       id:1,
//       name:'sanjana',
//       email:'wer@gmail.com',
//       age:55
//     },
//     {
//       id:2,
//       name:'rupali',
//       email:'wer@gmail.com',
//       age:55
//     },
//     {
//       id:4,
//       name:'nisha',
//       email:'wer@gmail.com',
//       age:55
//     },
//     {
//       id:5,
//       name:'dhannashree',
//       email:'wer@gmail.com',
//       age:55
//     },
//     {
//       id:6,
//       name:'ramya',
//       email:'wer@gmail.com',
//       age:55
//     },
//     {
//       id:7,
//       name:'maya',
//       email:'wer@gmail.com',
//       age:55
//     },
//     {
//       id:8,
//       name:'priya',
//       email:'wer@gmail.com',
//       age:55
//     },
//     {
//       id:9,
//       name:'siya',
//       email:'wer@gmail.com',
//       age:55
//     },
//     {
//       id:10,
//       name:'ram',
//       email:'wer@gmail.com',
//       age:55
//     },
//     {
//       id:11,
//       name:'krishna',
//       email:'wer@gmail.com',
//       age:55
//     },
//     {
//       id:12,
//       name:'bottle',
//       email:'wer@gmail.com',
//       age:55
//     },
//     {
//       id:13,
//       name:'guard',
//       email:'wer@gmail.com',
//       age:55
//     },
//   ]
//   const[records,setRecords]=useState(data);
//   const[selectedRows,setSelectedrows]=useState([])
//   console.log('data==>:',data);
//   const handleFilter=(event)=>{ 
//    const newData=data.filter(row=>{
//     return row.name.toLowerCase().includes(event.target.value.toLowerCase());
//    })
//     setRecords(newData);
//   }

//   const handleSelectedRowsChange=(state)=>{
// setSelectedrows(state.selectableRows);
//   }
//   return (
//     <div className='container mt-5'>
//       <div>
//         <input type="text" placeholder='search' onChange={handleFilter} />
//       </div>
//       <DataTable
//       columns={columns}
//       data={data}
//       selectableRows      
//       onSelectedRowsChange={handleSelectedRowsChange}
//       fixedHeader
//       pagination
//       ></DataTable>
//     </div>
//   );
// };
//import Select from 'react-select'


// const App=()=>{
//   const[selectedOptions,setSelectedOptions]=useState(null);
// const handleSearch=(selectedOptions)=>{
//   setSelectedOptions(selectedOptions);
// }
//   return(
//     <div>
//   <label htmlFor="">Search</label>
//   <Select options={options} onChange={handleSearch}/>
//     </div>
//   )
// }
//  export default App;


// class App extends Component{
//   constructor(){
//     super();
//     this.state={
//       name:'sanjana',
//     }
//   }

//   componentDidUpdate(){
// console.log('mount=>',this.state.name)
//   }
//   componentDidUpdate(){
//    console.log('update=>',this.state.name)
//   }
//   componentWillUnmount(){
//     console.log('unmount=>',this.state.name)
//   }
//   updateName(e){

//   this.setState({name:e.target.value});
//   }

//   render(){
//     return(
// <div>
//   <h1>{this.state.name}</h1>
//      <input onChange={(e)=>this.updateName(e)}/>
//      </div>
//     )
//   }


// }

/*
<div>
<Table 
users={users}
setUsers={setUsers}
handleDelete={handleDelete}
/>
/* <Page/>
</div>
*/

// <>
//   <TaskNav />
//   <Routes>
//     <Route path='/' element={<Table />} />

//     <Route path='/Checkbox' element={<Page />} />
//   </Routes>
// </


//  const App=()=>{

//   return (
//     <div className='container mt-5'>

//       <CardCaraousal/>y
//     </div>
//   )
//   }
// export default App;


// const App = () => {
//   const [data, setData] = useState({data: []});
//   const [isLoading, setIsLoading] = useState(false);
//   const [err, setErr] = useState('');

//   const handleClick = async () => {debugger
//     setIsLoading(true);

//     try {
//       const response = await fetch('https://gorest.co.in/public/v2/posts', {
//         method: 'GET',
//         headers: {
//           Accept: 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`Error! status: ${response.status}`);
//       }

//       const result = await response.json();

//       console.log('result is: ', JSON.stringify(result, null, 4));

//       setData(result);
//     } catch (err) {
//       setErr(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   console.log(data);

//   return (
//     <div>
//       {err && <h2>{err}</h2>}

//       <button onClick={()=>{handleClick()}}>Fetch data</button>

//       {isLoading && <h2>Loading...</h2>}

//       {data.data.map(person => {
//         return (
//           <div key={person.id}>
//             <h2>{person.title}</h2>
//             <h2>{person.user_id}</h2>
//             {/* <h2>{person.last_name}</h2> */}
//             <br />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default App;





function MyComponent() {
  const [dataFetched, setDataFetched] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = () => {
    if (!dataFetched) {
      fetch('https://gorest.co.in/public/v2/users')
        .then(response => response.json())
        .then(data => {
          console.log('Data fetched:', data);
          setData(data);
          setDataFetched(true);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch data</button>
      {/* {dataFetched && (
        <div>
          <p>Data fetched successfully:</p>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )} */}
    </div>
  );
}