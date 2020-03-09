import React from "react";
import {connect} from "react-redux";
import {fetchStream} from "../../redux/actions";

class StreamShow extends React.Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderShow = () => {
    if (!this.props.stream) {
      return (
        <div>
          <div className="ui active centered text inline loader">Loading...</div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>{this.props.stream.title}</h1>
          <h5>{this.props.stream.description}</h5>
        </div>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.renderShow()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
    auth: state.auth
  }
};

export default connect(mapStateToProps, {fetchStream})(StreamShow);
