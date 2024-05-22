import React from 'react'
import { useState, useEffect } from 'react'

const NxtTable = () => {


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
    console.log('data==>:',data);
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
    const formFields = [
        {
            label: 'formNo',
            srNo: 1,
            record1: 'LifeData_002.jpg',
            regexInput: <input name='formNo' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='formNo' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='formNo' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />

        },
        {
            label: 'recordNo',
            srNo: 2,
            record2: 'L_I@55501',
            input: <input name='recordNo' />,
            regexInput: <input name='recordNo' id='regex' onChange={(e) => setRegex(e.target.value)} />,
            lengthInput: <input name='recordNo' id='length' onChange={(e) => setLength(e.target.value)} />,
            expectedPatternInput: <input name='recordNo' id='expectedPattern' onChange={(e) => setExpectedPattern(e.target.value)} />

        },
        {
            label: 'invoiceNumber',
            srNo: 3,
            record3: 'L-Max@LifeIns_21-56000',
            regexInput: <input name='invoiceNumber' id='regex' onChange={(e) => setRegex(e.target.value)} />,
            lengthInput: <input name='invoiceNumber' id='length' onChange={(e) => setLength(e.target.value)} />,
            expectedPatternInput: <input name='invoiceNumber' id='expectedPattern' onChange={(e) => setExpectedPattern(e.target.value)} />

        },

        {
            label: 'dateOfPurchase',
            srNo: 4,
            record4: '1/4/2022',
            regexInput: <input name='dateOfPurchase' id='regex' onChange={(e) => setRegex(e.target.value)} />,
            lengthInput: <input name='dateOfPurchase' id='length' onChange={(e) => setLength(e.target.value)} />,
            expectedPatternInput: <input name='dateOfPurchase' id='expectedPattern' onChange={(e) => setExpectedPattern(e.target.value)} />

        },
        {
            label: 'Customer ID',
            srNo: 5,
            record5: 'ZXN9CUF',
            regexInput: <input name='Customer ID' id='regex' onChange={(e) => setRegex(e.target.value)} />,
            lengthInput: <input name='Customer ID' id='length' onChange={(e) => setLength(e.target.value)} />,
            expectedPatternInput: <input name='Customer ID' id='expectedPattern' onChange={(e) => setExpectedPattern(e.target.value)} />

        },
        {
            label: 'File Number',
            srNo: 6,

            regexInput: <input name='File Number' id='regex' onChange={(e) => setRegex(e.target.value)} />,
            lengthInput: <input name='File Number' id='length' onChange={(e) => setLength(e.target.value)} />,
            expectedPatternInput: <input name='File Number' id='expectedPattern' onChange={(e) => setExpectedPattern(e.target.value)} />

        },
        {
            label: 'Policy Holder Name',
            srNo: 7,

            regexInput: <input name='Policy Holder Name' id='regex' onChange={(e) => setRegex(e.target.value)} />,
            lengthInput: <input name='Policy Holder Name' id='length' onChange={(e) => setLength(e.target.value)} />,
            expectedPatternInput: <input name='Policy Holder Name' id='expectedPattern' onChange={(e) => setExpectedPattern(e.target.value)} />

        },
        {
            label: 'Policy Holder Address',
            srNo: 8,
            regexInput: <input name='Policy Holder Address' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Policy Holder Address' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Policy Holder Address' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        }, {
            label: 'Policy Holder City',
            srNo: 9,
            regexInput: <input name='Policy Holder City' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Policy Holder City' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Policy Holder City' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Policy Holder Zip Code',
            srNo: 10,
            regexInput: <input name='Policy Holder Zip Code' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Policy Holder Zip Code' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Policy Holder Zip Code' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
          
        },
        {
            label: 'Policy Holder Phone',
            srNo: 11,
            regexInput: <input name='Policy Holder Phone' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Policy Holder Phone' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Policy Holder Phone' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Policy Holder Email',
            srNo: 12,
            regexInput: <input name='Policy Holder Email' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Policy Holder Email' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Policy Holder Email' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Policy Holder DOB',
            srNo: 12,
            record10: 'CA',
            regexInput: <input name='Policy Holder DOB' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Policy Holder DOB' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Policy Holder DOB' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Education',
            srNo: 14,
            regexInput: <input name='Education' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Education' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Education' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Nominee Name',
            srNo: 15,
            regexInput: <input name='Nominee Name' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Nominee Name' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Nominee Name' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Nominee Address',
            srNo: 16,
            regexInput: <input name='Nominee Address' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Nominee Address' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Nominee Address' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Nominee City',
            srNo: 17,
            regexInput: <input name='Nominee City' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Nominee City' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Nominee City' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Nominee State',
            srNo: 10,
            regexInput: <input name='Nominee State' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Nominee State' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Nominee State' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Nominee Zip Code',
            srNo: 18,
            regexInput: <input name='Nominee Zip Code' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='foNominee Zip Code' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='formNominee Zip Code' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        }, {
            label: 'Relation with Nominee',
            srNo: 19,
            regexInput: <input name='Relation with Nominee' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Relation with Nominee' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Relation with Nominee' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Chest',
            srNo: 20,
            regexInput: <input name='Chest' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Chest' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Chest' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Height',
            srNo: 21,
            regexInput: <input name='Height' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Height' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='formNo' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Weight',
            srNo: 22,
            regexInput: <input name='Weight' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Weight' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Weight' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: ' Blood Group',
            srNo: 23,
            regexInput: <input name=' Blood Group' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name=' Blood Group' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name=' Blood Group' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Policy Number',
            srNo: 24,
            regexInput: <input name='Policy Number' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Policy Number' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Policy Number' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Reference Number',
            srNo: 25,
            regexInput: <input name='Reference Number' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Reference Number' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Reference Number' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Agent Name',
            srNo: 26,
            regexInput: <input name='Agent Name' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Agent Name' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Agent Name' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Agent Address',
            srNo: 27,

            regexInput: <input name='Agent Address' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Agent Address' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Agent Address' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Agent City',
            srNo: 28,
            regexInput: <input name='Agent City' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Agent City' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Agent City' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Agent State',
            srNo: 29,
            regexInput: <input name='Agent State' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Agent State' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Agent State' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Agent Zip Code',
            srNo: 30,
            regexInput: <input name='Agent Zip Code' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Agent Zip Code' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Agent Zip Code' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Agent Code',
            srNo: 31,
            regexInput: <input name='Agent Code' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Agent Code' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Agent Code' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Agent License Number',
            srNo: 32,
            regexInput: <input name='Agent License Number' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Agent License Number' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Agent License Number' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Plan Name',
            srNo: 33,
            regexInput: <input name='Plan Name' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Plan Name' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Plan Name' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Plan Code',
            srNo: 34,
            regexInput: <input name='Plan Code' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Plan Code' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Plan Code' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Sum of Insured',
            srNo: 35,
            regexInput: <input name='Sum of Insured' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Sum of Insured' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Sum of Insured' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Period of Insurance',
            srNo: 36,
            regexInput: <input name='Period of Insurance' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Period of Insurance' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Period of Insurance' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Does the life to be insured consume Alcohol/ Cigarettes/bidis or tobacco in any form?',
            srNo: 37,

            regexInput: <input name='formNo' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='formNo' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='formNo' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Is the life to be insured currently taking any medication or drug?',
            srNo: 38,
            regexInput: <input name='formNo' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='formNo' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='formNo' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Has the life to be insured ever suffered or is suffering from?',
            srNo: 39,
            regexInput: <input name='formNo' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='formNo' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='formNo' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        }, {
            label: 'Hypertension/high blood pressure',
            srNo: 40,
            regexInput: <input name='formNo' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='formNo' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='formNo' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Diabetes or raised blood sugar?',
            srNo: 41,
            regexInput: <input name='formNo' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='formNo' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='formNo' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Cardiovascular disease, Palpitations, Heart attack, stroke, chest pain?',
            srNo: 42,

            regexInput: <input name='formNo' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='formNo' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='formNo' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Genitourinary diseases e.g. Kidney disorder, Urine abnormality, renal stones or genital organ disorder?',
            srNo: 43,
            regexInput: <input name='formNo' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='formNo' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='formNo' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Has the life to be insured ever been tested positive for HIV/ AIDS, hepatitis B or C or any sexually transmitted disease?',
            srNo: 44,
            regexInput: <input name='formNo' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='formNo' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='formNo' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Is the life to be insured currently covered under any health insurance policy with any other company?  ',
            srNo: 45,

            regexInput: <input name='formNo' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='formNo' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='formNo' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Has the life to be insured ever been involved or in planning to pursue any?',
            srNo: 46,
            regexInput: <input name='formNo' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='formNo' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='formNo' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Does the life to be insured wear glasses?',
            srNo: 47,
            regexInput: <input name='formNo' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='formNo' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='formNo' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Payment Option',
            srNo: 48,
            regexInput: <input name='Payment Option' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Payment Option' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Payment Option' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Premium',
            srNo: 49,

            regexInput: <input name='Premium' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Premium' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Premium' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Discount',
            srNo: 50,
            regexInput: <input name='Discount' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Discount' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Discount' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Total Amount',
            srNo: 51,
            record10: 'CA',
            regexInput: <input name='Total Amount' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Total Amount' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Total Amount' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Card Type',
            srNo: 52,

            regexInput: <input name='Card Type' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Card Type' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Card Type' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Card Number',
            srNo: 53,
            regexInput: <input name='Card Number' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Card Number' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Card Number' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Expiry Date',
            srNo: 54,
            regexInput: <input name='Expiry Date' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Expiry Date' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Expiry Date' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Card Holder Name',
            srNo: 55,

            regexInput: <input name='Card Holder Name' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Card Holder Name' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Card Holder Name' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Transaction ID',
            srNo: 56,

            regexInput: <input name='Transaction ID' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Transaction ID' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Transaction ID' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
        {
            label: 'Remark',
            srNo: 57,

            regexInput: <input name='Remark' id='regex' onChange={(e) => { setRegex(e.target.value); handleInputChange(e) }} />,
            lengthInput: <input name='Remark' id='length' onChange={(e) => { setLength(e.target.value); handleInputChange(e); setmyinputObj({ ...myinputObj, length: e.target.value }) }} />,
            expectedPatternInput: <input name='Remark' id='expectedPattern' onChange={(e) => { setExpectedPattern(e.target.value); setmyinputObj({ ...myinputObj, expectedPattern: e.target.value }); handleInputChange(e) }} />
        },
    ]
    const [fieldData, setFieldData] = useState(formFields);
    //console.log('inputObj:=>', inputObj)
    const handleSubmit = () => {
       
    }

    return (
        <div className='container mt-5'>
            <table >
                <tr>
                    <th>Sr.no.</th>
                    <th>label</th>
                    <th>Regex</th>
                    <th>Length</th>
                    <th>Expected Pattern</th>
                </tr>
                {
                    fieldData.map(fields => {
                        return (
                            <tr>
                                <td>{fields.srNo}</td>
                                <td>{fields.label}</td>
                                <td>{fields.regexInput}</td>
                                <td>{fields.lengthInput}</td>
                                <td>{fields.expectedPatternInput}</td>
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
export default NxtTable