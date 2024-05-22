import React from 'react';

const EditRowModal = ({ rowData, onRowUpdate, onCloseModal }) => {
  const [editedRowData, setEditedRowData] = React.useState(rowData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedRowData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRowUpdate(editedRowData);
    onCloseModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Row</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={editedRowData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              name="age"
              value={editedRowData.age}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditRowModal;