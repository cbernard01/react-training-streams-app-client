import React from "react";
import _ from "lodash";
import {connect} from "react-redux";
import {fetchStream, editStream} from "../../redux/actions";
import StreamForm from "./StreamForm";
import history from "../../history";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    if(this.props.auth.userId === this.props.stream.userId) {
      this.props.editStream(this.props.match.params.id, formValues);
    }

    history.push("/");
  };

  render() {
    if (!this.props.stream) {
      return (
        <div>
          <div className="ui active centered text inline loader">Loading...</div>
        </div>
      );
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
    auth: state.auth
  }
};

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);
