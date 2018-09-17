# react-native-segmented-control-ui(for Android/iOS) 🚀
[![npm](https://img.shields.io/npm/v/react-native-segmented-control-ui.svg?style=flat-square "npm version")](https://www.npmjs.com/package/react-native-segmented-control-ui)
[![Monthly Downloads](https://img.shields.io/npm/dm/react-native-segmented-control-ui.svg?style=flat-square )](https://npmjs.org/package/react-native-segmented-control-ui)

[ ![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=flat-square )](https://github.com/gbhasha/react-native-segmented-control-ui/pulls)

[![NPM](https://nodei.co/npm/react-native-segmented-control-ui.png?compact=true)](https://npmjs.org/package/react-native-segmented-control-ui)


An extendable tab components for React Native similar to iOSSegmentedControl, Primarily built to support both iOS and Android.



## Usage

```javascript
import SegmentedControlTab from 'react-native-segmented-control-ui'

const ConsumerComponent extends Component {

    constructor(){
        super()
        this.state = {
            selectedIndex: 0
        };
    }

    handleIndexChange = (index) => {
        this.setState({
            selectedIndex: index
        });
    }

    render() {
        return (
            <View>
                <SegmentedControlTab
                    values={['First', 'Second', 'Third']}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={this.handleIndexChange}
                    />
            </View>
        );
    }
}
```

## API

Name | Description | Default | Type
------|-------------|----------|-----------
values | titles of tabs  | `['One', 'Two', 'Three']` | array
selectedIndex | index of tab item to be selected initially| [0] | number
borderRadius | borderRadius of whole tab | 5 | number
tabsContainerStyle | external styles can be passed to override the default styles of the segmentedControl wrapper| [tabsContainerStyle](#custom-styling)  | object(styles)
tabStyle | external styles can be passed to override the default styles of the tabs| [tabStyle](#custom-styling)  | object(styles)
tabTextStyle | external styles can be passed to override the default styles of the tab title| [tabTextStyle](#custom-styling)  | object(styles)
activeTabStyle | external styles can be passed to override the default styles of the active tab| [activeTabStyle](#custom-styling)  | object(styles)
activeTabTextStyle | external styles can be passed to override the default styles of the active tab text| [activeTabTextStyle](#custom-styling)  | object(styles)
badges | badges values to display  | `[1, 2, 3]` | array
tabBadgeContainerStyle | external style can be passed to override the default style of the badge container | [tabBadgeContainerStyle](#custom-styling)  | object(styles)
activeTabBadgeContainerStyle | external style can be passed to override the default style of the active badge container | [activeTabBadgeContainerStyle](#custom-styling)  | object(styles)
tabBadgeStyle | external style can be passed to override the default style of the badge text | [tabsContainerStyle](#custom-styling)  | object(styles)
activeTabBadgeStyle | external style can be passed to override the default style of the active badge text | [activeTabBadgeStyle](#custom-styling)  | object(styles)
onTabPress | call-back function when a tab is selected | () => {} | func
allowFontScaling | whether the segment & badge text should allow font scaling (default matches React Native default) | true | bool
accessible | enables accessibility for each tab | true | bool
accessibilityLabels | Reads out the given text on each tab press when voice over is enabled. If not set, uses the text passed in as values in props as a fallback | ['Label 1', 'Label 2', 'Label 3'] | array
testIDs | Unique identifier for each tab which acts as a hook for functional test | ['Label 1', 'Label 2', 'Label 3'] | array


## Custom styling
    ```javascript
        <SegmentedControlTab tabsContainerStyle={styles.tabsContainerStyle}
            tabStyle={styles.tabStyle}
            tabTextStyle={styles.tabTextStyle}
            activeTabStyle={styles.activeTabStyle}
            activeTabTextStyle={styles.activeTabTextStyle}
            selectedIndex={1}
            allowFontScaling={false}
            values={['First', 'Second', 'Third']}
            onPress= {index => this.setState({selected:index})}
        />

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
    ```

## Try it out

You can try it out with Exponent [here](https://expo.io/@gbhasha/react-native-segmemted-control-ui).

### Example

Look at the [`example`](https://github.com/gbhasha/react-native-segmented-control-ui/tree/master/Example) folder to run the expo app locally.

## License
*MIT*
