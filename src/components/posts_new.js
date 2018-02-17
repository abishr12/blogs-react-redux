import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field label="Title" name="title" component={this.renderField} />
        <Field
          label="Categores"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    );
  }
}

function validate(values) {
  // values == values passed into theform
  const errors = {};

  // if errors is empty, form is fine to submit

  // if (values.title.length < 3) {
  //   errors.title = "Title must be at least 3 characters";
  // }

  if (!values.titile) {
    errors.title = "Enter a title ";
  }

  if (!values.categories) {
    errors.categories = "Enter some categories";
  }

  if (!values.categories) {
    errors.categories = "Enter some content please";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(PostsNew);
