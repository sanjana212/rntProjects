import React, { useState, useEffect } from "react";
import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";
import Modal from "../components/Modal";
const UserManager = () => {
  const [users, setUsers] = React.useState([]);
  const [editIndex, setEditIndex] = React.useState(-1);
  const [addModal, setAddModal] = React.useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
 
  const handleReset=()=>{
    setSearchQuery('');
    setFilteredUsers([...users]);
  }
  const handleAdd = () => {
    setAddModal(true);
  };

  const getFilteredUsers = () => {
    return users.filter((user) =>
      user.username.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  useEffect(() => {
    setFilteredUsers(getFilteredUsers());
  }, [users]);

  const handleSearch = () => {
    setFilteredUsers(getFilteredUsers());
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleAddUser = (user) => {
    setUsers([...users, user]);
    setAddModal(false);
  };

  const handleUpdate = (user) => {
    console.log(editIndex, users);
    const newUser = [...users];
    newUser[editIndex] = user;
    setUsers(newUser);
    setEditIndex(-1);
  };

  const handleDelete = (user) => {
    const isSure = window.confirm(" Do you really want to delete this item ?");
    if (isSure) {
      const newUser = users.filter((u) => u !== user);
      setUsers(newUser);
    }
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-6">
          <input
            value={searchQuery}
            onChange={(e) =>{ setSearchQuery(e.target.value); handleSearch()}}
            className="form-control"
            placeholder="Search"
          />
        </div>
        <div className="col-2">
          <button onClick={handleSearch} className="btn btn-primary">
            Search
          </button>
        </div>
        <div className="col-2">
          <button onClick={handleReset} className="btn btn-primary">
            Reset
          </button>
        </div>
        <div className="col-2">
          <button onClick={handleAdd} className="btn btn-primary">
            Add
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <UserTable
            users={filteredUsers}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      </div>

      {editIndex !== -1 && (
        <Modal
          onClose={() => {
            setEditIndex(-1);
          }}
          title="Edit User"
        >
          <UserForm onSubmit={handleUpdate} intialUserData={users[editIndex]} />
        </Modal>
      )}
      {addModal && (
        <Modal
          onClose={() => {
            setAddModal(false);
          }}
          title="Add User"
        >
          <UserForm onSubmit={handleAddUser} />
        </Modal>
      )}
    </div>
  );
};

export default UserManager;
