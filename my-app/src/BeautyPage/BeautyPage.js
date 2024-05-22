import React from 'react';
import './Beautypage.css';
import hairDryer from '../BeautyPage/hairDryer.webp';
const BeautyPage = () => {
    return (
        <div>
            <div className='headerSection'>
                <div className='shop_Div'>
                    <a href="">Shop</a>
                    <a href="">Our Story</a>
                    <a href="">Packaging</a>
                    <a href="">More</a>
                </div>
                <div className='loginDiv'>
                    <a href="">En</a>
                    <a href="">Login</a>
                    <a href="">Cart</a>
                </div>
            </div>

            <div className='imgDiv'>
                <div style={{ textAlign: 'center', height: '30vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '35%' }}>Did you know  it take 500 years for
                        a plastic bottle
                        to biodegrade  you can compost solid
                        packaging in your home.</div>
                </div>
            </div>

            <div className='productHeader'>
                <a href="">All</a>
                <a href="">Shampoos</a>
                <a href="">Conditioners</a>
                <a href="">Body & More</a>
                <a href="">Gift sets</a>
                <a href="">Try me</a>
                <a href="">Try me sets</a>
                <a href="">Christmas special</a>
                <a href="">Drops</a>
            </div><br /><br />

            <div className='productDiv'>
                <div>
                    <img src={hairDryer} alt="hairDryer" width='160px' height='115px' />
                </div>
                <div>
                    <img src={hairDryer} alt="hairDryer" width='160px' height='115px' />
                </div>

                <div>
                    <img src={hairDryer} alt="hairDryer" width='160px' height='115px' />
                </div>

                <div>
                    <img src={hairDryer} alt="hairDryer" width='160px' height='115px' />
                </div>
            </div><br /><br />

            <div className='footer'>
                <p>&copy; 2015 RapidTables.com</p>
            </div>
        </div>
    )
}

export default BeautyPage
