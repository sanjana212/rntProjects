import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import EditRowModal from './EditRowModal';

const MyTable = () => {
  const [rowData, setRowData] = React.useState([
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
  ]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);

  const handleEditClick = (row) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  const handleRowUpdate = (updatedRow) => {
    setRowData((prevState) =>
      prevState.map((row) =>
        row.id === updatedRow.id ? updatedRow : row
      )
    );
  };

  const handleModalClose = () => {
    setSelectedRow(null);
    setIsModalOpen(false);
  };

  const columnDefs = [
    { field: 'name' },
    { field: 'age' },
    {
      headerName: '',
      cellRendererFramework: (params) => (
        <button onClick={() => handleEditClick(params.data)}>Edit</button>
      ),
    },
  ];

  return (
    <>
      <div
        className="ag-theme-alpine"
        style={{ height: 300, width: 600 }}
      >
        <AgGridReact rowData={rowData} columnDefs={columnDefs} />
      </div>
      {isModalOpen && (
        <EditRowModal
          rowData={selectedRow}
          onRowUpdate={handleRowUpdate}
          onCloseModal={handleModalClose}
        />
      )}
    </>
  );
};

export default MyTable;