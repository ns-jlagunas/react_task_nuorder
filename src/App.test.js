import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import AutoComplete from "./component/AutoComplete";
import SelectedIssue from "./component/SelectedIssue";

test("renders succesfully", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(AutoComplete)).toHaveLength(1);
  expect(wrapper.find(SelectedIssue)).toHaveLength(1);
});
