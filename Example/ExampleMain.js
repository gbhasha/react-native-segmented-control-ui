import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-ui'

class ExampleMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            badgesStyleIndex: 0,
            customStyleIndex: 0,
            customStyleIndex1: 0
        }
    }

    handleSingleIndexSelect = (index) => {
        this.setState({
            selectedIndex: index
        });
    }

    handleBadgesSelect = (index) => {
        this.setState({
            badgesStyleIndex: index
        });
    }

    handleCustomIndexSelect = (index) => {
        this.setState({
            customStyleIndex: index
        });
    }

    handleCustomIndexSelect1 = (index) => {
        this.setState({
            customStyleIndex1: index
        });
    }

    render() {
        return (
            <View style={{flex: 1}}>

                <View style={[styles.container, {borderLeftColor: '#8BC34A'}]}>
                    <Text style={[styles.headerText]} >Default segmented control</Text>
                    <SegmentedControlTab
                        values={["one", "two", "three"]}
                        selectedIndex={this.state.selectedIndex}
                        onTabPress={this.handleSingleIndexSelect} />
                </View>

                <View style={[styles.container, {borderLeftColor: '#CDDC39'}]}>
                    <Text style={[styles.headerText]} >Default segmented with badges</Text>
                    <SegmentedControlTab
                        badges={[1, 2, 3]}
                        selectedIndex={this.state.badgesStyleIndex}
                        onTabPress={this.handleBadgesSelect} />
                </View>

                {/* <View style={[styles.container, {borderLeftColor: '#FFEB3B'}]}>
                    <Text style={[styles.headerText]} >Default segmented with icons</Text>
                    <SegmentedControlTab
                        badges={[1, 2, 3]}
                        selectedIndex={this.state.badgesStyleIndex}
                        onTabPress={this.handleBadgesSelect} />
                </View> */}

                <View style={[styles.container, {borderLeftColor: '#FFC107'}]}>
                    <Text style={[styles.headerText]}>Segmented control  with custom styles </Text>
                    <SegmentedControlTab
                        values={["one", "two", "three"]}
                        selectedIndex={this.state.customStyleIndex1}
                        tabsContainerStyle={styles.tabsContainerStyle}
                        tabTextStyle={styles.tabTextStyle}
                        tabStyle={styles.tabStyle}
                        activeTabStyle={styles.activeTabStyle}
                        onTabPress={this.handleCustomIndexSelect1} />
                </View>

                <View style={[styles.container, {borderLeftColor: '#FF9800'}]}>
                    <Text style={styles.headerText} >Segmented control with custom styles</Text>
                    <SegmentedControlTab
                        values={['one', 'two', 'three']}
                        selectedIndex={this.state.customStyleIndex}
                        onTabPress={this.handleCustomIndexSelect}
                        borderRadius={0}
                        tabsContainerStyle={{ height: 50, backgroundColor: '#F2F2F2', borderWidth: 0, borderColor: 'transparent' }}
                        tabStyle={{ paddingVertical: 0, backgroundColor: '#F2F2F2', borderLeftWidth: 0, borderLeftColor: 'transparent' }}
                        activeTabStyle={{ backgroundColor: 'white', borderBottomWidth: 5, borderBottomColor: '#218c74' }}
                        tabTextStyle={{ color: '#444444', fontWeight: 'bold' }}
                        activeTabTextStyle={{ color: '#666666' }} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 10,
        borderLeftWidth: 8,
        backgroundColor: 'white',
    },
    tabViewText: {
        color: '#444444',
        fontWeight: 'bold',
        marginTop: 50,
        fontSize: 18
    },
    titleText: {
        color: '#444444',
        padding: 20,
        fontSize: 14,
        fontWeight: '500'
    },
    headerText: {
        padding: 8,
        fontSize: 14,
        color: '#444444'
    },
    tabContent: {
        color: '#444444',
        fontSize: 18,
        margin: 24
    },
    Seperator: {
        marginHorizontal: -10,
        alignSelf: 'stretch',
        borderTopWidth: 1,
        borderTopColor: '#666666',
        marginVertical: 24
    },
    tabsContainerStyle: {
        borderColor: '#706fd3'
    },
    tabStyle: {
        borderLeftColor: '#706fd3',
        backgroundColor: 'transparent',
    },
    activeTabStyle: {
        backgroundColor: '#33d9b2'
    },
    tabTextStyle: {
        color: '#706fd3'
    },

})



export default ExampleMain
