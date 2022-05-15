import React from 'react';


function Section({ children, title, className, image }) {
    return (
        <section className={className}>
            <div className="container">
                <h2>{title}</h2>

                {children}
            </div>

            {image &&
                <img loading="lazy" src={image}
                    width="200" height="100"
                    alt="Natasha Williams" title="Natasha Williams" />
            }
        </section>
    )
}


export default Section;
