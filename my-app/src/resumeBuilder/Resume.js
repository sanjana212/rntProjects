import React, { useState } from 'react'
import './Resume.css';
import { ImCross } from "react-icons/im";
import { BsPlusLg } from "react-icons/bs";
import Modal from 'react-modal';
import Select from 'react-select';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];
const Resume = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [select, setSelect] = useState(null);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <div className='container'>
                <div>
                    <p style={{ color: '#06aeff' }}>Personal Summary</p>
                    <p>I am a highly competent IT professional with a proven track record in designing websites, networking, and managing databases. I have strong technical skills as well as excellent interpersonal skills, enabling me to interact with a wide range of clients. I am eager to be challenged in order to grow and further improve my IT skills
                    </p>
                </div>
                <hr />

                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ color: '#06aeff' }}>Skills & Expertise</p>
                        <div className='addBtn'><BsPlusLg style={{ color: '#06aeff' }} onClick={openModal} />Add</div>
                        <Modal
                            isOpen={modalIsOpen}
                            // onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"

                        >
                            <p style={{ color: '#06aeff' }}>Add skills</p>
                            <div>
                                <Select
                                    defaultValue={select}
                                    options={options}
                                    onChange={(e) => setSelect(e.target.value)}
                                    className='selectBox'
                                />
                            </div>

                        </Modal>

                    </div>
                    <table style={{ borderRadius: '10px' }}>
                        <tr style={{ background: ' #06aeff', color: 'white' }}>
                            <th>Sr No</th>
                            <th>Categories</th>
                            <th>Major Skills</th>
                            <th>Minor Skills</th>
                        </tr>
                        <tr>

                        </tr>
                        <tr>

                        </tr>
                    </table>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Resume