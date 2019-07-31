import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

// Component Imports
import MainContainer from '../layout/MainContainer';
import TitleBar from '../common/TitleBar';

// Formik and Yup Imports
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class UpdateContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      company: '',
      phone_number: '',
      email: '',
      id: '',
      loading: true,
      to_dashboard: false
    }
  }

  componentWillMount() {
    axios.get(`/api/contacts/${this.props.match.params.id}/`)
      .then(res => {
        this.setState({
          id: res.data.id,
          name: res.data.name,
          company: res.data.company,
          phone_number: res.data.phone_number,
          email: res.data.email,
          loading: false
        });
        console.log(res);
      })
      .catch(err => {
        console.log(err.response);
      })
  }

  ContactSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required.'),
    company: Yup.string()
      .required('Company is required.'),
    phone_number: Yup.string(),
    email: Yup.string()
      .email('Provide a valid email.')
  })

  render() {

    if(this.state.to_dashboard === true) {
      return(
        <Redirect exact to={`/contacts/${this.state.id}`} />
      )
    }

    if(this.state.loading === true) {
      return(
        <MainContainer>
          <TitleBar title='Update Contact'>
            <Link to={`/contacts/${this.state.id}`} className="link-button jelly">
              <div>
                <h3>Back to Contact</h3>
              </div>
            </Link>
          </TitleBar>
          <div className="form-container">
            <div className="form-card shadow">
              <h1>Loading</h1>
            </div>
          </div>
        </MainContainer>
      )
    }

    return(
      <MainContainer>
        <TitleBar title='Update Contact'>
          <Link to={`/contacts/${this.state.id}`} className="link-button jelly">
            <div>
              <h3>Back to Contact</h3>
            </div>
          </Link>
        </TitleBar>
        <div className="form-container">
          <div className="form-card shadow">
            <Formik
              initialValues={{
                id: this.state.id,
                name: this.state.name,
                company: this.state.company,
                email: this.state.email,
                phone_number: this.state.phone_number
              }}
              validationSchema={this.ContactSchema}
              onSubmit={(values, { setSubmitting }) => {
                const {name, company, phone_number, email} = values;
                const job = {name, company, phone_number, email};
                axios.put(`http://127.0.0.1:8000/api/contacts/${values.id}/`, job)
                  .then(res => {
                    setSubmitting(false);
                    this.setState({
                      to_dashboard: true
                    })
                  })
                  .catch(err => console.log(err.response));
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <h2>Name:</h2>
                  <div className="input-wrapper">
                    <Field type="text" name="name" />
                    <ErrorMessage name="name"  render={msg => <span className="error-message">{msg}</span>}/>
                  </div>
                  <h2>Company:</h2>
                  <div className="input-wrapper">
                    <Field type="text" name="company" />
                    <ErrorMessage name="company"  render={msg => <span className="error-message">{msg}</span>}/>
                  </div>
                  <h2>Phone Number:</h2>
                  <div className="input-wrapper">
                    <Field type="text" name="phone_number" />
                    <ErrorMessage name="phone_number"  render={msg => <span className="error-message">{msg}</span>}/>
                  </div>
                  <h2>Email:</h2>
                  <div className="input-wrapper">
                    <Field type="text" name="email" />
                    <ErrorMessage name="email"  render={msg => <span className="error-message">{msg}</span>}/>
                  </div>
                  <div className="form-button">
                    <button type="submit" disabled={isSubmitting}>Update Contact</button>
                  </div>
                </Form>
              )}
            </Formik>      
          </div>
        </div>
      </MainContainer>
    );
  };
};

export default UpdateContact;