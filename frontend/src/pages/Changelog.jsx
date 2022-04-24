import React from "react";
import Aside from '../components/Aside';
import Header from '../components/Header'
import '../assets/css/changelog.css'
function Changelog() {
    return (
        <div className="container_changelog">
            <Aside />
            <main>
                <Header />  
            </main>
        </div>
    );
};

export default Changelog