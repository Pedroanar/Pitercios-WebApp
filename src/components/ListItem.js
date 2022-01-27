import { Text, View, Image } from "react-native";
import styles from "../utils/native_styles";

export default ({ item }) => {
  return (
    <a href={item.link} style={{ textDecoration: "none" }}>
      <View style={styles.item}>
        <Image
          source={{
            uri: item.uri
          }}
          style={styles.itemPhoto}
          resizeMode="cover"
        />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </a>
  );
};
