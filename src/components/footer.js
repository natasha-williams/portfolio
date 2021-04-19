import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import '../scss/footer.scss';

export default function Footer() {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )

    return <footer className="text-center">
        <div className="container">
            &copy; {data.site.siteMetadata.title} {(new Date().getFullYear())}
        </div>
    </footer>
}