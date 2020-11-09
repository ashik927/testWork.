import React, { useState } from 'react';
import tshirt from '../../images/tshirt.jpg';
import Draggable from 'react-draggable';
import Navbar from '../Shared/Navbar/Navbar';

const Tshirt = () => {
    const [magic, setMagic] = useState(false);
    const handleClickShow = () => {
        setMagic(true);
    }
    const handleClickRemove = () => {
        setMagic(false);
    }

    return (
        <>
            <Navbar></Navbar>
            <div className="d-flex justify-content-center mt-2">

                <main style={{ backgroundImage: `url(${tshirt})` }} className="row d-flex align-items-center header">
                    {
                        magic ?
                            <Draggable >
                                <div style={{ cursor: 'pointer' }} className="col-md-4 col-sm-12 col-12 offset-md-4" >
                                    <h1 style={{ color: '#111430' }}>Let’s Grow Your <br /> Brand To The <br /> Next Level</h1>
                                </div>
                            </Draggable>
                            :
                            <p></p>
                    }


                </main>

            </div>
            <div className="col-md-4 col-sm-6 col-12 offset-md-5 mt-1  container">
                {
                    magic ?
                        <button className="btn btn-danger d-flex justify-content-center" onClick={handleClickRemove}>Click Remove</button>
                        :
                        <button className="btn btn-primary d-flex justify-content-center" onClick={handleClickShow}>Click Show</button>
                }
            </div>
        </>
    );
};

export default Tshirt;