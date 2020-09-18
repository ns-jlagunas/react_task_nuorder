import React from "react";
import { shallow, mount } from "enzyme";
import AutoComplete from "../component/AutoComplete";

const props = {
  issues: [
    {
      created_at: "2020-09-15T22:56:36Z",
      id: 702324872,
      title: "create-react-class has vulnerable pkg dependencies",
      url: "https://api.github.com/repos/facebook/react/issues/19840",
      created_at: "2020-09-15T22:56:36Z",
      body: "body",
      labels: [
        {
          id: 1,
          name: "Test",
        },
      ],
    },
    {
      created_at: "2020-09-15T22:56:36Z",
      id: 702324873,
      title: "create-react-class has vulnerable pkg dependencies",
      url: "https://api.github.com/repos/facebook/react/issues/19840",
      created_at: "2020-09-15T22:56:36Z",
      body: "body",
      labels: [
        {
          id: 1,
          name: "Test",
        },
      ],
    },
    {
      created_at: "2020-09-15T22:56:36Z",
      id: 702324875,
      title: "create-react-class has vulnerable pkg dependencies",
      url: "https://api.github.com/repos/facebook/react/issues/19840",
      created_at: "2020-09-15T22:56:36Z",
      body: "body",
      labels: [
        {
          id: 1,
          name: "Test",
        },
      ],
    },
  ],
  onSelectIssue: jest.fn(),
};

describe("AutoComplete", () => {
  it("renders the input", () => {
    const wrapper = mount(
      <AutoComplete
        issues={props.issues}
        onSelectIssue={props.onSelectIssue}
      ></AutoComplete>
    );
    expect(wrapper.find("input").length).toEqual(1);
  });
});

it("moving through the options should work", () => {
  const wrapper = mount(
    <AutoComplete
      issues={props.issues}
      onSelectIssue={props.onSelectIssue}
    ></AutoComplete>,
    { attachTo: document.body }
  );
  const input = wrapper.find("input");
  const stateSetter = jest.fn();
  let scrollIntoViewMock = jest.fn();
  window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

  jest
    .spyOn(React, "useState")
    .mockImplementation((stateValue) => [(stateValue = "react"), stateSetter]);

  input.simulate("change", { target: { value: "rea" } });
  input.simulate("change", { target: { value: "react" } });
  expect(document.getElementsByClassName("issue").length).toEqual(3);
  input.simulate("keyDown", { key: "ArrowDown" });
  input.simulate("keyDown", { key: "ArrowDown" });
  input.simulate("keyDown", { key: "ArrowDown" });
  input.simulate("keyDown", { key: "ArrowUp" });
  input.simulate("keyDown", { key: "ArrowUp" });
  input.simulate("keyDown", { key: "Enter" });
  expect(document.getElementsByClassName("issue").length).toEqual(0);
});
