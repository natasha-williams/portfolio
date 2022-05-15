import React from 'react';

import Header from './header';
import Footer from './footer';
import Metadata from '../components/metadata';


function Layout({ children }) {
    return (
        <div>
            <Metadata />
            <Header />

            {children}

            <Footer />
        </div>
    );
}


export default Layout;
