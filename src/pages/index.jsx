import React from 'react';

import Layout from '../components/layout';
import Section from '../components/section';
import Feature from '../components/feature'

import SectionImage from '../images/section.svg';

import './index.scss';


function Home() {
    return (
        <Layout>
            <Section title="About Me" className="bg-pink" image={SectionImage}>
                <div data-sal="slide-up" data-sal-delay="300">
                    <p>I'm a web developer based in Guildford, Surrey with over
                    10 years experience. I currently work remotely for a
                    telecoms company updating all company websites, fixing bugs,
                    improving the existing code base and implementing new
                    features.</p>
                </div>
            </Section>

            <Section title="Skills">
                <div data-sal="slide-up" data-sal-delay="300">
                    <Feature name="HTML"></Feature>
                    <Feature name="CSS"></Feature>
                    <Feature name="SASS"></Feature>
                    <Feature name="JavaScript"></Feature>
                    <Feature name="Python"></Feature>
                    <Feature name="MySQL"></Feature>
                </div>

                <h3>Frameworks</h3>

                <div data-sal="slide-up" data-sal-delay="300">
                    <Feature name="React"></Feature>
                    <Feature name="Backbone"></Feature>
                    <Feature name="Underscore"></Feature>
                    <Feature name="Behave"></Feature>
                    <Feature name="Selenium"></Feature>
                    <Feature name="Bootstrap"></Feature>
                    <Feature name="jQuery"></Feature>
                </div>

                <h3>Design</h3>

                <div data-sal="slide-up" data-sal-delay="300">
                    <Feature name="Adobe Photoshop"></Feature>
                    <Feature name="Adobe Premiere"></Feature>
                </div>

                <h3>Other</h3>

                <div data-sal="slide-up" data-sal-delay="300">
                    <Feature name="Docker"></Feature>
                    <Feature name="Behaviour-driven development (BDD)"></Feature>
                    <Feature name="SEO"></Feature>
                    <Feature name="Unit testing"></Feature>
                    <Feature name="Chrome/Firefox/Safari extensions"></Feature>
                </div>

                <h3>Professional</h3>

                <div data-sal="slide-up" data-sal-delay="300">
                    <Feature name="Interpersonal"></Feature>
                    <Feature name="Analytical"></Feature>
                    <Feature name="Organised"></Feature>
                    <Feature name="Quick learner"></Feature>
                    <Feature name="Self motivated"></Feature>
                </div>
            </Section>
        </Layout>
    );
}


export default Home;
