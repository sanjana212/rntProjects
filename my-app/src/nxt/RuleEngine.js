import React from 'react'

import { useState, useEffect ,useMemo,useCallback,useRef} from 'react';
// import './RuleEngine.css';
import { NavLink, useNavigate } from 'react-router-dom';
// import { Url } from '../../Constants/ApiUrlConstant';
// import './RuleEngine1.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
// import { NavLink, useNavigate } from 'react-router-dom';
import ReactModal from "react-modal";
import { Url } from '../../Constants/ApiUrlConstant';
import Lottie from "lottie-react";
// import './InformationList.css'

import CreateIcon from '../../Assets/Images/CreateIcon.svg'
import { AiOutlineClose } from 'react-icons/ai';
import { Button } from 'reactstrap';
import Delete from '../../Assets/Animations/Delete.json'
import Warning from '../../Assets/Animations/Warning.json'
import Loader from "../../Assets/Animations/Loader.json"
import Creatable from "react-select/creatable";
import Select from 'react-select';
import './RuleEngine1.css';
// const RuleEngine = () => {


//     let inputObject1;


//     const [regex, setRegex] = useState({});
//     const [length, setLength] = useState({});
//     const [expectedPattern, setExpectedPattern] = useState({});
//     const [myinputObj, setmyinputObj] = useState({
//         regex,
//         length,
//         expectedPattern
//     });
//     const [editData, setEditData] = useState({
//         formNo: {
//             Regex: '',
//             Length: '',
//             Expected: ''
//         },
//         recordNo: {},
//         invoiceNo: {},
//         dateOfPurchase: {},
//         customerId: {},
//         fileNo: {},
//         policyHolderName: {},
//         policyHolderAddress: {},
//         policyHolderCity: {},
//         policyHolderState: {},
//         policyHolderZip: {},
//         policyHolderPhone: {},
//         phEmail: {},
//         phDob: {},
//         education: {},
//         nomineeName: {},
//         nomineeAddress: {},
//         nomineeCity: {},
//         nomineeState: {},
//         nomineeZip: {},
//         relationWithNominee: {},
//         chest: {},
//         height: {},
//         weight: {},
//         bloodGroup: {},
//         policyNo: {},
//         referenceNo: {},
//         agentName: {},
//         agentAddres: {},
//         agentCity: {},
//         agentState: {},
//         agentZip: {},
//         agentCode: {},
//         agnetLicenseNo: {},
//         planeName: {},
//         planeCode: {},
//         sumOfInsured: {},
//         periodOfInsurance: {},
//         consumeAlcohol: {},
//         anyMedication: {},
//         bloodPressure: {},
//         diabeties: {},
//         cardiovascular: {},
//         kidneyDisorder: {},
//         stdDisease: {},
//         policyWithOtherCompany: {},
//         everBeenInvolved: {},
//         wearGlasses: {},
//         paymentOption: {},
//         premium: {},
//         discount: {},
//         totalAmount: {},
//         cardType: {},
//         cardNo: {},
//         expiryDate: {},
//         cardHolderName: {},
//         transactionId: {},
//         remark: {},
//     })
//     const [data, setData] = useState([]);
//     console.log('data==>:', data);
//     console.log("inputObject1", myinputObj);

//     const handleInputChange = (e) => {
//         debugger;
//         const { name, id, value } = e.target;
//         setmyinputObj({ ...myinputObj, regex: e.target.value })
//         if (id == "regex") {
//             setEditData(editData[name] = {
//                 ...editData[name],
//                 Regex: value,

//             })
//         }
//         if (id == "length") {
//             setEditData(editData[name] = {
//                 ...editData[name],
//                 Length: value,

//             })
//         }
//         if (id == "expectedPattern") {
//             setEditData(editData[name] = {
//                 ...editData[name],
//                 Expected: value,

//             })
//         }

//         // setEditData((prevState) => {
//         //     console.log("helllo",myinputObj);
//         //     return { ...prevState, [name]: myinputObj?.regex }
//         // })

