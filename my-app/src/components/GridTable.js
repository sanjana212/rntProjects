import React, { useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import { NavLink } from 'react-router-dom';
const GridTable = () => {
    const data = [
        { Srno:1,name: "sanjana", age: 12 },
        { Srno:2,name: "rupali", age: 10 },
        { Srno:3,name: "kshitija", age: 11 },
        { Srno:4,name: "pallavi", age: 20 },
        { Srno:5,name: "kaif", age: 55 },
        { Srno:6,name: "makarand", age: 10 },
        {Srno:7, name: "pooja", age: 12 },
        { Srno:8,name: "pallavi", age: 20 },
        { Srno:9,name: "kaif", age: 55 },
        { Srno:10,name: "makarand", age: 10 },
        { Srno:11,name: "pooja", age: 12 }
    ];
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const selectedDataRef = useRef([]);
    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi)
    }
    const selectionChanged = () => {
        const selectedRows = gridApi.getSelectedRows();
        selectedDataRef.current = selectedRows;
        console.log(selectedRows);
    }
    const columns = [
        {
            headerName: 'Srno',
            field: 'Srno',
         sortable:false,
            width:50
        },
        {
            headerName: "name",
            field: 'name',
            checkboxSelection: true,
            sortable:true,

            headerCheckboxSelection: true,
            headerCheckboxSelectionCurrentPageOnly: true,
            width:50

        },
        {
            headerName: "age",
            field: 'age',
          
            width:50

        },
        {
            headerName: "Actions",
            cellRenderer: "editButtonRenderer",
         
            editable: false,
            resizable: false,
            sortable: false,
            filter: false,
            width:50

        },
    ];
    const gridOptions = {
        // ... other grid options ...
        comparator: function (valueA, valueB, nodeA, nodeB, isInverted) {
          // If sorting the serial number column, return 0 to keep items in their original order
          if (nodeA.column.getColId() === 'Srno') {
            return 0;
          }
          // Otherwise, let AG Grid handle the default sorting behavior
          return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
        },
      };
    // const data = [
    //     { id: 1, name: "John" },
    //     { id: 2, name: "Jane" },
    //   ];

    const EditButtonRenderer = () => {
        return <button onClick={handleEditClick}><i className="fa fa-eye text-info" aria-hidden="true"></i></button>;
    };
    const defaultColDef = {
        sortable: true,
        editable: true,
        filter: true,
    }
    const frameworkComponents = {
        editButtonRenderer: EditButtonRenderer,
    };

    const handleEditClick = (params) => {debugger
        const currentData = params.node.data;
        const updatedData = { ...currentData };
        updatedData.name = "New Name";
        params.api.updateRowData({ update: [updatedData] });
    };
    return (
        <div className="ag-theme-alpine container mt-5">
            <AgGridReact
                rowData={data}
                columnDefs={columns}
                // defaultColDef={defaultColDef}
                pagination={true}
                frameworkComponents={frameworkComponents}
                rowSelection={'multiple'}
                paginationAutoPageSize={true}
                onGridReady={onGridReady}
                onSelectionChanged={selectionChanged}
                paginationPageSize={5}
                gridOptions={gridOptions}

            />
        </div>
    )
};
export default GridTable;