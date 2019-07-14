import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

// Redux Imports
import { connect } from 'react-redux';
import { addContact } from '../../../actions/contacts';

// Component Imports
import MainContainer from '../MainContainer';
import TitleBar from '../../common/TitleBar';

// Formik Imports
import { Formik, Form, Field } from 'formik';

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to_dashboard: false
    }
  }

  render() {
    
    if(this.state.to_dashboard === true) {
      return(
        <Redirect exact to='/contacts' />
      )
    }

    return(
      <MainContainer>
        <TitleBar title='Add Contact'>
          <Link to='/contacts' className="link-button jelly">
            <div>
              <h3>Back to Contacts</h3>
            </div>
          </Link>
        </TitleBar>
        <div className="form-container">
          <div className="form-card shadow">
            <Formik
              initialValues={{
                name: '',
                company: '',
                phone_number: '',
                email: ''
              }}
              onSubmit={(values, { setSubmitting }) => {
                const { name, company, phone_number, email } = values;
                const contact = { name, company, phone_number, email }
                this.props.addContact(contact);
                setSubmitting(false);
                this.setState({
                  to_dashboard: true
                })
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <h2>Name:</h2>
                  <Field type="text" name="name" />
                  <h2>Company:</h2>
                  <Field type="text" name="company" />
                  <h2>Phone Number:</h2>
                  <Field type="text" name="phone_number" />
                  <h2>Email:</h2>
                  <Field type="text" name="email" />
                  <div className="form-button">
                    <button type="submit" disabled={isSubmitting}>Add Contact</button>
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

export default connect(null, { addContact })(AddContact);