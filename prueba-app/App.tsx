import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://th.bing.com/th/id/OIP.QBOqVxzX6dpyf2TtbraKKgHaEL?rs=1&pid=ImgDetMain",
        }}
        style={{ width: 100, height: 100, resizeMode: "center" }}
      />
      <Text>Información del mundialito</Text>
      <Button color="#1A006B" title="Simulacro" onPress={() => alert("Hola")} />
      {/* <Pressable boton que nos permite personalizarlo
        onPress={()=>alert('Podemos ejecutar funciones')}
        style
      >
      
      </Pressable> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D9BD8",
    alignItems: "center",
    justifyContent: "center",
  },
});
