// __tests__/Intro-test.js
import React from 'react';
import SegmentedControlTab from '../SegmentedControlTab';
jest.mock("../TabOption", () => 'TabOption')

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<SegmentedControlTab />).toJSON();
  expect(tree).toMatchSnapshot();
});