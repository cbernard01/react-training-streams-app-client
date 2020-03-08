import React from "react";
import Modal from "../ui-elements/Modal";
import Button from "../ui-elements/Button";
import history from "../../history";

const StreamDelete = () => {
  const actions =  (
    <React.Fragment>
      <Button
        buttonType="button-animated"
        buttonClass="ui button basic negative"
        buttonText="Delete"
        buttonIcon="trash"
      />
      <Button
        buttonType="button-animated"
        buttonClass="ui button basic"
        buttonText="Cancel"
        buttonIcon="right angle"
      />
    </React.Fragment>
  );

  return (
    <div>
      <Modal
        title={"Delete Stream"}
        content={"Are you sure you want to delete this stream?"}
        actions={actions}
        onDismiss={()=> history.push("/")}
      />
    </div>
  );
};

export default StreamDelete;
