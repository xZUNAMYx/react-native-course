import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { PrimaryButton } from "../components";
import { Button } from "react-native-paper";

export const CounterScreen = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }> { count } </Text>

            <Button 
                mode="contained"
                onPress={ () => setCount( count + 1 )}
                onLongPress={ () => setCount( 0 )}
            >  
                Incrementar
            </Button>

            {/* <PrimaryButton 
                label="Incrementar"
                onPress={ () => setCount( count + 1 )}
                onLongPress={ () => setCount( 0 )}
            />   */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontSize: 80,
        color: 'black',
        fontWeight: '300',
    }
})