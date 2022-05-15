import React from 'react';

import Layout from '../components/layout';
import Section from '../components/section';


function NotFound() {
    return (
        <Layout>
            <Section title="Page Not Found">
                <p>Oops! The page you are looking for has been removed.</p>
            </Section>
        </Layout>
    );
}


export default NotFound;
