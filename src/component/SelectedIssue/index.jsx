import React from "react";
import "./styles.scss";

function SelectedIssue(props) {
  const { item } = props;

  if (!item || !Object.keys(item).length) {
    return <p>No Issue selected!</p>;
  }
  return (
    <div className="selected">
      <div className="selected__title">{item.title}</div>
      <a className="selected__url" href={item.url}>
        {item.url}
      </a>
      <div className="selected__body">
        {item.body.slice(0, 500)}
        {item.body.length > 500 ? <a href={item.url}>...Read More</a> : ""}
      </div>
      <div className="selected__created">Created at: {item.created_at}</div>
      <div className="selected__labels">
        <span>Labels: </span>
        {item.labels.map((label, index) => (
          <span key={label.id}>
            <span>{label.name}</span>
            <span>{index < item.labels.length - 1 ? ", " : ""}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default SelectedIssue;
