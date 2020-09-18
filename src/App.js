import React, { useEffect, useState } from "react";
import AutoComplete from "./component/AutoComplete/index.jsx";
import SelectedIssue from "./component/SelectedIssue/index.jsx";
import ApiService from "./service/ApiService";
import "./App.scss";

function App() {
  const service = new ApiService();
  const [issues, setIssues] = useState([]);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    async function fetchIssues() {
      const items = await service.getIssues();
      setIssues(items);
    }
    fetchIssues();
  }, []);

  const selectIssue = (issue) => {
    setSelected(issue);
  };

  return (
    <div className="app">
      <h1>React Issues</h1>
      <div className="app__wrapper">
        <AutoComplete
          issues={issues}
          onSelectIssue={selectIssue}
        ></AutoComplete>
        <SelectedIssue item={selected}></SelectedIssue>
      </div>
    </div>
  );
}

export default App;
