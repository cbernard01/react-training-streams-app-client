import React from "react";
import {connect} from "react-redux";

import Button from "../ui-elements/Button";
import {signIn, signOut} from "../../redux/actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: "298602676733-uu3dmbmegvlda57v0ctlq21bd3mghh23.apps.googleusercontent.com",
        scope: "email"
      }).then(()=>{
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());

        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) this.props.signIn(this.auth.currentUser.get().getId());
    else this.props.signOut();
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if(this.props.isSignedIn === null) {
      return <div className="ui active mini inline loader"/>;
    } else if (this.props.isSignedIn) {
      return (
        <Button
          buttonType="button-standard"
          buttonClass="ui red google button"
          buttonIcon="google icon"
          buttonText="Sign Out"
          onClick={this.onSignOutClick}
        />
      );
    } else {
      return (
        <Button
          buttonType="button-standard"
          buttonClass="ui red google button"
          buttonIcon="google icon"
          buttonText="Sign In with Google"
          onClick={this.onSignInClick}
        />
      );
    }
  }

  render() {
    return (
      <div className="item">{this.renderAuthButton()}</div>
    );
  };
}

const mapStateToProps = state => {
  return {isSignedIn: state.auth.isSignedIn};
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
