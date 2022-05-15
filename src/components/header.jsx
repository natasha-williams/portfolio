import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import HeaderImage from '../images/header.svg';

import './header.scss';


function Header() {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        heading
                        email
                        mobile
                    }
                }
            }
        `
    );

    return (
        <header className="text-center">
            <div className="container">
                <h1>{data.site.siteMetadata.heading}</h1>

                <a href={'mailto:' + data.site.siteMetadata.email}
                    data-sal="slide-right" className="btn-pink">Email me</a>

                <a href={'tel:' + data.site.siteMetadata.mobile}
                    data-sal="slide-left" className="btn-pink">Call me</a>

                <img loading="lazy" src={HeaderImage}
                    width="348" height="190"
                    alt="Natasha Williams" title="Natasha Williams" />
            </div>
        </header>
    );
}


export default Header;
