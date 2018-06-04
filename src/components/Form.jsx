import React from "react";

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
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data));

    console.log(this.state.title, this.state.body);
  }
  render() {
    return <div>
        <form>
          <div>
            <label htmlFor="title">Title</label>
            <br />
            <input type="text" name="title" onChange={e => this.setState({
                  title: e.target.value
                })} value={this.state.title} />
          </div>
          <br />
          <div>
            <label htmlFor="body">Body</label>
            <br />
            <textarea name="body" onChange={e => this.setState({
                  body: e.target.value
                })} value={this.state.body} />
          </div>
          <button type="submit" onClick={e => this.onSubmit(e)}>
            Add Post
          </button>
        </form>
        <hr />
      </div>;
  }
}

export default Form;
