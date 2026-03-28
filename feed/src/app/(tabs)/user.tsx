import { View, Text, Image, FlatList } from "react-native";
import { styles } from "../../../assets/styles/user.styles";
import { Link } from "expo-router";

export default function User() {
  const posts = [
    { id: "1", image: "https://i.pinimg.com/1200x/69/43/c9/6943c9643e283fbf53e19e89f7f72551.jpg" },
    { id: "2", image: "https://i.pinimg.com/736x/7f/62/96/7f62969e2ca7b47eeaa404f240339c45.jpg" },
    { id: "3", image: "https://i.pinimg.com/736x/3e/6c/7c/3e6c7c8f30e1e1950f2ba2166d85af48.jpg" },
  ];

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={
        <>
          <View style={styles.header} />

          <Image
            source={{ uri: "https://i.pinimg.com/736x/08/2d/04/082d043fbb620d7bfa3a5c00d9781ce6.jpg" }}
            style={styles.avatar}
          />

          <Text style={styles.name}>tz_zzz7</Text>

          <View style={styles.stats}>
            <Link href={"https://github.com/thomxz-cod"} style={styles.link} target="_blank">GitHub</Link>
            <Link href={"https://www.instagram.com/thomxz._7"} style={styles.link} target="_blank">Insta</Link>
          </View>

          <View style={styles.stats}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>3</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>

            <View style={styles.statBox}>
              <Text style={styles.statNumber}>120</Text>
              <Text style={styles.statLabel}>Seguidores</Text>
            </View>

            <View style={styles.statBox}>
              <Text style={styles.statNumber}>80</Text>
              <Text style={styles.statLabel}>Seguindo</Text>
            </View>
          </View>
        </>
      }
      data={posts}
      keyExtractor={(item) => item.id}
      numColumns={3}
      renderItem={({ item }) => (
        <Image source={{ uri: item.image }} style={styles.gridImage} />
      )}
    />
  );
}