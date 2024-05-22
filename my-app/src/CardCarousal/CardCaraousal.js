import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

function CardCaraousal({ images }) {
    console.log('images***', images);
    return (
        <div>

            {/* <Card style={{ width: '18rem',height:"18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" /> 
                 <Card.Body>
                  
                     <Card.Text>
                        orchid
                    </Card.Text>  */}
            {/* <Carousel>
                {/* <Carousel.Item>
                    <img
                        classNameName="d-block w-100"
                        src="ballon.png"
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
            {/* </Carousel.Item>
                <Carousel.Item> */}
            <img
                classNameName="d-block w-100"
                src="pizza.jpg"
                alt="Second slide"
            />

            {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
            {/* </Carousel.Item>
                <Carousel.Item>
                    <img
                        classNameName="d-block w-100"
                        src="stars.jpg"
                        alt="Third slide"
                    />

                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption> */}
            {/* </Carousel.Item> */}
            {/* </Carousel> */}
            {/* </Card.Body>
                  <Card.Title>Items</Card.Title>
            </Card> */}




          

        </div>

    );
}

export default CardCaraousal;