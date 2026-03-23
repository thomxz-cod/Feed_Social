import { View, TextInput, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "@/assets/styles/home.styles";

const posts = [
  "https://i.pinimg.com/736x/3c/c3/97/3cc3979546bfafb5537c9afed0be4434.jpg",
  "https://i.pinimg.com/736x/35/8b/a1/358ba1dc518f012367840f6bd7bbbb4d.jpg",
  "https://i.pinimg.com/736x/be/d8/7b/bed87b2749b75a56790552f6c1c35dd0.jpg",
  "https://i.pinimg.com/736x/de/df/e9/dedfe9d96b40ad3cc0f5c4732d3dfca1.jpg",
];

export default function Home() {
  return (
    <LinearGradient
      colors={["#1a0606", "#a82308"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradient}
    >
      <ScrollView>
        
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.avatar} />
          <TextInput
            placeholder="No que está pensando?"
            placeholderTextColor="#ccc"
            style={styles.input}
          />
        </View>

        {/* Actions */}
        <View style={styles.actionsRow}>
          <View style={styles.actionBtn} />
          <View style={styles.actionBtn} />
          <View style={styles.actionBtn} />
          <View style={styles.actionBtn} />
        </View>

        {/* Posts dinâmicos */}
        {posts.map((img, index) => (
          <View key={index} style={styles.postCard}>
            
            <Image
              source={{ uri: img }}
              style={styles.postImage}
              resizeMode="cover"
            />

            <View style={styles.postFooter}>
              <View style={styles.postUser}>
                <Image
                  source={{ uri: img }}
                  style={styles.postAvatar}
                />
                <View>
                  <View style={styles.textBlock} />
                  <View style={styles.smallText} />
                </View>
              </View>

              <View style={styles.button} />
            </View>

          </View>
        ))}

      </ScrollView>
    </LinearGradient>
  );
}