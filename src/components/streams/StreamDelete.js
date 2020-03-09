import React from "react";
import Modal from "../ui-elements/Modal";
import Button from "../ui-elements/Button";
import history from "../../history";
import {connect} from "react-redux";
import {deleteStream, fetchStream} from "../../redux/actions";
import {Link} from "react-router-dom";

class StreamDelete extends React.Component {

  onDismissHandler = () => {
    history.push("/");
  };

  onDeleteHandler = () => {
    this.props.deleteStream(this.props.match.params.id);
    history.push("/");
  };

  actions = () => (
    <React.Fragment>
      <Button
        buttonType="button-animated"
        buttonClass="ui button basic negative"
        buttonText="Delete"
        buttonIcon="trash"
        onClick={this.onDeleteHandler}
      />
      <Link to={"/"}>
        <Button
          buttonType="button-animated"
          buttonClass="ui button basic"
          buttonText="Cancel"
          buttonIcon="right angle"
        />
      </Link>
    </React.Fragment>
  );

  render() {
    return (
      <div>
        <Modal
          title={"Delete Stream"}
          content={"Are you sure you want to delete this stream?"}
          actions={this.actions()}
          onDismiss={this.onDismissHandler}
        />
      </div>
    );
  };
}

export default connect(null, {deleteStream, fetchStream})(StreamDelete);
