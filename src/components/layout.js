import React from 'react'

import Header from './header'
import Footer from './footer'
import Metadata from '../components/metadata'

export default function Layout({ children, title }) {
    return (
        <div>
            <Metadata />
            <Header />

            {children}

            <Footer />
        </div>
    )
}