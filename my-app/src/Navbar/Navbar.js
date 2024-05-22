import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
function Navbar1() {
    return (
        <div className='ml-2'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand ml-3" href="#" style={{marginLeft:'10px'}}>My App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active" style={{margin:'10px 30px 0px 10px'}}>
                            <Link className="nav-link" href="#" to='/'>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#" to='/About'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#"  to='/Contact'>Contact</Link>
                        </li>
                        
                    </ul>
                </div>

            </nav>
        </div>
    );
}

export default Navbar1;