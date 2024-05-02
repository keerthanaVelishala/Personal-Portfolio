import React from 'react'
import Particle from '../../Particle'
import { Container } from "react-bootstrap";

export default function ComingSoon() {
    return (
        <section className="home-section">
            <Container fluid id="resume">
                <Particle />
                <Container className="home-content d-flex justify-content-center align-items-center">
                    <div className="blog-post">
                        <h1>Cultivating Happiness, a Strategic Framework for Enhancing Industry Impact</h1>
                        <p>Happiness in the workplace is more than just a feel-good factor; it is a strategic asset that can significantly
                            impact productivity, creativity, and retention. Learning from successful happiness initiatives in various sectors
                            from U.S. Military to tech startups like Thumbtack, this article explores how these principles can be used to
                            enhance both personal satisfaction and professional success in the IT industry. Organizations that bring
                            happiness using the PACE (Purpose, Autonomy, Collaboration, Excellence) framework can create a workplace
                            that not only attracts but also retains top talent in the industry.</p>

                        <h2>Impact on the IT Industry</h2>
                        <p>The implementation of happiness-oriented strategies in ever growing competitive IT industry can strongly influence
                            both the micro-environment of team dynamics and the macro-environment of industry practices. For instance,
                            organizations that actively cultivate an environment of happiness report lower turnover rates, higher job satisfaction,
                            and more problem-solving capabilities. Collaboration is not just about working together but creating a culture where
                            knowledge sharing, and team-oriented goals are at the forefront. In the tech industry, where projects can be highly
                            complex, the ability to collaborate effectively can make or break the success of operations. Recognition of achievements
                            motivate employees to consistently deliver high-quality work. When employees see real examples of career progression in
                            their workplace or listen such encouraging talks from colleagues and receive support from their employers to pursue their
                            professional goals increases their commitment and satisfaction with their jobs.</p>
                        <h2>Conclusion</h2>
                        <p>By investing in the principles of PACE, tech companies can make a workplace that supports and sustains happy, motivated,
                            and highly skilled employees. This investment will pay off by enhancing employee retention rates, reducing the costs of
                            high turnover, and building a more robust organizational culture that is prepared to face the challenges of the future.
                        </p>
                    </div>
                </Container>
            </Container>
        </section>
    )
}
