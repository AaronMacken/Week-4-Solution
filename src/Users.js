import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteUser } from "./actions/userActions";
import UpdateUser from "./UpdateUser";

export class Users extends Component {
  render() {
    let userJsx =
      this.props.users && this.props.users.length > 0 ? (
        this.props.users.map((user) => (
          <div className="card col-12 col-md-6 p-2" key={user.id}>
            <h4>{user.name}</h4>
            <UpdateUser name={user.name} id={user.id} />
            <button
              className="btn btn-danger"
              onClick={() => this.props.deleteUser(user.id)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No users exist</p>
      );

    return (
      <div>
        <h2>Users</h2>
        <div className="container">
          <div className="row">{userJsx}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users.users,
});

export default connect(mapStateToProps, { deleteUser })(Users);
