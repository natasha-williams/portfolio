import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export default function Metadata() {
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

    return (
        <Helmet>
            <html lang="en" />
            <title>
                {data.site.siteMetadata.title}
            </title>
            <meta name="robots" content="noindex" />
        </Helmet>
    )
}