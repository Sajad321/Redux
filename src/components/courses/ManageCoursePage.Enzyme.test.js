import React from "react";
import { mount } from "enzyme";
import { authors, newCourse, courses } from "../../../tools/mockData";
import { ManageCoursePage } from "./ManageCoursePage";

function render(args) {
  const defaultProps = {
    authors,
    courses,
    history: {},
    errors: {},
    saveCourse: jest.fn(),
    loadCourses: jest.fn(),
    loadAuthors: jest.fn(),
    course: newCourse,
    match: {},
  };

  const props = { ...defaultProps, ...args };
  return mount(<ManageCoursePage {...props} />);
}

it("sets error when attempting to save an empty title field", () => {
  const wrapper = render();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toEqual("Title is required !");
});
