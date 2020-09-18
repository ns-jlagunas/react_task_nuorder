import React from "react";
import { render } from "@testing-library/react";
import SelectedIssue from "../component/SelectedIssue";

const propIssue = {
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
    {
      id: 2,
      name: "Test2",
    },
  ],
};

const propIssue2 = {
  created_at: "2020-09-15T22:56:36Z",
  id: 702324872,
  title: "create-react-class has vulnerable pkg dependencies",
  url: "https://api.github.com/repos/facebook/react/issues/19840",
  created_at: "2020-09-15T22:56:36Z",
  body:
    "Aenean fermentum malesuada ex sit amet placerat. Nam vitae metus ac nisi finibus dictum sed non ligula. Aenean nibh turpis, volutpat nec quam vel, tristique viverra sem. Nunc fermentum eleifend ante, quis hendrerit tortor convallis ac. Nam efficitur enim risus, ac tincidunt mi consequat eu. Phasellus auctor eleifend nisi nec consectetur. Aliquam varius imperdiet diam ut tempor. Ut consectetur lorem non luctus pharetra. Vivamus feugiat posuere velit molestie blandit. Proin quis scelerisque mi. Cras",
  labels: [
    {
      id: 1,
      name: "Test",
    },
    {
      id: 2,
      name: "Test2",
    },
  ],
};

test("renders succesfully", () => {
  const { getByText } = render(<SelectedIssue item={propIssue} />);
  const text = getByText(/Labels:/i);
  expect(text).toBeInTheDocument();
});

test("if there's no item show the error message", () => {
  const { getByText } = render(<SelectedIssue item={undefined} />);
  const text = getByText(/No Issue selected!/i);
  expect(text).toBeInTheDocument();
});
test("if the body length is more than 500", () => {
  const { getByText } = render(<SelectedIssue item={propIssue2} />);
  const text = getByText(/...Read More/i);
  expect(text).toBeInTheDocument();
});
