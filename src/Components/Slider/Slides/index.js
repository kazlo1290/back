import React from 'react';
import { IMAGES } from '../../../mock';

const Slides = () => (
  IMAGES.map((image, index) => <img className='img-slider' key={index} src={image.imageUrl} alt={image.placeHolder} />)
);

export default Slides;