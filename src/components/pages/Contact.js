import React, { Component } from 'react';
import Field from '../Common/Field';

import {withFormik} from 'formik';
import * as Yup from 'yup';     // * means all

const fields = {
    sections: [
        [
            { name: 'name', elementName: 'input', type: 'text', placeholder: 'Your Name *' },
            { name: 'email', elementName: 'input', type: 'email', placeholder: 'Your Email *' },
            { name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your phone number *' },
        ],
        [
            { name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Type your message *', divStyle: 'form-group-textarea mb-md-0' },
        ]
    ]
}

class Contact extends Component {

    submitForm = (e) => {
        alert("Form submitted. Thank you very much");
    }

    render() {
        return (
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <form id="contactForm" name="sentMessage" novalidate="novalidate" onSubmit={this.props.handleSubmit}>
                        <div className="row align-items-stretch mb-5">
                            {fields.sections.map((section, sectionIndex) => {
                                console.log("Rendering section", sectionIndex, "with", section);
                                return (
                                    <div className="col-md-6" key={sectionIndex}>
                                        {section.map((field, i) => {
                                            return <Field 
                                            {...field} 
                                            key={i} 
                                            value={this.props.values[field.name]} 
                                            name={field.name} 
                                            onChange={this.props.handleChange} 
                                            onBlur={this.props.handleBlur}
                                            touched={this.props.touched[field.name]}
                                            errors={this.props.errors[field.name]}
                                            />
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="text-center">
                            <div id="success"></div>
                            <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'Your name needs to have at least 3 letters').required('You must give us your name.'),
        email: Yup.string().email('You need to give us a valid email').required('You must give us your email.'),
        phone: Yup.string().min(9, 'Please provide your valid phone number (at least 9 digits)').max(15, 'That phone number is too long').required('You need to insert your phone number'),
        message: Yup.string().min(15, 'You need to provide us more detailed information').max(5000, 'Your message has exceeded the maximum length (5000 characters)').required('A message is required')
    }),
    handleSubmit: (values, {setSubmitting}) => {
        alert("You've submitted the form", JSON.stringify(values));
    }
})(Contact);