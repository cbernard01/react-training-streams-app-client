import React from "react";
import Button from "../ui-elements/Button";

const StreamItem = props => {
  const {id, userId, title, description} = props.stream;

  const renderAdmin = (id, currentUserId) => {
    if (userId === currentUserId) {
      return (
        <div className="right floated content">
          <Button
            buttonType="button-standard"
            buttonClass="ui icon button left attached basic tiny"
            buttonIcon="edit"
          />
          <Button
            buttonType="button-standard"
            buttonClass="ui icon button right attached basic tiny"
            buttonIcon="trash"
          />
        </div>
      );
    }
  };

  return (
    <div className="item">
      {renderAdmin(id, props.currentUserId)}
      <i className="large middle aligned icon film"/>
      <div className="content">{title}
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default StreamItem;
