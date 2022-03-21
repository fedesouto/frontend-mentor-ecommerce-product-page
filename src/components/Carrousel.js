import React, {useState} from 'react';
import image_1 from '../images/image-product-1.jpg'
import image_2 from '../images/image-product-2.jpg'
import image_3 from '../images/image-product-3.jpg'
import image_4 from '../images/image-product-4.jpg'
import {Previous} from './Buttons/Previous'
import {Next} from './Buttons/Next'

const images = [image_1, image_2, image_3, image_4];

export const Carrousel = () => {
    const [image, setImage] = useState(0)
    return (
        <div className='carrousel' >
            <Previous setImage={setImage} image={image} limit={0} />
            <img src={images[image]} className="image-fluid" />
            <Next setImage={setImage} image={image} limit={images.length - 1}/>
        </div>
    )
}