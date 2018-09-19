import React from 'react'
import SegmentedControlTab, { handleTabPress, getAccessibilityLabelByIndex } from '../SegmentedControlTab'

import renderer from 'react-test-renderer'
jest.mock('../TabOption', () => 'TabOption')

describe('SegmentedControlTab', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })
  it('renders correctly', () => {
    const tree = renderer.create(<SegmentedControlTab />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shoudl call defaultProps of onTabPress ', () => {
    const tree = renderer.create(<SegmentedControlTab selectedIndex={1} />).toJSON()
    tree.children[0].props.onTabPress()
    expect(tree).toMatchSnapshot()
  })

  it('should call the given function when onTabPress is invoked ', () => {
    const tabIndex = 0
    const selectedIndex = 1
    const callbackFunc = jest.fn()
    const tree = renderer.create(<SegmentedControlTab selectedIndex={selectedIndex}
      onTabPress={callbackFunc} />).toJSON()
    tree.children[tabIndex].props.onTabPress(tabIndex)
    expect(callbackFunc).toHaveBeenCalledWith(tabIndex)
  })

  it('should pass given testIDs to child component', () => {
    const tree = renderer.create(<SegmentedControlTab testIDs={['id-1', 'id-2', 'id-3']} />).toJSON()
    expect(tree.children[0].props.testID).toBe('id-1')
    expect(tree.children[1].props.testID).toBe('id-2')
    expect(tree.children[2].props.testID).toBe('id-3')
  })

  it('should pass given AccessibilityLabels to child component', () => {
    const tree = renderer.create(<SegmentedControlTab accessibilityLabels={['label-1', 'label-2', 'label-3']} />).toJSON()
    expect(tree.children[0].props.accessibilityLabel).toBe('label-1')
    expect(tree.children[1].props.accessibilityLabel).toBe('label-2')
    expect(tree.children[2].props.accessibilityLabel).toBe('label-3')
  })

  it('should pass given badges to child component', () => {
    const tree = renderer.create(<SegmentedControlTab badges={['1', '2', '3']} />).toJSON()
    expect(tree.children[0].props.badge).toBe('1')
    expect(tree.children[1].props.badge).toBe('2')
    expect(tree.children[2].props.badge).toBe('3')
  })
})

describe('handleTabPress', () => {
  it('should call the callback when selectedIndex is different', () => {
    const callbackSpy = jest.fn()
    const tabIndex = 1
    const selectedIndex = 2
    handleTabPress(tabIndex, selectedIndex, callbackSpy)
    expect(callbackSpy).toHaveBeenCalledWith(tabIndex)
  })
})

describe('getAccessibilityLabelByIndex', () => {
  it('should return the AccessibilityLabel by given index', () => {
    const AccessibilityLabels = ['Label 1', 'Label 2']
    const result = getAccessibilityLabelByIndex(AccessibilityLabels, 1)
    expect(result).toBe(AccessibilityLabels[1])
  })
})
