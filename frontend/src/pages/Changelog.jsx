import React from "react";
import Header from '../components/Header'
import '../assets/css/changelog.css'
import { Helmet } from 'react-helmet'
function Changelog() {
      // Title
  const TITLE = 'Өөрчлөлт'
    return (
        <>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
         <Header />  
        <main className="main">
        <div className='home_container maxw'>
          
        </div>
        </main>
        </>
    );
};

export default Changelog