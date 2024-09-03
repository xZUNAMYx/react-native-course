import { StyleSheet, View } from "react-native"

export const HomeworkScreen = () => {
    return (
        <View style={ styles.container }>
            <View style={[ styles.box, styles.blueBox ]} />
            <View style={[ styles.box, styles.orangeBox ]} />
            <View style={[ styles.box, styles.purpleBox ]} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        // TODO: Tarea 
    },

    box: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white'
    },

    purpleBox: {
        backgroundColor: 'purple'
    },

    orangeBox: {
        backgroundColor: 'orange'
    },

    blueBox: {
        backgroundColor: 'blue'
    },

})
