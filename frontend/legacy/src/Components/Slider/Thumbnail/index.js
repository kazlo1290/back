import React from 'react';

const Thumbnail = ({ children, id, selectedKey }) => {
  const show = (id === selectedKey);

  return (
    <div className={`slider  object-fill display flex justify-center ${show ? 'opacity-100 transition-all duration-1000 ease-in-out block' : 'opacity-0 hidden'}`}>
      {children}
    </div>
  );
}

export default Thumbnail;