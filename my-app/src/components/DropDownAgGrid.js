import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

const DropDownAgGrid= ({ data }) => {
  const [sortValue, setSortValue] = useState('');

  const handleSortChange = (event) => {
    setSortValue(event.target.value);
  };

  const rowData = data.sort((a, b) => {
    if (sortValue === 'asc') {
      return a.value - b.value;
    } else if (sortValue === 'desc') {
      return b.value - a.value;
    } else {
      return 0;
    }
  });

  return (
    <AgGridReact rowData={rowData}>
      <AgGridColumn
        field="name"
        headerName="Name"
        sortable={true}
        filter={true}
      />
      <AgGridColumn
        field="value"
        headerName="Value"
        sortable={true}
        filter={true}
        cellRendererFramework={({ value }) => (
          <select value={sortValue} onChange={handleSortChange}>
            <option value="">Select an option</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        )}
      />
    </AgGridReact>
  );
};

export default DropDownAgGrid;