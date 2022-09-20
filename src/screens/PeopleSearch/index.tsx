import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, Image, ActivityIndicator } from "react-native";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import api from "@services/api";
import { Container, ViewInput, styles } from "./styles";
import { SearchPeopleDTO } from "@dtos/SearchPeopleDTO";

export function PeopleSearch() {
  const [peopleSearchText, setPeopleSearchText] = useState("");
  const [apiData, setApiData] = useState<SearchPeopleDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    if (apiData) {
      setIsLoading(false);
    }
  }, [apiData]);

  async function handlePeopleSerie() {
    setIsLoading(true);
    api
      .get(`/search/people?q=:${peopleSearchText}`)
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handlePeopleDetail(id: number) {
    navigation.navigate("People", { id });
  }

  return (
    <Container>
      <ViewInput>
        <Input
          iconName="search"
          placeholder="Person Name"
          autoCorrect={false}
          onChangeText={setPeopleSearchText}
          value={peopleSearchText}
        />
      </ViewInput>

      <Button title="Search Person" color="green" onPress={handlePeopleSerie} />

      {isLoading && <ActivityIndicator size={24} />}

      {apiData &&
        apiData.map((currentPerson) => (
          <TouchableOpacity
            key={`${currentPerson.person.id}`}
            style={styles.containerSeries}
            onPress={() => handlePeopleDetail(currentPerson.person.id)}
          >
            {currentPerson.person.image?.medium ? (
              <Image
                style={styles.image}
                source={{ uri: currentPerson.person.image?.medium }}
              />
            ) : (
              <Image
                style={styles.image}
                source={require("@assets/noImage.png")}
              />
            )}
            <Text style={styles.text}>{currentPerson.person.name}</Text>
          </TouchableOpacity>
        ))}
    </Container>
  );
}
