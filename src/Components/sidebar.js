import React from "react";
import github from '../assets/img/logo/github.svg'
import devto from '../assets/img/logo/dev_to.svg'
import face from '../assets/img/logo/facebook.svg'
import yt from '../assets/img/logo/youtube.svg'

function Header() {
  return (
    <aside className="flex fixed top-aside_y border border-pink  m-0 right-aside_x h-50px -rotate-90 z-30">
      <div className="flex h-2rem  my-8px mx-10px">
        <div className="p-3 w-2rem ml-10px shadow-logo rounded-5px"></div>
        <div className="p-3 w-2rem ml-10px shadow-logo rounded-5px"></div>
        <div className="p-3 w-2rem ml-10px shadow-logo rounded-5px "></div>
        <div className="p-3 w-2rem ml-10px shadow-logo rounded-5px"></div>
      </div>
      <div className="flex flex-col mr-20px my-0">
        <div className="">
          <p className="">Other Websites</p>
        </div>
        <div className="flex flex-row">
          <img className="h-logo24 ml-8px" src={github} alt="github" />
          <img className="h-logo24" src={devto} alt="devto" />
          <img className="h-logo24" src={face} alt="facebook" />
          <img className="h-logo24" src={yt} alt="youtube" />
        </div>
      </div>
    </aside>
  )
};

export default Header;