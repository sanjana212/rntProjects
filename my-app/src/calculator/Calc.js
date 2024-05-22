import React, { useState } from 'react'
import './Calc.css';
import { easeInOut } from 'framer-motion';


const Calc = () => {
    const [value, setValue] = useState('');
  
    
    return (
        <div style={{ margin: '15px 100px 0px 100px', height: '570px', width: '291px', border: '2px solid black', background: 'black', color: 'white' }}>
            <div>
                <textarea value={value} type='text'  style={{  background: 'black', width: '285px', border: 'none', outline: 'none', color: 'white', fontSize: '50px', resize: 'none' }} />
            </div>
            <table style={{background:'#151313'}}>
                <tr>
                    <td><input value='AC' style={{color:'#81DAF5'}} onClick={e => setValue('')} /></td>
                    <td><input value='%' style={{color:'#81DAF5'}}  onClick={e => setValue(value + e.target.value)} /></td>
                    <td><input value='DE'style={{color:'#81DAF5'}}  onClick={e => setValue(value.slice(0,-1))} /></td>
                    <td><input value='/' style={{color:'#81DAF5'}}  onClick={e => setValue(value + e.target.value)} /></td>
                </tr>
                <tr>
                    <td><input value='7' onClick={e => setValue(value + e.target.value)} /></td>
                    <td><input value='8' onClick={e => setValue(value + e.target.value)} /></td>
                    <td><input value='9' onClick={e => setValue(value + e.target.value)} /></td>
                    <td><input value='*' style={{color:'#81DAF5'}}  onClick={e => setValue(value + e.target.value)} /></td>
                </tr>
                <tr>
                    <td><input value='4' onClick={e => setValue(value + e.target.value)} /></td>
                    <td><input value='5' onClick={e => setValue(value + e.target.value)} /></td>
                    <td><input value='6' onClick={e => setValue(value + e.target.value)} /></td>
                    <td><input value='-' style={{color:'#81DAF5'}}  onClick={e => setValue(value + e.target.value)} /></td>
                </tr>
                <tr>
                    <td style={{ pointerEvents: 'pointer' }}><input value='1' onClick={e => setValue(value + e.target.value)} /></td>
                    <td><input value='2' onClick={e => setValue(e.target.value)} /></td>
                    <td><input value='3' onClick={e => setValue(e.target.value)} /></td>
                    <td style={{ color: '#81DAF5' }}><input value='+' style={{color:'#81DAF5'}}  onClick={e => setValue(value + e.target.value)} /></td>
                </tr>
                <tr>
                    <td ><input value='00' onClick={e => setValue(value + e.target.value)} /></td>
                    <td><input value='0' onClick={e => setValue(value + e.target.value)} /></td>
                    <td><input value='.' onClick={e => setValue(value+ e.target.value)} /></td>
                    <td style={{ color: '#81DAF5' }} id='=' ><input style={{color:'#81DAF5'}}  value='=' onClick={e => setValue(eval(value))} /></td>
                </tr>
            </table>

        </div>
    )
}

export default Calc;