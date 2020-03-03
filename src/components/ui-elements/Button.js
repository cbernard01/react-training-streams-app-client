import React from "react";

const Button = props => {

  const renderButton = ()=> {
    const {buttonType} = props;

    switch (buttonType) {
      case "button-animated":
        return (
          <button className={`ui ${props.buttonClass} animated button`} tabIndex="0">
            <div className="visible content">{props.buttonText}</div>
            <div className="hidden content">
              <i className={`${props.buttonIcon} icon`} />
            </div>
          </button>
        );
      case "button-standard":
        return (
          <button className={`${props.buttonClass}`} onClick={props.onClick}>
            <i className={`${props.buttonIcon} icon`}/>{props.buttonText}
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <React.Fragment>
      {renderButton()}
    </React.Fragment>
  );
};

export default Button;
