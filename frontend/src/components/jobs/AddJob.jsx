import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

// Redux Imports
import { connect } from 'react-redux';
import { addJob } from '../../actions/jobs';

// Component Imports
import MainContainer from '../layout/MainContainer';
import TitleBar from '../common/TitleBar';

// Formik and Yup Imports
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class AddJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to_dashboard: false
    }
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
        <Redirect exact to='/jobs' />
      )
    }

    return(
      <MainContainer>
        <TitleBar title='Add Job'>
          <Link to='/jobs' className="link-button jelly">
            <div>
              <h3>Back to Jobs</h3>
            </div>
          </Link>
        </TitleBar>
        <div className="form-container">
          <div className="form-card shadow">
            <Formik
              initialValues={{
                job_title: '',
                company: '',
                job_status: 'APP'
              }}
              validationSchema={this.JobSchema}
              onSubmit={(values, { setSubmitting, }) => {
                const {company, job_title, job_status} = values;
                const job = {company, job_title, job_status};
                this.props.addJob(job);
                setSubmitting(false);
                this.setState({
                  to_dashboard: true
                })
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
                    <button type="submit" disabled={isSubmitting}>Add Job</button>
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

export default connect(null, { addJob })(AddJob);