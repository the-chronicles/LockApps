import { StyleSheet, Text, View } from "react-native"
import { theme } from "../utils/theme"

function Locked() {
    return <View style={styles.container}>
        <Text>Locked</Text>
    </View>
}

export default Locked

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.accent,
        padding: 20,
      },
})