//         //      let obj = editData[name];
//         // setEditData({
//         //     ...editData,
//         //     [name]: obj,
//         //   });
//     }
//     console.log('inputObject1==>:', inputObject1)
//     console.log('EditDataOnChange*==>:', editData);
//     //console.log(editData.recordNo);
//     // console.log('Edit==>:', editData);
//     useEffect(()=>{
//         fetch(Url.ruleEngine,{
//             method:"GET",
//             headers:{
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//                 Authorization: "Bearer " + sessionStorage.getItem("token")
//             }
//         })
//         .then((response)=>response.json())
//         .then((res)=>console.log('response==>:',res)
//         )
//     },[])
//     const formFields = [
//                 {
//             id:1,
//             label: 'formNo',
//             srNo: 1,
//             record2: 'L_I@55501',
//             regexInput:"",
//             lengthInput:"",
//             expectedPatternInput:"",

//         },
//         {
//             id:2,
//             label: 'recordNo',
//             srNo: 2,
//             record2: 'L_I@55501',
//             regexInput:"",
//             lengthInput:"",
//             expectedPatternInput:"",

//         },
//         {
//             id:1,
//             label: 'invoiceNo',
//             srNo: 3,
//             record2: 'L_I@55501',
//             regexInput:"",
//             lengthInput:"",
//             expectedPatternInput:"",

//         },
//         {
//             id:1,
//             label: 'dateOfPurchase',
//             srNo: 4,
//             record2: 'L_I@55501',
//             regexInput:"",
//             lengthInput:"",
//             expectedPatternInput:"",

//         },
//         {
//             id:1,
//             label: 'recordNo',
//             srNo: 5,
//             record2: 'L_I@55501',
//             regexInput:"",
//             lengthInput:"",
//             expectedPatternInput:"",

//         },
//         {
//             id:1,
//             label: 'recordNo',
//             srNo: 6,
//             record2: 'L_I@55501',
//             regexInput:"",
//             lengthInput:"",
//             expectedPatternInput:"",

//         },
//         {
//             id:1,
//             label: 'recordNo',
//             srNo: 6,
//             record2: 'L_I@55501',
//             regexInput:"",
//             lengthInput:"",
//             expectedPatternInput:"",

//         },
//         {
//             id:1,
//             label: 'recordNo',
//             srNo: 2,
//             record2: 'L_I@55501',
//             regexInput:"",
//             lengthInput:"",
//             expectedPatternInput:"",

//         },
//         {
//             id:1,
//             label: 'recordNo',
//             srNo: 2,
//             record2: 'L_I@55501',
//             regexInput:"",
//             lengthInput:"",
//             expectedPatternInput:"",

//         },
//         {
//             id:1,
//             label: 'recordNo',
//             srNo: 2,
//             record2: 'L_I@55501',
//             regexInput:"",
//             lengthInput:"",
//             expectedPatternInput:"",

//         },
//         {
//             id:1,
//             label: 'recordNo',
//             srNo: 2,
//             record2: 'L_I@55501',
//             regexInput:"",
//             lengthInput:"",
//             expectedPatternInput:"",

//         },
//         {
//             id:1,
//             label: 'recordNo',
//             srNo: 2,
//             record2: 'L_I@55501',
//             regexInput:"",
//             lengthInput:"",
//             expectedPatternInput:"",

//         },
//         {
//             id:1,
//             label: 'recordNo',
//             srNo: 2,
//             record2: 'L_I@55501',
//             regexInput:"",
//             lengthInput:"",
//             expectedPatternInput:"",

//         },








//     ]
//     const [fieldData, setFieldData] = useState(formFields);
//     //console.log('inputObj:=>', inputObj)

//     const handleSubmit = () => {

//     }

//     return (
//         <div className='table-container '>
//             <table className='table'>
//                 <tr className='table-tr-header'>
//                     <th>Sr.no.</th>
//                     <th>label</th>
//                     <th>Regex</th>
//                     <th>Length</th>
//                     <th>Expected Pattern</th>
//                     <th>Actions</th>
//                 </tr>
//                 {
//                     fieldData.map((fields, index) => {
//                         return (
//                             <tr className='table-tr'>
//                                 <td>{fields.srNo}</td>
//                                 <td>{fields.label}</td>

