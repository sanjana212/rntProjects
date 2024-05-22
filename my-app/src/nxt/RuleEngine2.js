import React from 'react'

import { useState, useEffect } from 'react';
import './RuleEngine.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { Url } from '../../Constants/ApiUrlConstant';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const RuleEngine2 = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    };

    const handleClose = () => {
        setShow(false)
    }
    let inputObject1;


    const [regex, setRegex] = useState({});
    const [length, setLength] = useState({});
    const [expectedPattern, setExpectedPattern] = useState({});
    const [myinputObj, setmyinputObj] = useState({
        regex,
        length,
        expectedPattern
    });
    const [editData, setEditData] = useState({
        formNo: {
            Regex: '',
            Length: '',
            Expected: ''
        },
        recordNo: {},
        invoiceNo: {},
        dateOfPurchase: {},
        customerId: {},
        fileNo: {},
        policyHolderName: {},
        policyHolderAddress: {},
        policyHolderCity: {},
        policyHolderState: {},
        policyHolderZip: {},
        policyHolderPhone: {},
        phEmail: {},
        phDob: {},
        education: {},
        nomineeName: {},
        nomineeAddress: {},
        nomineeCity: {},
        nomineeState: {},
        nomineeZip: {},
        relationWithNominee: {},
        chest: {},
        height: {},
        weight: {},
        bloodGroup: {},
        policyNo: {},
        referenceNo: {},
        agentName: {},
        agentAddres: {},
        agentCity: {},
        agentState: {},
        agentZip: {},
        agentCode: {},
        agnetLicenseNo: {},
        planeName: {},
        planeCode: {},
        sumOfInsured: {},
        periodOfInsurance: {},
        consumeAlcohol: {},
        anyMedication: {},
        bloodPressure: {},
        diabeties: {},
        cardiovascular: {},
        kidneyDisorder: {},
        stdDisease: {},
        policyWithOtherCompany: {},
        everBeenInvolved: {},
        wearGlasses: {},
        paymentOption: {},
        premium: {},
        discount: {},
        totalAmount: {},
        cardType: {},
        cardNo: {},
        expiryDate: {},
        cardHolderName: {},
        transactionId: {},
        remark: {},
    })
    const [data, setData] = useState([]);
    console.log('data==>:', data);
    console.log("inputObject1", myinputObj);

    const handleInputChange = (e) => {
        debugger;
        const { name, id, value } = e.target;
        setmyinputObj({ ...myinputObj, regex: e.target.value })
        if (id == "regex") {
            setEditData(editData[name] = {
                ...editData[name],
                Regex: value,

            })
        }
        if (id == "length") {
            setEditData(editData[name] = {
                ...editData[name],
                Length: value,

            })
        }
        if (id == "expectedPattern") {
            setEditData(editData[name] = {
                ...editData[name],
                Expected: value,

            })
        }

        // setEditData((prevState) => {
        //     console.log("helllo",myinputObj);
        //     return { ...prevState, [name]: myinputObj?.regex }
        // })

        //      let obj = editData[name];
        // setEditData({
        //     ...editData,
        //     [name]: obj,
        //   });
    }
    console.log('inputObject1==>:', inputObject1)
    console.log('EditDataOnChange*==>:', editData);
    //console.log(editData.recordNo);
    // console.log('Edit==>:', editData);
    useEffect(() => {
        fetch(Url.ruleEngine, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + sessionStorage.getItem("token")
            }
        })
            .then((response) => response.json())
            .then((res) => console.log('response==>:', res)
            )
    }, [])
    const formFields = [
        {
            id: 1,
            label: 'formNo',
            srNo: 1,
            record2: 'L_I@55501',
            regexInput: "",
            lengthInput: "",
            expectedPatternInput: "",

        },
        {
            id: 2,
            label: 'recordNo',
            srNo: 2,
            record2: 'L_I@55501',
            regexInput: "",
            lengthInput: "",
            expectedPatternInput: "",

        },
        {
            id: 1,
            label: 'invoiceNo',
            srNo: 3,
            record2: 'L_I@55501',
            regexInput: "",
            lengthInput: "",
            expectedPatternInput: "",

        },
        {
            id: 1,
            label: 'dateOfPurchase',
            srNo: 4,
            record2: 'L_I@55501',
            regexInput: "",
            lengthInput: "",
            expectedPatternInput: "",

        },
        
       
            





    ]
    const [fieldData, setFieldData] = useState(formFields);
    //console.log('inputObj:=>', inputObj)

    const handleSubmit = () => {

    }

    return (
        <div className='table-container container-fluid'>

            <table className='table'>
                <tr className='table-tr-header'>
                    <th>Sr.no.</th>
                    <th>label</th>
                    <th>Regex</th>
                    <th>Length</th>
                    <th>Expected Pattern</th>
                    <th>Actions</th>
                    <th> <div>  <button onClick={handleShow} className='btn btn-primary'>ADD</button></div></th>
                    {
                        show ? <Modal show={show} onHide={handleClose}
                            size="lg"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    Project
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className='d-flex flex-wrap'>
                                   
                                    <div>
                                        <label for="cars">Label:</label>

                                        <select name="cars" id="cars">
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                    <div className='ml-4 mb-5' >
                                        <label htmlFor="">Regex: </label>
                                        <input type="text" />
                                    </div>

                                    <div className='ml-4 '>
                                        <label htmlFor="">length : </label>
                                        <input type="text" />
                                    </div>
                                    <div>
                                        <label className='ml-4 ' htmlFor=""> Expected Pattern : </label>
                                        <input type="text" />
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Submit
                                </Button>
                            </Modal.Footer>
                        </Modal> : null
                    }
                </tr>
                {
                    fieldData.map((fields, index) => {
                        return (
                            <tr className='table-tr'>
                                <td>{fields.srNo}</td>
                                <td>{fields.label}</td>

                                {/* <td>{fields.regexInput}</td> */}
                                <td>
                                    <input
                                        className='table-input'
                                        name='formNo'
                                        id='regex'
                                        onChange={(e) => {
                                            setRegex(e.target.value);
                                            handleInputChange(e)
                                        }}
                                        value="s"
                                    />
                                </td>
                                {/* <td>{fields.lengthInput}</td> */}
                                <td>
                                    <input
                                        className='table-input'
                                        name='formNo'
                                        id='regex'
                                        onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }}
                                        value="s"
                                    />
                                </td>
                                {/* <td>{fields.expectedPatternInput}</td> */}
                                <td>
                                    <input
                                        className='table-input'
                                        name='formNo'
                                        id='regex'
                                        onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }}
                                        value="s"
                                    />
                                </td>
                                <td>

                                    <div className='ButtonDiv ButtonDivTable'>
                                        <NavLink to="HomePage/Edit"><button ><i className="fa fa-pencil text-info" aria-hidden="true"></i></button></NavLink>
                                        <NavLink to="HomePage/View"><button><i className="fa fa-eye text-info" aria-hidden="true"></i></button></NavLink>
                                        <button style={{ opacity: '0.4', pointerEvents: "none" }} ><i className="fa fa-trash-o text-danger" aria-hidden="true"></i></button>
                                    </div>

                                </td>
                                <td></td>
                            </tr>

                        )
                    })
                }

            </table>
            <div className='d-flex  justify-content-end'>
                <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}
export default RuleEngine2;

