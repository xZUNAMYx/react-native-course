import { StyleSheet, View } from "react-native"

export const FlexDirectionScreen = () => {
    return (
        <View style = { styles.container }>
            <View style={ [styles.box, styles.box1] } />
            <View style={ [styles.box, styles.box2] } />
            <View style={ [styles.box, styles.box3] } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row'
    },

    box: {
        width: 100,
        height: 100
    },

    box1: {
        backgroundColor: 'purple',
        // flex: 1
    },

    box2: {
        backgroundColor: 'green',
        // flex: 2
    },

    box3: {
        backgroundColor: 'blue',
        // flex: 3
    }
})