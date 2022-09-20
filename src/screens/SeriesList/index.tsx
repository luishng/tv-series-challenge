import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import {
  FlatList,
  TouchableOpacity,
  Text,
  View,
  Image,
  ActivityIndicator,
} from "react-native";

import { SerieDTO } from "@dtos/SerieDTO";
import api from "@services/api";
import { styles } from "./styles";
import { useUser } from "@hooks/user";

export function SeriesList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [apiData, setApiData] = useState<SerieDTO[]>([]);
  const [isLoading, setLoading] = useState(true);

  const navigation = useNavigation();
  const { changeUser } = useUser();

  useEffect(() => {
    const fetchTopRatedMovies = async (currentPage: number) => {
      api
        .get(`shows?page=${currentPage}`)
        .then((response) => {
          setApiData([...apiData, ...response.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchTopRatedMovies(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (apiData.length) {
      setLoading(false);
    }
  }, [apiData]);

  function handleLoadMore() {
    setCurrentPage((prevState) => prevState + 1);
  }

  function handleSerieDetail(id: number) {
    navigation.navigate("Serie", { id });
  }

  function handleSignOut() {
    changeUser(false);
  }

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size={24} />}

      {!isLoading && (
        <>
          <View style={styles.containerHeader}>
            <View />

            <Text style={styles.textScreenTitle}>All Series</Text>

            <BorderlessButton onPress={handleSignOut}>
              <Feather name="power" size={24} color="white" />
            </BorderlessButton>
          </View>

          <FlatList
            data={apiData}
            keyExtractor={(item) => item.id.toString()}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={5}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.containerSeries}
                key={item.id}
                onPress={() => handleSerieDetail(item.id)}
              >
                {item.image?.medium ? (
                  <Image
                    style={styles.image}
                    source={{ uri: item.image?.medium }}
                  />
                ) : (
                  <Image
                    style={styles.image}
                    source={require("@assets/noImage.png")}
                  />
                )}
                <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </>
      )}
    </View>
  );
}
