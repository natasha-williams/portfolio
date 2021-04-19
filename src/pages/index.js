import React from 'react'

import Layout from '../components/layout'
import Section from '../components/section'
import Feature from '../components/feature'

import SectionImage from '../images/section.svg';

export default function Home() {
    return (
        <Layout>
            <Section title="About Me" className="bg-pink" image={SectionImage}>
                <div data-sal="slide-up">
                    <p>I'm a web developer based in Guildford, Surrey with over
                    10 years experience. I currently work remotely for a
                    telecoms company updating all company websites, fixing bugs,
                    improving the existing code base and implementing new
                    features.</p>
                </div>
            </Section>

            <Section title="Skills">
                <div data-sal="slide-up">
                    <Feature item="HTML"></Feature>
                    <Feature item="CSS"></Feature>
                    <Feature item="SCSS"></Feature>
                    <Feature item="JavaScript"></Feature>
                    <Feature item="Python"></Feature>
                    <Feature item="MySQL"></Feature>
                </div>

                <h3>Frameworks</h3>

                <div data-sal="slide-up">
                    <Feature item="jQuery"></Feature>
                    <Feature item="Bootstrap"></Feature>
                    <Feature item="Backbone"></Feature>
                    <Feature item="Underscore"></Feature>
                    <Feature item="Behave"></Feature>
                    <Feature item="Selenium"></Feature>
                </div>

                <h3>Design</h3>

                <div data-sal="slide-up">
                    <Feature item="Adobe Photoshop"></Feature>
                    <Feature item="Adobe Premiere"></Feature>
                </div>

                <h3>Other</h3>

                <div data-sal="slide-up">
                    <Feature item="SEO"></Feature>
                    <Feature item="Unit testing"></Feature>
                    <Feature item="Behavior-driven development"></Feature>
                    <Feature item="Chrome/Firefox/Safari Extensions"></Feature>
                    <Feature item="Docker"></Feature>
                </div>

                <h3>Professional</h3>

                <div data-sal="slide-up">
                    <Feature item="Interpersonal"></Feature>
                    <Feature item="Analytical"></Feature>
                    <Feature item="Organised"></Feature>
                    <Feature item="Quick learner"></Feature>
                    <Feature item="Self motivated"></Feature>
                </div>
            </Section>
        </Layout>
    )
}