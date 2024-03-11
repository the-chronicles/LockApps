import { StyleSheet, Text, View } from "react-native"
import { theme } from "../utils/theme"

function Unlocked() {
    return <View style={styles.container}>
        <Text>Unlocked</Text>
    </View>
}

export default Unlocked

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.accent,
        padding: 20,
      },
})