//                                 {/* <td>{fields.regexInput}</td> */}
//                                 <td>
//                                     <input
//                                         className='table-input'
//                                         name='formNo'
//                                         id='regex'
//                                         onChange={(e) => {
//                                             setRegex(e.target.value);
//                                             handleInputChange(e)
//                                         }}
//                                         value="s"
//                                     />
//                                 </td>
//                                 {/* <td>{fields.lengthInput}</td> */}
//                                 <td>
//                                     <input
//                                         className='table-input'
//                                         name='formNo'
//                                         id='regex'
//                                         onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }}
//                                         value="s"
//                                     />
//                                 </td>
//                                 {/* <td>{fields.expectedPatternInput}</td> */}
//                                 <td>
//                                     <input
//                                         className='table-input'
//                                         name='formNo'
//                                         id='regex'
//                                         onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }}
//                                         value="s"
//                                     />
//                                 </td>
//                                 <td>

//                                     <div className='ButtonDiv ButtonDivTable'>
//                                         <NavLink to="HomePage/Edit"><button ><i className="fa fa-pencil text-info" aria-hidden="true"></i></button></NavLink>
//                                         <NavLink to="HomePage/View"><button><i className="fa fa-eye text-info" aria-hidden="true"></i></button></NavLink>
//                                         <button style={{ opacity: '0.4', pointerEvents: "none" }} ><i className="fa fa-trash-o text-danger" aria-hidden="true"></i></button>
//                                     </div>

//                                 </td>
//                             </tr>

//                         )
//                     })
//                 }

//             </table>
//             <div className='d-flex  justify-content-end'>
//                 <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
//             </div>
//         </div>
//     )
// }
// export default RuleEngine;



