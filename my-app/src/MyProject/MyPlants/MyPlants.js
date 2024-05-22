import React from 'react'
import { motion } from 'framer-motion';
// import CardCaraousal from '../CardCarousal/CardCaraousal';
import tower from  '../../images/tower.jpg';
const MyPlants = () => {
  console.log('sanjana')
  const images = [
    {
      "id": 1,
      URL: {tower}
    },
    {
      "id": 2,
      URL:  {tower}
    },
    {
      "id": 3,
      URL:  {tower}
    },
    {
      "id": 4,
      URL:  {tower}
    },
    {
      "id": 5,
      URL:  {tower}
    },
    {
      "id": 6,
      URL:  {tower}
    },
    {
      "id": 7,
      URL:  {tower}
    },
    {
      "id": 8,
      URL:  {tower}
    },
    {
      "id": 9,
      URL:  {tower}
    },
    {
      "id": 10,
      URL:  {tower}
    },
    {
      "id": 11,
      URL:  {tower}
    },
    {
      "id": 12,
      URL:  {tower}
    },
    {
      "id": 13,
      URL:  {tower}
    },
    {
      "id": 14,
      URL:  {tower}
    },
    {
      "id": 15,
      URL:  {tower}
    },
    
    {
      "id": 16,
      URL:  {tower}
    },
    {
      "id": 17,
      URL:  {tower}
    },
    {
      "id":18,
      URL:  {tower}
    }
  ]

  console.log('hiiii', images[0].URL)
  return (
    <div className='container mt-5 card-list '>
      <div className='d-flex flex-wrap'>
        {
          images.map((obj) => {
            console.log('objectimg=>:', obj.URL);
            return (
              <div key={obj.id}>
                <div className="card col-4 ml-3 mb-2" style={{ width: '18rem', height: "18rem" }} >
                  <img className="card-img-top p-2 mt-2" src={obj.URL} alt="Card image cap" style={{ height: "17rem", borderRadius: "5%" }} />
                  {/* <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div> */}
                </div>
              </div>

            )
          })
        }
      </div>
    </div>
  )
}
export default MyPlants; 