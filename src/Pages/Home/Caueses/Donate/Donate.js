import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import causesData from '../../../../fakeData/donationServices.json';

const Donate = () => {
    const { id } = useParams();
    const selectedData = causesData.filter(sd => parseInt(sd.id) === parseInt(id));
    const data = selectedData[0];

    const { title, description, price, img } = data;
    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState("");
    const [name, setName] = useState("");
    return (
        <div>
            <Container className='my-5 pt-5'>

                <Row>
                    <Col md={6} sm={12}>
                        <Card>
                            <Card.Img variant="top" src={img} className='img-fluid ms-0' />
                            <Card.Body className='p-5'>
                                <h6 className='custom-text-warning'>{title}</h6>
                                <Card.Title className='custom-text-primary mt-3'>{description}</Card.Title>
                                <div className='d-flex justify-content-between my-4 text-secondary'>
                                    <small><i className="fas fa-globe me-2"></i>Goal</small>
                                    <small><i className="fas fa-users me-2"></i>Raised</small>
                                    <small> <i className="fas fa-reply me-2"></i>To Go</small>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    {/* <Link to={`/causes/${id}`}><Button className='custom-button px-4 py-2'>Donate <i className="fas fa-long-arrow-alt-right ms-2"></i></Button></Link> */}
                                    <h5 className='text-info fw-bold' >${price}</h5>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <div className='my-5 mx-auto w-75'>
                            <form >
                                <h3 className='text-center custom-text-primary fw-bold my-3'>Donate Hare</h3>
                                <div className="mb-3 my-5">
                                    <label htmlFor="exampleInputEmail1" className="form-label"><i className="fas fa-user custom-text-warning me-2"></i>Name</label>
                                    <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label"><i className="fas fa-envelope-square custom-text-warning me-2"></i>E-mail</label>
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label"><i className="fas fa-donate custom-text-warning me-2"></i>$ Donate Amount</label>
                                    <input onChange={(e) => setAmount(e.target.value)} type="number" className="form-control" />
                                </div>
                                <div className='mb-3'>
                                    <Button className='custom-button px-4 py-2'>Donate <i className="fas fa-donate ms-2"></i></Button>
                                </div>

                                {/* <div>
                                    <p className='custom-cursor-style text-primary'> Forgot Password-? </p>
                                    <Button onClick={handleLogIn} className='mt-2 px-4  py-2'>Login</Button>
                                    <Button className='ms-3 mt-2 custom-button' onClick={handleGoogleLogIn} ><i className="fab fa-google text-white fs-6 px-4 py-1 "></i></Button>
                                    <p className=' mt-4'>Don't have an account?<Link to='/register'> Sign Up</Link></p>
                                </div> */}

                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Donate;