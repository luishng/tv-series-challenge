import { SearchDTO } from "@dtos/SearchDTO";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, ViewInput, styles } from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import api from "@services/api";
import { Text, TouchableOpacity, Image, ActivityIndicator } from "react-native";

export function Search() {
  const [serieSearchText, setSerieSearchText] = useState("");
  const [apiData, setApiData] = useState<SearchDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    if (apiData) {
      setIsLoading(false);
    }
  }, [apiData]);

  async function handleSearchSerie() {
    setIsLoading(true);
    api
      .get(`/search/shows?q=:${serieSearchText}`)
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleSerieDetail(id: number) {
    navigation.navigate("Serie", { id });
  }

  return (
    <Container>
      <ViewInput>
        <Input
          iconName="search"
          placeholder="Serie Name"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={setSerieSearchText}
          returnKeyType="search"
          value={serieSearchText}
          onSubmitEditing={handleSearchSerie}
        />
      </ViewInput>

      <Button title="Search Serie" color="green" onPress={handleSearchSerie} />

      {isLoading && <ActivityIndicator size={24} />}

      {apiData &&
        apiData.map((serie) => (
          <TouchableOpacity
            key={`${serie.show.id}`}
            style={styles.containerSeries}
            onPress={() => handleSerieDetail(serie.show.id)}
          >
            {serie.show.image?.medium ? (
              <Image
                style={styles.image}
                source={{ uri: serie.show.image?.medium }}
              />
            ) : (
              <Image
                style={styles.image}
                source={require("@assets/noImage.png")}
              />
            )}
            <Text style={styles.text}>{serie.show.name}</Text>
          </TouchableOpacity>
        ))}
    </Container>
  );
}
