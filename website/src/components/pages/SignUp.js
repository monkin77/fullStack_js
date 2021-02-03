import React, { Component } from 'react';
import Field from '../Common/Field';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';     // * means all
import * as AuthActions from '../../store/actions/authActions';

const fields = [
    { name: 'email', elementName: 'input', type: 'email', placeholder: 'Your email' },
    { name: 'name', elementName: 'input', type: 'text', placeholder: 'Your name' },
    { name: 'password', elementName: 'input', type: 'password', placeholder: 'Your password' },
    { name: 'password2', elementName: 'input', type: 'password', placeholder: 'Confirm your password' },
]

class SignUp extends Component {

    render() {
        return (
            <div className="login-page">
                <div className="container">
                    <div className="login-form">
                        <div className="row">
                            <h1>Sign Up</h1>
                        </div>
                        <div >
                            <form className="row" onSubmit={e => {
                                console.log("Register attempt", this.props.values);
                                e.preventDefault();
                                this.props.register(this.props.values.name, this.props.values.email, this.props.values.password);
                            }}>
                                {fields.map((field, i) => {
                                    return (
                                        <div className="col-md-6">
                                            <Field
                                                key={i}
                                                {...field}
                                                value={this.props.values[field.name]}
                                                name={field.name}
                                                onChange={this.props.handleChange}
                                                onBlur={this.props.handleBlur}
                                                touched={this.props.touched[field.name]}
                                                errors={this.props.errors[field.name]}
                                            />
                                        </div>
                                    )
                                })}
                                <div className="col-md-12">
                                    <p className="text-danger text-center">{this.props.auth.error || '' }</p>
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {     //   appwide states to props ? 
    return {
        auth: state.auth,
    }
}

const mapDispatchToProps = dispatch => {        // set methods that will be called as this.props.(method)
    return {
        register: (name, email, pass) => {
            dispatch(AuthActions.register(name, email, pass));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
    mapPropsToValues: () => ({      // props email and password will be available on the component that is being wrapped
        email: '',
        name: '',
        password: '',
        password2: '',
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().required('You must insert a name'),
        email: Yup.string().email('Email is invalid').required('You must insert your email address'),
        password: Yup.string().min(8, 'Passwords need to be at least 8 characters long').required('You need to enter your password'),
        password2: Yup.string().required('You need to enter your password again').test('pass-match', 'Passwords don\'t match', function (pass2) {
            const { password } = this.parent;
            return password === pass2;
        }),
    }),
    handleSubmit: (values, { setSubmitting }, login) => {
        console.log("Login attempt", values);
        //login(values.email, values.password);
    }
})(SignUp));