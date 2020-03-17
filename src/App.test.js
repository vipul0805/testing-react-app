import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from "enzyme";
import Postform from "./components/testingComponent"

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
describe("App component", () => {
  it("check is it empty in starting", () => {

    const wrapper = shallow(<Postform />)
    const text = wrapper.find("input#qw").text();
    expect(text).toEqual("");

  })
});