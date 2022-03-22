import React, {  useEffect } from 'react';
import Thumbnail from '../Thumbnail';
import DotIcon from '../DotIcon';

const Carousel = ({ children, time }) => {
  const [index, setIndex] = React.useState(0);
  const keys = children.map((child, index) => index);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (index + 1) % keys.length;
      setIndex(newIndex);
    }, time);
    return () => clearInterval(interval);
  });
  
  const _slides = () => {
    return children.map((child, idx) => (
      <Thumbnail  key={idx} id={idx} selectedKey={index}>
        {child}
      </Thumbnail>
    ));
  }

  const _sliderDots = () => {
    return keys.map(key => (
      <span key={key} onClick={() => setIndex(key)}>
        {<DotIcon selected={key === index} />}
      </span>
    ));
  }

  return (
    <div className="border-1 relative flex m-4 justify-center">
      <div className="grid grid-flow-row auto-rows-max">
        <div className="flex flex-row flex-wrap">
          { _slides() }
        </div>
        <div className="flex absolute bottom-0 inset-x-0 justify-center mb-2">
          { _sliderDots() }
        </div>
      </div>
    </div>
  );
}

export default Carousel;