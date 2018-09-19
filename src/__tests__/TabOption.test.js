// __tests__/Intro-test.js
import React from 'react';
import TabOption from '../TabOption';

import renderer from 'react-test-renderer';

describe('TabOption', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  });

  it('renders correctly', () => {
    const tree = renderer.create(<TabOption />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should apply active tab styles when isTabActive is set to true', () => {
    const activeTabStyle = {backgroundColor: '#0000FF'}
    const tree = renderer.create(<TabOption
                    activeTabStyle={activeTabStyle}
                    isTabActive />).toJSON();
    expect(tree.props.style.backgroundColor).toBe(activeTabStyle.backgroundColor)
  });

  it('should call the onPress handler when tapped', () => {
    const tabIndex = 1
    const mockFn = jest.fn()
    const tree = renderer.create(<TabOption
                    testID='tab'
                    index={tabIndex}
                    onTabPress={mockFn} />).toJSON()
    jest.mock('TouchableOpacity', () => {
      const jestReactNative = require('jest-react-native')
      return jestReactNative('TouchableOpacity')
    })
    tree.props.onPress();
    expect(mockFn).toHaveBeenCalledWith(tabIndex)

  });

  it('should render the badge along with tab text when badge is passed in props ', () => {
    const tree = renderer.create(<TabOption badge={5}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should apply the passed badgeStyle when tab is active ', () => {
    const styles = {
      activeTabStyle : {backgroundColor: '#0000FF'},
      activeTabBadgeStyle : {color: '#CCCCCC'},
      activeTabBadgeContainerStyle : {backgroundColor: '#00FFFF'}
    }

    const tree = renderer.create(<TabOption badge={5}
                    activeTabStyle={styles.activeTabStyle}
                    activeTabBadgeContainerStyle={styles.activeTabBadgeContainerStyle}
                    activeTabBadgeStyle={styles.activeTabBadgeStyle}
                    isTabActive />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})


