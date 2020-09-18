import React, { useState } from "react";
import "./styles.scss";

function AutoComplete(props) {
  const { issues, onSelectIssue } = props;
  const [search, setSearch] = useState("");
  const [selectionIndex, setSelectionIndex] = useState(-1);
  const [typing, setTyping] = useState(false);

  if (!issues.length) {
    return <p>No Issues found!</p>;
  }
  const handleSelect = (e, issue) => {
    onSelectIssue(issue);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (search.length > 1) {
      setTyping(true);
    } else {
      setTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    const listLength = document.getElementsByClassName("issue").length;
    if (e.key === "Enter" && selectionIndex !== -1) {
      const id = document
        .getElementsByClassName("issue--selected")[0]
        .getAttribute("id");
      const selectedIssue = issues.filter(
        (issue) => issue.id === Number(id)
      )[0];
      onSelectIssue(selectedIssue);
      setTyping(false);
    }
    if (
      e.key === "ArrowDown" &&
      selectionIndex < issues.length - 1 &&
      selectionIndex < listLength - 1
    ) {
      setSelectionIndex(selectionIndex + 1);
      if (selectionIndex >= 0) {
        document
          .getElementsByClassName("issue")
          [selectionIndex].scrollIntoView();
      }
    }
    if (e.key === "ArrowUp" && selectionIndex > 0) {
      setSelectionIndex(selectionIndex - 1);
      if (selectionIndex < issues.length && selectionIndex < listLength) {
        document
          .getElementsByClassName("issue")
          [selectionIndex - 1].scrollIntoView();
      }
    }
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        className="input"
        onKeyDown={handleKeyPress}
        placeholder="Search an issue"
      />
      {typing && (
        <ul className="autocomplete__list">
          {issues
            .filter(
              (val) =>
                val.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
            )
            .map((val, index) => (
              <li
                onClick={(e) => {
                  handleSelect(e, val);
                }}
                key={val.id}
                id={val.id}
                className={
                  index === selectionIndex ? "issue issue--selected" : "issue"
                }
              >
                {val.title}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default AutoComplete;
