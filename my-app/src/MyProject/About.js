import React from 'react'
import { motion } from 'framer-motion';
import CardCaraousal from '../CardCarousal/CardCaraousal';
import UnsplashClone from '../UnsplashClone/UnsplashClone';
import Footer from './footer/Footer';
const About = () => {
  const images = [
    {
      "id": 1,
      img: 'ballon.png'
    },
    {
      "id": 2,
      img: 'Bridge.jpg'
    },
    {
      "id": 3,
      img: 'castle.jpg'
    },
    {
      "id": 4,
      img: 'leaves.jpg'
    },
    {
      "id": 5,
      img: 'moon.jpg'
    },
    // {
    //   "id": 6,
    //   img: 'Pink.jpg'
    // },
    // {
    //   "id": 7,
    //   img: 'pizza.jpg'
    // },
    // {
    //   "id": 8,
    //   img: 'plants.jpg'
    // },
    {
      "id": 9,
      img: 'stars.jpg'
    },
    {
      "id": 10,
      img: 'tower.jpg'
    },
    // {
    //   "id": 11,
    //   img: 'YellowFlowers.jpg'
    // },
    {
      "id": 12,
      img: 'bird.jpg'
    },
    {
      "id": 13,
      img: 'blueBird.jpg'
    },
    // {
    //   "id": 14,
    //   img: 'waterfall.jpg'
    // },
    // {
    //   "id": 15,
    //   img: 'sunset.jpg'
    // },
    
    // {
    //   "id": 16,
    //   img: 'earth.jpg'
    // },
    // {
    //   "id": 17,
    //   img: 'tortoise.jpg'
    // },
    // {
    //   "id":18,
    //   img:'Pink.jpg'
    // }
  ]
  console.log('hiiii', images[0].img)
  return (
    <div className='mt-5 card-list ' style={{marginLeft:"40px"}}>
      <div style={{width:"100%"}}>
        <UnsplashClone/>
      </div>
      <div className='d-flex flex-wrap' id='DefaultImgDiv' style={{display:"none",width:"100%"}}>
        {
          images.map((obj) => {
            console.log('objectimg=>:', obj.img);
            return (
              <div key={obj.id}>
                <div className="card col-4 ml-3 mb-2" style={{ width: '18rem', height: "18rem" }} >

                  <img className="card-img-top p-2 mt-2" src={obj.img} alt="Card image cap" style={{ height: "17rem", borderRadius: "5%" }} />
                  {/* <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div> */}
                </div>
              </div>
            )
          })
        }
      </div>
      <Footer/>
    </div>
  )
}

export default About ;