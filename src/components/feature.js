import clsx from 'clsx';
import React from 'react';

function Feature({ title, description }) {
    return (
        <div className={clsx('col col--4', "feature")}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Features({ features }) {
    return (
        <section className="features">
            <div className="container">
                <div className="row">
                    {features.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features;