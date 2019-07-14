import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

// Component Imports
import MainContainer from '../MainContainer';
import TitleBar from '../../common/TitleBar';

// Formik and Yup Imports
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class UpdateJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      job_title: '',
      job_status: '',
      id: '',
      loading: true,
      to_dashboard: false
    }
  }

  componentWillMount() {
    axios.get(`http://127.0.0.1:8000/api/jobs/${this.props.match.params.id}/`)
      .then(res => {
        this.setState({
          id: res.data.id,
          job_title: res.data.job_title,
          company: res.data.company,
          job_status: res.data.job_status,
          loading: false
        });
      })
      .catch(err => {
        console.log(err.response);
      })
  }

  JobSchema = Yup.object().shape({
    job_title: Yup.string()
      .required('Job Title is a required field.'),
    company: Yup.string()
      .required('Company is a required field.')
  })

  render() {

    if(this.state.to_dashboard === true) {
      return(
        <Redirect exact to={`/jobs/${this.state.id}`} />
      )
    }

    if(this.state.loading === true) {
      return(
        <MainContainer>
          <TitleBar title='Update Job'>
            <Link to={`/jobs/${this.state.id}`}  className="link-button jelly">
              <div>
                <h3>Back to Job</h3>
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
        <TitleBar title='Update Job'>
          <Link to={`/jobs/${this.state.id}`}  className="link-button jelly">
            <div>
              <h3>Back to Job</h3>
            </div>
          </Link>
        </TitleBar>
        <div className="form-container">
          <div className="form-card shadow">
            <Formik
              initialValues={{
                id: this.state.id,
                job_title: this.state.job_title,
                company: this.state.company,
                job_status: this.state.job_status
              }}
              validationSchema={this.JobSchema}
              onSubmit={(values, { setSubmitting }) => {
                const {company, job_title, job_status} = values;
                const job = {company, job_title, job_status};
                axios.put(`http://127.0.0.1:8000/api/jobs/${this.state.id}/`, job)
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
                  <h2>Job Title:</h2>
                  <Field type="text" name="job_title" />
                  <ErrorMessage name="job_title"/>
                  <h2>Company:</h2>
                  <Field type="text" name="company" />
                  <ErrorMessage name="company"/>
                  <h2>Job Status:</h2>
                  <Field component="select" name="job_status">
                    <option value="APP">Applied</option>
                    <option value="OFF">Offered</option>
                    <option value="REJ">Rejected</option>
                  </Field>
                  <div className="form-button">
                    <button type="submit" disabled={isSubmitting}>Update Job</button>
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

export default UpdateJob;