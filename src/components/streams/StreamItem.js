import React from "react";
import Button from "../ui-elements/Button";
import {Link} from "react-router-dom";

const StreamItem = props => {
  const {id, userId, title, description} = props.stream;

  const renderAdmin = (id, currentUserId) => {
    if (userId === currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${id}`}>
            <Button
              buttonType="button-standard"
              buttonClass="ui icon button left attached basic tiny"
              buttonIcon="edit"
            />
          </Link>
          <Link to={`/streams/delete/${id}`}>
            <Button
              buttonType="button-standard"
              buttonClass="ui icon button right attached basic tiny"
              buttonIcon="trash"
            />
          </Link>
        </div>
      );
    }
  };

  return (
    <div className="item">
      {renderAdmin(id, props.currentUserId)}
      <i className="large middle aligned icon film"/>
      <div className="content">
        <Link to={`/streams/${id}`}>{title}</Link>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default StreamItem;