const RuleEngine = () => {
    const [formId, setFormId] = useState();
    const [rowData, setRowData] = useState([]);
    const [apiChange , setApiChange] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [columnDefs] = useState([
        {
          field: 'Select Box',
          headerName: 'Sr.No',
          valueGetter: 'node.rowIndex+1',
          sortable: false,
          suppressMovable: true,
          flex: 1,
          width: 60,
          checkboxSelection: sessionStorage.getItem("role") == "NXT Super Admin",
          headerCheckboxSelection: sessionStorage.getItem("role") == "NXT Super Admin",
          headerCheckboxSelectionCurrentPageOnly: sessionStorage.getItem("role") == "NXT Super Admin",
          
        },
        {
          field: 'formNo', width: 227,
          suppressMovable: true,
          //cellStyle: { textTransform: 'uppercase' },
          sortable:true,
          sortingOrder:['asc','desc'],
          flex: 1,
        },
        {
          field: 'recordNo', width: 250,
          suppressMovable: true,
          flex: 1,
          sortable: true,
          sortingOrder: ['asc', 'desc'],
        },
        {
          field: 'invoiceNo', width: 275, tooltipField: 'locationAddress',
          tooltipComponentParams: { color: '#fff' },
          suppressMovable: true,
          flex: 1,
          sortable: true,
          sortingOrder: ['asc', 'desc'],
        },
        {
          field: 'dateOfPurchase', width: 260,
          suppressMovable: true,
          flex: 1,
          sortable: true,
          sortingOrder: ['asc', 'desc'],
        },
        // {
        //   headerName: 'createdBy',
        //   field: 'createdBy',
        //   width: 100,
        //    hide: true,
        //    suppressToolPanel: true
        // },
        {
          field: 'action',
          headerName: 'Action',
          valueGetter: 'node.rowIndex+1',
          sortable: false,
          suppressMovable: true,
          flex: 1,
          cellRenderer: (params) => {
            let opacity = '0.4';
            let pointer = "none";
            if (params.data.reportStatus == 'Complete') {
              opacity = '';
              pointer = "";
            }
            return (
              <div className='ButtonDiv ButtonDivTable'>
                <NavLink to="HomePage/Edit"><button onClick={GetRowDataForEdit}><i className="fa fa-pencil text-info" aria-hidden="true"></i></button></NavLink>
                <NavLink to="HomePage/View"><button onClick={GetRowDataForEdit}><i className="fa fa-eye text-info" aria-hidden="true"></i></button></NavLink>
                <button style={{ opacity : '0.4',pointerEvents : "none"}} onClick={DeleteData}><i className="fa fa-trash-o text-danger" aria-hidden="true"></i></button>
              </div>)
          }, width: 115,
        },
      ]);
      var filType = '';
      const defaultColDef = useMemo(() => {
        return {
          //   tooltipComponent: Tooltip,
          resizable: false,
          moveColumns: false,
          lockPinned: true,
        };
      }, []);
      const rowHeight = 30;
      const pagination = true;
      const onPageSizeChanged = useCallback(() => {
        var value = document.getElementById('page-size').value;
        gridRef.current.api.paginationSetPageSize(Number(value));
      }, []);
      const externalFilterChanged = useCallback((newValue) => {
        filType = newValue
        gridRef.current.api.onFilterChanged();
        if(gridRef?.current?.api?.rowRenderer?.allRowCtrls?.length > 0){
          let element = document.querySelector(".ag-overlay")
          document.querySelector(".ag-overlay-no-rows-wrapper").innerHTML = ""
          element.classList.add("ag-hidden")
          console.log("found");
        }
        else{
          let element = document.querySelector(".ag-overlay")
          document.querySelector(".ag-overlay-no-rows-wrapper").innerHTML = "No Record Found"
          element.classList.remove("ag-hidden")
          console.log("not found");
        }
      }, []);
      const isExternalFilterPresent = useCallback(() => {
        // if filType is not everyone, then we are filtering
        return filType.length > 0;
      }, []);
      const doesExternalFilterPass = useCallback(
        (node) => {
          if (filType === 'searchFil') {
            const formNo = node.data.formNo;
            const recordNo = node.data.recordNo;
            const invoiceNo = node.data.invoiceNo;
            const searchValue = document.getElementById('searchFil').value
            return (recordNo.includes(searchValue) || recordNo === searchValue) || (invoiceNo.includes(searchValue) || invoiceNo === searchValue) || (formNo.includes(searchValue) || formNo === searchValue)
          }
          return true;
        },
        [filType]
        );
        const GetRowData = useCallback(() => {
          const selectedNodes = gridRef.current.api.getSelectedNodes();
        const selectedData = selectedNodes.map(node => node.data.id);
        console.log("selD", selectedData);
        console.log("selN", selectedNodes[0].data);
        sessionStorage.setItem("insuredId", selectedNodes[0].data.insuredId);
        sessionStorage.setItem("pre", selectedNodes[0].data.insuredId);
      })
      const GetRowDataForEdit = useCallback(() => {
        const selectedNodes = gridRef.current.api.getSelectedNodes();
        const selectedData = selectedNodes.map(node => node.data.id);
        console.log("selD", selectedData);
        console.log("selN", selectedNodes[0].data);
        sessionStorage.setItem("formId", selectedNodes[0].data.formId);
        sessionStorage.setItem("Status", selectedNodes[0].data.fullName);
    
      })
      const DeleteData = useCallback(() => {
        const selectedNodes = gridRef.current.api.getSelectedNodes();
        const selectedData = selectedNodes.map(node => node.data.id);
        console.log("selD", selectedData);
        console.log("selN", selectedNodes[0].data);
        sessionStorage.setItem("formId", selectedNodes[0].data.formId);
        setFormId(selectedNodes[0].data.formId)
        handleOpenModal();
      })
      const getRowStyle = params => {
        console.log("params.node.corrected",params.data.corrected);
        if (params.data.corrected == "Completed") {
            return { background: '#EBFFDC' };
        }
    };
    const handleCloseModal = () => {
        setShowModal(false);
      }
    const handleOpenModal = () => {
        setShowModal(true);
      }
    const gridRef = useRef();
    console.log(rowData)
    function handleDelete() {
      handleOpenModal();
      GetRowData();
    }
   

    return (
       
<div className="ag-theme-alpine dashboardTable" >
            <AgGridReact
              ref={gridRef}
              rowData={apiChange != "" ? rowData : ""}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
             pagination={pagination}
            //   rowSelection={'multiple'}
            //   paginationPageSize={10}
            //   // suppressRowClickSelection={true}

              rowHeight={rowHeight}
              overlayLoadingTemplate={"No rows to show"}
            //   isExternalFilterPresent={isExternalFilterPresent}
            //   doesExternalFilterPass={doesExternalFilterPass}
            //   tooltipShowDelay={0}
            //   suppressColumnMoveAnimation={false}
            //   onGridReady={onGridReady}
            //   onSelectionChanged={selectionChanged}
            //   getRowStyle={getRowStyle}
              

            ></AgGridReact>
        </div>
    )
}
export default RuleEngine;