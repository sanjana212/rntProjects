//import {fontAwesomeIcons} from  "@fortawesome/free-regular-svg-icons"
/*
await axios.post('https://jsonplaceholder.typicode.com/users',users);
           const updatedData=await axios.get('https://jsonplaceholder.typicode.com/users');
           const index=users.findIndex((user=>user.id===users.id));
           users[index]=users;
            setUsers([...users]);
            setIsModalOpen(false);
            console.log('users==>:',users)
           
            console.log('updatedData==>:',updatedData)
*/
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Modal from './Modal';
//import {useParams} from 'react-router-dom'
import { useEffect } from 'react';
const Table = ({ users, setUsers, handleDelete }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState({});


  const handleView = (users) => {
    setSelectedData(users);
    setIsModalOpen(true);

  }
  //   const handleEdit = () => {

  //     setSelectedData(users)
  //     setIsModalOpen(true);

  //   };

  const handleEdit = (userId) => {
    console.log("user", user);
    const user = users.filter((x) => x.id === userId)[0];
    setSelectedData(user);
    setIsModalOpen(true);
  };



  const handleAdd = () => {
    setSelectedData({});
    setIsModalOpen(true);
  }
  //   const handleSave=async(user)=>{
  //     try{
  //      const updatedData= await axios.post('https://jsonplaceholder.typicode.com/users',users);

  //      setUsers([...users,user])
  //       setIsModalOpen(false)

  //console.log('updatedData==>:',updatedData)
  //console.log('newData==>:',newData)

  //     }catch(error){
  //         console.error(error)
  //     }

  // }

  const handleSave = async (user) => {
    try {
      const isAlreadyExist = users.filter((x) => x.id === user.id)[0];

      if (isAlreadyExist) {
        const index = users.indexOf(isAlreadyExist);
        const newUsers = [...users];
        newUsers[index] = user;
        setUsers(newUsers);
      } else {
        setUsers([...users, user]);
      }
      setIsModalOpen(false);

      //console.log('updatedData==>:',updatedData)
      //console.log('newData==>:',newData)
    } catch (error) {
      console.error(error);
    }
  };
  const handleClose = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="container">
      <table className="table table-striped">
        <tr className='t-head '>
          <th>ID</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Email</th>
          <th> View Edit Dlt</th>
        </tr>
        {
          users.map((data, i) => {
            return (
              <tr key={data.id} {...data} >
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>

                  <i className="fa fa-eye text-primary" onClick={() => { handleView(data) }}></i>
                  <i className="fa fa-pencil text-dark" onClick={() => handleEdit(data)}></i>
                  <i
                    className="fa fa-trash text-danger" onClick={() => { handleDelete(data.id) }}>
                  </i>
                </td>

              </tr>

            )
          })
        }
      </table>

      <div className='d-grid'><button className='btn btn-dark text-light' onClick={handleAdd}>Add</button></div>
      {
        isModalOpen && (
          <Modal
            data={selectedData}
            onSave={handleSave}
            onClose={handleClose}

          />
        )
      }
    </div>
  )
}

export default Table;