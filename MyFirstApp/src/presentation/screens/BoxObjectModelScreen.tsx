import { StyleSheet, Text, View } from "react-native"

export const BoxObjectModelScreen = () => {
  return (
    <View style={ styles.container }>
        {/* <Text style={ styles.title }>boxObjectModel</Text> */}
        <View style={ styles.purpleBox }></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
        
    title: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        fontSize: 30,
        borderWidth: 10
    },

    purpleBox: {
        height: 30,
        marginHorizontal: 20,
        backgroundColor: 'purple'
    }
})
