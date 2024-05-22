import { useState } from 'react';
import Form from './Form';
const FormTable = (props) => {
   
    
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <input className='form-control' placeholder='Search'/>
                </div>
                <div className='col'>
                    <button className='btn btn-primary'>Search</button>
                </div>
            </div>
            <table className='table table-striped '>

                <tr className='bg-dark text-light'>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Skills</th>
                    <th>Language</th>
                </tr>


                {
                    props.data.map((entry, index) => {
                        return (
                            <tr key={index}>
                                <td>{entry.name}</td>
                                <td>{entry.email}</td>
                                <td>{entry.gender}</td>
                                <td>
                                    {entry.mn}
                                </td>
                                <td>
                                    {entry.m}
                                </td>
                                <td>
                                    {entry.language}
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}
export default FormTable;