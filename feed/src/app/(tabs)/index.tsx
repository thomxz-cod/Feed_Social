import { View, Text, TextInput, Pressable, Image, FlatList } from "react-native";
import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { styles } from "../../../assets/styles/home.styles";
import { theme } from "../../../hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";

export default function Feed() {
  const posts = useQuery(api.posts.getPosts);
  const addPost = useMutation(api.posts.addPost);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const handleAdd = () => {
    if (!title || !image) return;
    addPost({ title, image });
    setTitle("");
    setImage("");
  };

  return (
    <LinearGradient colors={theme.gradient.main} style={{ flex: 1 }}>
      <View style={styles.container}>
        
        <Image
          source={{ uri: "https://i.pinimg.com/736x/08/2d/04/082d043fbb620d7bfa3a5c00d9781ce6.jpg" }}
          style={styles.logo}
        />

        <TextInput
          placeholder="Título do post"
          placeholderTextColor={theme.colors.softText}
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />

        <TextInput
          placeholder="Link da imagem"
          placeholderTextColor={theme.colors.softText}
          value={image}
          onChangeText={setImage}
          style={styles.input}
        />

        <Pressable style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>Postar</Text>
        </Pressable>

        {!posts && <Text style={styles.loading}>Carregando...</Text>}

        <FlatList
          data={posts || []}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <LinearGradient colors={theme.gradient.card} style={styles.post}>
              <Text style={styles.postTitle}>{item.title}</Text>
              <Image source={{ uri: item.image }} style={styles.postImage} />
            </LinearGradient>
          )}
        />

      </View>
    </LinearGradient>
  );
}