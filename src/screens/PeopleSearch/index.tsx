import { SearchDTO } from "@dtos/SearchDTO";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container } from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import api from "@services/api";
import { Text, TouchableOpacity, Image } from "react-native";

export function PeopleSearch() {
  const [serieSearchText, setSerieSearchText] = useState("");
  const [apiData, setApiData] = useState<SearchDTO[]>([]);

  const navigation = useNavigation();

  async function handleSearchSerie() {
    api
      .get(`/search/shows?q=:${serieSearchText}`)
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // function handleSerieDetail(id: number) {
  //   navigation.navigate("Serie", { id });
  // }

  return (
    <Container>
      <Input
        iconName="search"
        placeholder="Person you wanna search"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={setSerieSearchText}
        value={serieSearchText}
      />

      <Button title="Search Person" color="green" onPress={handleSearchSerie} />

      {/* {apiData &&
        apiData.map((serie) => (
          <TouchableOpacity
            key={`${serie.show.id}`}
            style={styles.containerSeries}
            onPress={() => handleSerieDetail(serie.show.id)}
          >
            {serie.show.image?.medium && (
              <Image
                style={styles.image}
                source={{ uri: serie.show.image?.medium }}
              />
            )}
            <Text style={styles.text}>{serie.show.name}</Text>
          </TouchableOpacity>
        ))} */}
    </Container>
  );
}
