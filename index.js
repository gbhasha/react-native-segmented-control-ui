import React from 'react'
import { View, ViewPropTypes,  TouchableOpacity, StyleSheet,  Text } from 'react-native'
import PropTypes from 'prop-types'

const handleTabPress = (index, selectedIndex, onTabPress) => {
  selectedIndex !== index &&  onTabPress(index)
}

const TabOption = ({
    isTabActive, index, badge, text,
    firstTabStyle, lastTabStyle,
    tabStyle, activeTabStyle,
    tabTextStyle, activeTabTextStyle,
    tabBadgeContainerStyle, activeTabBadgeContainerStyle,
    tabBadgeStyle, activeTabBadgeStyle,
    onTabPress, textNumberOfLines,
    allowFontScaling,
    accessible,
    accessibilityLabel,
}) => {
    return (
        <TouchableOpacity style={[
            styles.tabStyle,
            tabStyle,
            isTabActive ? [styles.activeTabStyle, activeTabStyle] : {},
            firstTabStyle,
            lastTabStyle]}
            accessible={accessible}
            accessibilityLabel={accessibilityLabel}
            accessibilityTraits={isTabActive ? "selected" : "button"}
            accessibilityComponentType={"button"}
            onPress={() => onTabPress(index)}
            activeOpacity={1}>
            <View style={{ flexDirection: "row" }}>
                <Text style={[
                    styles.tabTextStyle,
                    tabTextStyle,
                    isTabActive ? [styles.activeTabTextStyle, activeTabTextStyle] : {}]}
                    numberOfLines={textNumberOfLines}
                    allowFontScaling={allowFontScaling}
                    ellipsizeMode="tail">
                    {text}
                </Text>
                {
                    badge ?
                        <View style={[
                            styles.tabBadgeContainerStyle,
                            tabBadgeContainerStyle,
                            isTabActive ? [styles.activeTabBadgeContainerStyle, activeTabBadgeContainerStyle] : {}]}>
                            <Text style={[
                                styles.tabBadgeStyle,
                                tabBadgeStyle,
                                isTabActive ? [styles.activeTabBadgeStyle, activeTabBadgeStyle] : {}]}
                                allowFontScaling={allowFontScaling}>
                                {badge}
                            </Text>
                        </View> : false
                }
            </View>
        </TouchableOpacity>
    )
}

const getAccessibilityLabelByIndex = (accessibilityLabels, index) => {
    return accessibilityLabels && accessibilityLabels.length > 0 && accessibilityLabels[index] ?  accessibilityLabels[index] : undefined
}

const SegmentedControlTab = ({
    selectedIndex, selectedIndices, values,
    badges, borderRadius, tabsContainerStyle,
    tabStyle, activeTabStyle,
    tabTextStyle, activeTabTextStyle,
    tabBadgeContainerStyle, activeTabBadgeContainerStyle,
    tabBadgeStyle, activeTabBadgeStyle,
    onTabPress, textNumberOfLines,
    allowFontScaling,
    accessible,
    accessibilityLabels,
}) => {

    const firstTabStyle = [{ borderRightWidth: values.length == 2 ? 1 : 0, borderTopLeftRadius: borderRadius, borderBottomLeftRadius: borderRadius }]
    const lastTabStyle = [{ borderLeftWidth: 0, borderTopRightRadius: borderRadius, borderBottomRightRadius: borderRadius }]

    return (
        <View
            style={[styles.tabsContainerStyle, tabsContainerStyle]}
            removeClippedSubviews={false}>
            {
                values.map((item, index) => {
                    const accessibilityText = getAccessibilityLabelByIndex(accessibilityLabels, index)
                    return (
                        <TabOption
                            key={index}
                            index={index}
                            badge={badges && badges[index] ? badges[index] : false}
                            isTabActive={selectedIndex === index}
                            text={item}
                            textNumberOfLines={textNumberOfLines}
                            onTabPress={(index) => handleTabPress(index, selectedIndex, onTabPress)}
                            firstTabStyle={index === 0 ? [{ borderRightWidth: 0 }, firstTabStyle] : {}}
                            lastTabStyle={index === values.length - 1 ? [{ borderLeftWidth: 0 }, lastTabStyle] : {}}
                            tabStyle={[tabStyle, index !== 0 && index !== values.length - 1 ? { marginLeft: -1 } : {}]}
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
    badges: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
    borderRadius: PropTypes.number,
    onTabPress: PropTypes.func,
    selectedIndex: PropTypes.number,
    selectedIndices: PropTypes.arrayOf(PropTypes.number),
    tabBadgeContainerStyle: Text.propTypes.style,
    tabBadgeStyle: Text.propTypes.style,
    tabStyle: ViewPropTypes.style,
    tabTextStyle: Text.propTypes.style,
    tabsContainerStyle: ViewPropTypes.style,
    textNumberOfLines: PropTypes.number,
    values: PropTypes.arrayOf(PropTypes.string),
}

TabOption.propTypes = {
  accessibilityLabel: PropTypes.string,
  accessible: PropTypes.bool,
  activeTabBadgeContainerStyle: Text.propTypes.style,
  activeTabBadgeStyle: Text.propTypes.style,
  activeTabStyle: ViewPropTypes.style,
  activeTabTextStyle: Text.propTypes.style,
  allowFontScaling: PropTypes.bool,
  badge: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  firstTabStyle: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.number,
  isTabActive: PropTypes.bool,
  lastTabStyle: PropTypes.arrayOf(PropTypes.object),
  onTabPress: PropTypes.func,
  tabBadgeContainerStyle: Text.propTypes.style,
  tabBadgeStyle: Text.propTypes.style,
  tabStyle: ViewPropTypes.style,
  tabTextStyle: Text.propTypes.style,
  tabsContainerStyle: ViewPropTypes.style,
  text: PropTypes.string,
  textNumberOfLines: PropTypes.number,
}

SegmentedControlTab.defaultProps = {
    values: ['One', 'Two', 'Three'],
    accessible: true,
    accessibilityLabels: [],
    badges: ['', '', ''],
    selectedIndex: 0,
    selectedIndices: [0],
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
    },
    tabStyle: {
        paddingVertical: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#0076FF',
        borderWidth: 1,
        backgroundColor: 'white',
    },
    activeTabStyle: {
        backgroundColor: '#0076FF'
    },
    tabTextStyle: {
        color: '#0076FF'
    },
    activeTabTextStyle: {
        color: 'white'
    },
    tabBadgeContainerStyle: {
        borderRadius: 20,
        backgroundColor: 'red',
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 5,
        marginBottom: 3
    },
    activeTabBadgeContainerStyle: {
        backgroundColor: 'white'
    },
    tabBadgeStyle: {
        color: 'white',
        fontSize: 11,
        fontWeight: 'bold'
    },
    activeTabBadgeStyle: {
        color: 'black'
    }
})

export default SegmentedControlTab
