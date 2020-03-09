import React from "react";
import Modal from "../ui-elements/Modal";
import Button from "../ui-elements/Button";
import history from "../../history";
import {connect} from "react-redux";
import {deleteStream, fetchStream} from "../../redux/actions";

class StreamDelete extends React.Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onDismissHandler = () => {
    history.push("/");
  };

  onDeleteHandler = () => {
    if (this.props.auth.userId === this.props.stream.userId) {
      this.props.deleteStream(this.props.match.params.id);
    }
  };

  renderActions = () => (
    <React.Fragment>
      <Button
        buttonType="button-animated"
        buttonClass="ui button basic negative"
        buttonText="Delete"
        buttonIcon="trash"
        onClick={this.onDeleteHandler}
      />
      <Button
        buttonType="button-animated"
        buttonClass="ui button basic"
        buttonText="Cancel"
        buttonIcon="right angle"
        onClick={this.onDismissHandler}
      />
    </React.Fragment>
  );

  renderContent = () => {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?"
    } else {
      return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`
    }
  };

  render() {
    return (
        <Modal
          title={"Delete Stream"}
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={this.onDismissHandler}
        />
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
    auth: state.auth
  }
};

export default connect(mapStateToProps, {deleteStream, fetchStream})(StreamDelete);
