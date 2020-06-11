import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "./actions/userActions";
import PropTypes from "prop-types";

export class UpdateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDispatch = this.handleDispatch.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleDispatch() {
    this.props.updateUser({
      id: this.props.id,
      name: this.state.name,
    });
    this.resetForm();
  }

  resetForm() {
    this.setState({
      name: "",
    });
  }

  render() {
    return (
      <React.Fragment>
        <button
          type="button"
          className="btn btn-warning"
          data-toggle="modal"
          data-target={`#modal${this.props.id}`}
        >
          Edit name
        </button>

        <div
          className="modal fade"
          id={`modal${this.props.id}`}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          onClick={this.resetForm}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit {this.props.name}'s name
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  onClick={this.resetForm}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* INPUT */}
                <div className="form-group">
                  <label htmlFor="name">name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={this.resetForm}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={this.handleDispatch}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

UpdateUser.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default connect(null, { updateUser })(UpdateUser);
