import React from "react";

const Input = props => {
  const {inputType, label, input, meta, inputClass, autoComplete, fieldClass} = props;

  const renderInput = () => {
    switch (inputType) {
      case "text":
        return (
          <input type="text" {...input} className={`${inputClass}`} autoComplete={`${autoComplete || "on"}`}/>
        );
      case "text-area":
        return (
          <textarea {...input} className={`${inputClass}`} autoComplete={`${autoComplete || "on"}`}/>
        );
      default:
        return null;
    }
  };

  const renderOutput = () => {
    if (meta.error && meta.touched) {
      return (
        <div className={`field ${fieldClass} error`}>
          <label htmlFor={label}>{label}</label>
          {renderInput()}
          <div className="ui error message">{meta.error}</div>
        </div>
      );
    }

    return (
      <div className={`field ${fieldClass}`}>
        <label htmlFor={label}>{label}</label>
        {renderInput()}
      </div>
    );
  };

  return (
    <React.Fragment>
      {renderOutput()}
    </React.Fragment>
  );
};

export default Input;
