import React from "react";
import Aside from '../components/Aside';
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
        <main className="main">
            <Header />  
            <Aside />
        </main>
        </>
    );
};

export default Changelog