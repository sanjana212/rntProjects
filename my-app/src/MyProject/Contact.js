import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import Footer from './footer/Footer';
const Contact = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('')
    },[])
        
    return (
        // <motion.div
        // initial={{opacity:0}}
        // animate={{opacity:1}}
        // exit={{opacity:0}}
        // >
        //           {/* <img className="cover" src="pizza.jpg" alt="pizzaImg" style={{width:'100%',height:"100vh"}} /> */}

            
        // </motion.div>
        <div>
            <div className='container bg-dark'>
                <div className=''>
                    <input type="text" className='form-control' />
                </div>
            </div>
            <Footer/>

        </div>
    )
}

export default Contact;