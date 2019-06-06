import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class InfoButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to_dashboard: false
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    axios.delete(`http://127.0.0.1:8000/api/${this.props.url}/${this.props.id}/`)
      .then(res => {
        console.log(res)
        this.setState({
          to_dashboard: true
        })
      })
      .catch(err => {
        console.log(err.response)
      })
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

export default InfoButtons;