import React from 'react'
import { View, ViewPropTypes, StyleSheet,  Text } from 'react-native'
import PropTypes from 'prop-types'
import TabOption from './TabOption'

export const handleTabPress = (index, selectedIndex, onTabPress) => {
    selectedIndex !== index &&  onTabPress(index)
}

export const getAccessibilityLabelByIndex = (accessibilityLabels, index) => {
    return accessibilityLabels && accessibilityLabels.length > 0 && accessibilityLabels[index] ?  accessibilityLabels[index] : undefined
}

const SegmentedControlTab = ({
    selectedIndex, values,
    badges, borderRadius, tabsContainerStyle,
    tabStyle, activeTabStyle,
    tabTextStyle, activeTabTextStyle,
    tabBadgeContainerStyle, activeTabBadgeContainerStyle,
    tabBadgeStyle, activeTabBadgeStyle,
    onTabPress, textNumberOfLines,
    allowFontScaling,
    accessible,
    accessibilityLabels,
    testIDs,
}) => {

    const firstTabStyle = [{ borderLeftWidth: 0, borderTopWidth: 0}]
    const lastTabStyle = [{ }]
    const containerStyle = [{borderRadius: borderRadius, overflow: 'hidden'}]
    return (
        <View
            style={[styles.tabsContainerStyle, containerStyle, tabsContainerStyle]}
            removeClippedSubviews={false}>
            {
                values.map((item, index) => {
                    const accessibilityText = getAccessibilityLabelByIndex(accessibilityLabels, index)
                    return (
                        <TabOption
                            key={index}
                            index={index}
                            testID={testIDs.length > 0 ? testIDs[index] : undefined}
                            badge={badges && badges[index] ? badges[index] : undefined}
                            isTabActive={selectedIndex === index}
                            text={item}
                            textNumberOfLines={textNumberOfLines}
                            onTabPress={(index) => handleTabPress(index, selectedIndex, onTabPress)}
                            firstTabStyle={index === 0 ? [firstTabStyle] : {}}
                            lastTabStyle={index === values.length - 1 ? [lastTabStyle] : {}}
                            tabStyle={[tabStyle]}
                            activeTabStyle={activeTabStyle}
                            tabTextStyle={tabTextStyle}
                            activeTabTextStyle={activeTabTextStyle}
                            tabBadgeContainerStyle={tabBadgeContainerStyle}
                            activeTabBadgeContainerStyle={activeTabBadgeContainerStyle}
                            tabBadgeStyle={tabBadgeStyle}
                            activeTabBadgeStyle={activeTabBadgeStyle}
                            allowFontScaling={allowFontScaling}
                            accessible={accessible}
                            accessibilityLabel={accessibilityText ? accessibilityText : item }
                        />
                    )
                })
            }
        </View>
    )
}

SegmentedControlTab.propTypes = {
    accessibilityLabels: PropTypes.arrayOf(PropTypes.string),
    accessible: PropTypes.bool,
    activeTabBadgeContainerStyle: Text.propTypes.style,
    activeTabBadgeStyle: Text.propTypes.style,
    activeTabStyle: ViewPropTypes.style,
    activeTabTextStyle: Text.propTypes.style,
    allowFontScaling: PropTypes.bool,
    badges: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])),
    borderRadius: PropTypes.number,
    onTabPress: PropTypes.func,
    selectedIndex: PropTypes.number,
    tabBadgeContainerStyle: Text.propTypes.style,
    tabBadgeStyle: Text.propTypes.style,
    tabStyle: ViewPropTypes.style,
    tabTextStyle: Text.propTypes.style,
    tabsContainerStyle: ViewPropTypes.style,
    testIDs: PropTypes.arrayOf(PropTypes.string),
    textNumberOfLines: PropTypes.number,
    values: PropTypes.arrayOf(PropTypes.string),
}

SegmentedControlTab.defaultProps = {
    values: ['One', 'Two', 'Three'],
    accessible: true,
    accessibilityLabels: [],
    testIDs: [],
    badges: [],
    selectedIndex: 0,
    onTabPress: () => { },
    tabsContainerStyle: {},
    tabStyle: {},
    activeTabStyle: {},
    tabTextStyle: {},
    activeTabTextStyle: {},
    tabBadgeContainerStyle: {},
    activeTabBadgeContainerStyle: {},
    tabBadgeStyle: {},
    activeTabBadgeStyle: {},
    borderRadius: 5,
    textNumberOfLines: 1,
    allowFontScaling: true,
}

const styles = StyleSheet.create({
    tabsContainerStyle: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        borderColor: '#007AFF',
        borderWidth: 1,
    },
})

export default SegmentedControlTab
