import React from 'react';
import { Carousel } from '../Components/Slider';
import { IMAGES } from '../mock';
function Project() {

  return (
    <div className="Slider">
      <div className="container">
        <Carousel time={3500}>
          { 
            IMAGES.map((image, index) => <img key={index} src={image.imageUrl} alt={image.placeHolder} />) 
          }
        </Carousel>
      </div>
    </div>
  );
}

export default Project;