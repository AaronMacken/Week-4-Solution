import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "./actions/userActions";

export class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      id: "",
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createUser({
      name: this.state.userName,
      id: this.state.id,
    });

    this.setState({
      userName: "",
      id: "",
    });
  }

  render() {
    return (
      <form className="container my-5" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label htmlFor="userName">User name</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="user name"
            name="userName"
            value={this.state.userName}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="id"
            name="id"
            value={this.state.id}
            onChange={this.handleChange.bind(this)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default connect(null, { createUser })(AddUser);
