import React from 'react'
import { View, ViewPropTypes,  TouchableOpacity, StyleSheet,  Text } from 'react-native'
import PropTypes from 'prop-types'

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
    testID,
}) => {
    return (
        <TouchableOpacity style={[
            styles.tabStyle,
            tabStyle,
            isTabActive ? [styles.activeTabStyle, activeTabStyle] : {},
            firstTabStyle,
            lastTabStyle]}
            testID={testID}
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
                    badge !== undefined &&
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
                        </View>
                }
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tabStyle: {
        paddingVertical: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftColor: '#007AFF',
        borderLeftWidth: 1,
        backgroundColor: 'white',
    },
    activeTabStyle: {
        backgroundColor: '#007AFF'
    },
    tabTextStyle: {
        color: '#007AFF'
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

TabOption.propTypes = {
    accessibilityLabel: PropTypes.string,
    accessible: PropTypes.bool,
    activeTabBadgeContainerStyle: Text.propTypes.style,
    activeTabBadgeStyle: Text.propTypes.style,
    activeTabStyle: ViewPropTypes.style,
    activeTabTextStyle: Text.propTypes.style,
    allowFontScaling: PropTypes.bool,
    badge: PropTypes.number,
    firstTabStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    index: PropTypes.number,
    isTabActive: PropTypes.bool,
    lastTabStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    onTabPress: PropTypes.func,
    tabBadgeContainerStyle: Text.propTypes.style,
    tabBadgeStyle: Text.propTypes.style,
    tabStyle: ViewPropTypes.style,
    tabTextStyle: Text.propTypes.style,
    tabsContainerStyle: ViewPropTypes.style,
    testID: PropTypes.string,
    text: PropTypes.string,
    textNumberOfLines: PropTypes.number,
  }

export default TabOption