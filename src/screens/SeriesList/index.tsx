import { useEffect, useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  Text,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SerieDTO } from "@dtos/SerieDTO";
import api from "@services/api";

import { styles } from "./styles";

export function SeriesList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [apiData, setApiData] = useState<SerieDTO[]>([]);
  const [isLoading, setLoading] = useState(true);

  const navigation = useNavigation();

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
    if (apiData) {
      setLoading(false);
    }
  }, [apiData]);

  function handleLoadMore() {
    setCurrentPage((prevState) => prevState + 1);
  }

  function handleSerieDetail(id: number) {
    navigation.navigate("Serie", { id });
  }

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" />}

      {!isLoading && (
        <>
          <Text style={styles.textScreenTitle}>All Series</Text>

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
                <Image
                  style={styles.image}
                  source={{ uri: item.image.medium }}
                />
                <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </>
      )}
    </View>
  );
}
