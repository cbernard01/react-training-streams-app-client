import React from "react";
import {Field, reduxForm} from "redux-form";

import Input from "../ui-elements/Input";
import Button from "../ui-elements/Button";

class StreamForm extends React.Component {

  onSubmit = async formValues => {
    await this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          inputType="text"
          name="title"
          label="Title"
          autoComplete="off"
          fieldClass="required"
          component={Input}
        />
        <Field
          inputType="text-area"
          fieldClass="required"
          name="description"
          label="Description"
          component={Input}
        />
        <Button
          buttonType="button-animated"
          buttonClass="ui button basic"
          buttonText="Submit"
          buttonIcon="angle right"
        />
      </form>
    );
  };
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) errors.title = "You must enter a title.";
  if (!formValues.description) errors.description = "You must enter a description.";

  return errors;
};

export default reduxForm({
  form: "streamFrom",
  validate: validate
})(StreamForm);
