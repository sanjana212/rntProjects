import React, { useEffect, useState } from 'react';
import './UnsplashClone.css';
const UnsplashClone = () => {
    //P_3PHzZgc1GFIXanxJCHmywKAC9LkHxmGgWBMUE2cbM
    const [value, setValue] = useState('');
    const [results, setResults] = useState([]);
    const fetchImages = () => {
        var DefaultImgDiv = document.getElementById('DefaultImgDiv');
        DefaultImgDiv.classList.remove('d-flex');
        console.log('value==>', value)
        fetch(`https://api.unsplash.com/search/photos/?client_id=O0Ugi9nTUNuJ4N8O0VyrqNyaB-i10d3O9xVzYb9mTyQ&query=${value}&orientation=landscape`)
            .then(res => res.json())
            .then(data =>
                //  console.log(data)
                setResults(data.results)
            )
    }
    // useEffect(()=>{
    //      fetch(`https://api.unsplash.com/search/photos?client_id=P_3PHzZgc1GFIXanxJCHmywKAC9LkHxmGgWBMUE2cbM&query=${value}`)
    //     .then(res=>res.json())
    //     .then(data=>console.log(data));
    // })
    return (
        <div style={{
            position: "absolute",
            right: "-1%",
            top: "40px"
        }}>
            <div className='myDiv'>
                <input type="text" value={value} onChange={(e) => { setValue(e.target.value) }} />
                <button className='' onClick={() => fetchImages()}>Send</button>
            </div>
            <div>
                <div className='gallary'>
                    {
                        results.map((item) => {
                            return <img className='item' key={item.id} src={item.urls.regular} />
                        })
                    }
                </div>
            </div >
        </div>

    )
}
export default UnsplashClone;