import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

// Redux Imports 
import { connect } from 'react-redux';
import { deleteContact } from '../../actions/contacts';
import { deleteJob } from '../../actions/jobs';

class InfoButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to_dashboard: false
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if(this.props.url === 'contacts') {
      this.props.deleteContact(this.props.id);
      this.setState({
        to_dashboard: true
      })
    } else if(this.props.url === 'jobs') {
      this.props.deleteJob(this.props.id);
      this.setState({
        to_dashboard: true
      })
    }
  }

  render() {

    if(this.state.to_dashboard === true) {
      return(
        <Redirect exact to={`/${this.props.url}`} />
      )
    }

    return(
      <div className="info-buttons">
        <Link to={`/${this.props.url}/${this.props.id}/update`}>Update {this.props.model}</Link>
        <div className="delete-button">
          <button onClick={this.onClick}>Delete {this.props.model}</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.contacts,
  jobs: state.jobs.jobs
});

export default connect(mapStateToProps, { deleteJob, deleteContact })(InfoButtons);