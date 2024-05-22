import { useState } from "react";
import './Page.css';
const Page = () => {
    const [data, setData] = useState([]);
    console.log(data) 
    const handleCheckboxChange = (e) => {
        if (!data.includes(e.target.id)) {
            setData((prevState) => [...data, e.target.id])
        } else {
            setData((prevState) => prevState.filter(row => row !== e.target.id))
        }
   }
    return (
        <div className="main-div container">
            <img src='ballon.png' alt='img' height='100px' />
            <div >
                <h1>Sidhanshu Trivedi</h1>
                <p>Cardiovascular & <br /> pulmonary<br /><span className="text-primary">Male</span></p>
            </div>
            <div>
                <h2 >Activities</h2  >
                <div>
                    <input
                        id="Conferance kit"
                        type='checkbox'
                        onChange={handleCheckboxChange}
                    />
                    <label >Conferance kit</label>
                </div>
                <div>
                    <input
                        id="Breakfast Day 1"
                        type='checkbox'
                        onChange={handleCheckboxChange}
                    />
                    <label >Breakfast Day 1</label>
                </div>
                <div>
                    <input
                        id='Lunch Day 1'
                        type='checkbox'
                        onChange={handleCheckboxChange}
                    />
                    <label>Lunch Day 1</label>
                </div>
                <div>
                    <input
                        id='Banquet Dinner'
                        type='checkbox'
                        onChange={handleCheckboxChange}
                    />
                    <label>Banquet Dinner</label>
                </div>
                <div>
                    <input
                        id='Breakfast Day 2'
                        type='checkbox'
                        onChange={handleCheckboxChange}
                    />
                    <label>Breakfast Day 2</label>
                </div>
                <div>
                    <input
                        id='Lunch Day 2'
                        type='checkbox'
                        onChange={handleCheckboxChange}
                    />
                    <label >Lunch Day 2</label>
                </div>
                <footer>Note:please do not mark any of the checkbox above as<br />this is the organizer functionality</footer>
            </div>
        </div>
    )
}
export default Page;