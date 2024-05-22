import Carousel from 'react-bootstrap/Carousel';
import './NursuryHome.css';
// import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router";
import waterfall from '../../images/waterfall.jpg';
import Bridge from '../../images/Bridge.jpg';
import sunset from '../../images/sunset.jpg';
import Footer from '../footer/Footer';
function NursuryHome() {
    let navigate = useNavigate();
    const moveToMainPage = () => {
        navigate("/About");
    }
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img

                        className="d-block w-100 object-fit-cover"
                        src={waterfall}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img

                        className="d-block w-100 object-fit-cover"
                        src={Bridge}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img

                        className="d-block w-100 object-fit-cover"
                        src={sunset}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

            <div className='btnDiv'>
                <button className='btn btn-primary align-center' onClick={() => moveToMainPage()}>Show More
                    <span style={{marginLeft:'10px'}}></span>
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>

                </button>
            </div>
            <Footer/>
        </>

    );
}

export default NursuryHome;