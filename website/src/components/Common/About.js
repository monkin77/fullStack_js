import React, { Component } from 'react';
import AboutItem from './AboutItem';

import img1 from '../assets/img/about/1.jpg';
import img2 from '../assets/img/about/2.jpg';
import img3 from '../assets/img/about/3.jpg';
import img4 from '../assets/img/about/4.jpg';

const about = [
    { style: '', title: 'Our Humble Beginnings', date: '2009-2011', image: img1, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!' },
    { style: 'timeline-inverted', title: 'An Agency is Born', date: 'March 2011', image: img2, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!' },
    { style: '', title: 'Transition to Full Service', date: 'December 2012', image: img3, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!' },
    { style: 'timeline-inverted', title: 'Phase Two Expansion', date: 'July 2014', image: img4, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!' },
]

class About extends Component {

    render() {
        return (
            <section className="page-section" id="about">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">About</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <ul className="timeline">
                        {about.map((item, index) => {
                            return <AboutItem {...item} key={index} />
                        })}
                        <li class="timeline-inverted">
                            <div class="timeline-image">
                                <h4>
                                    Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default About;