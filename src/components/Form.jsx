import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { createPost } from "../actions/postAction";

class Form extends React.Component {
  state = {
    title: "",
    body: ""
  };
  // onChange(e) {
  //   this.setState({
  //     [e.target.name]:e.target.value,
  //   });

  // }
  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    // Call action
    this.props.createPost(post)
  }
  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="title">Title</label>
            <br />
            <input
              type="text"
              name="title"
              onChange={e =>
                this.setState({
                  title: e.target.value
                })
              }
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label htmlFor="body">Body</label>
            <br />
            <textarea
              name="body"
              onChange={e =>
                this.setState({
                  body: e.target.value
                })
              }
              value={this.state.body}
            />
          </div>
          <button type="submit" onClick={e => this.onSubmit(e)}>
            Add Post
          </button>
        </form>
        <hr />
      </div>
    );
  }
}
Form.propTypes = {
  createPost:PropTypes.func.isRequired,
  post: PropTypes.shape({
    title:PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
}

export default connect(
  null,
  { createPost }
)(Form);
