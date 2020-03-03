import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {fetchStreams} from "../../redux/actions";
import StreamItem from "./StreamItem";
import Button from "../ui-elements/Button";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderItems = () => {
    return this.props.streams.map(stream => {
      return (
        <StreamItem
          key={stream.id}
          stream={stream}
          currentUserId={this.props.currentUserId}
        />
      );
    });
  };

  renderList = () => {
    if (this.props.isSignedIn === null) {
      return (
        <div className="ui active dimmer">
          <div className="ui text loader">Loading</div>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Streams</h2>
          <div className="ui celled list">
            {this.renderItems()}
          </div>
        </div>
      );
    }
  };

  renderButton = () => {
    if (this.props.isSignedIn === true) {
      return (
        <div style={{marginTop: "10px"}}>
          <Link to={"/streams/new"}>
            <Button
              buttonType="button-animated"
              buttonClass="ui right floated button basic"
              buttonIcon="angle right"
              buttonText="Create Stream"
            />
          </Link>
        </div>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.renderList()}
        {this.renderButton()}
      </React.Fragment>
    )
  };
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, {fetchStreams})(StreamList);
