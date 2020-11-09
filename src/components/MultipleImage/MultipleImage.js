import React, { useState }from 'react';
import MultiImageInput from 'react-multiple-image-input';
import Navbar from '../Shared/Navbar/Navbar';

const MultipleImage = () => {
    const crop = {
        unit: '%',
        aspect: 4 / 3,
        width: '100'
    };

    const [images, setImages] = useState({});
    return (
        <>
        <Navbar></Navbar>
        <form action="#" method="">
            <MultiImageInput
            
                images={images}
                setImages={setImages}
                cropConfig={{ crop, ruleOfThirds: true }}
            />
        </form>
        </>
    );
};

export default MultipleImage;