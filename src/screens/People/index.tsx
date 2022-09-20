import { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { SerieDTO } from "@dtos/SerieDTO";

import api from "@services/api";

import {
  Container,
  HeaderPeople,
  PeopleTitle,
  PeopleImage,
  PeopleTime,
  ViewDaysAndGenders,
  PeopleDaysTitle,
  PeopleGenresTitle,
  PeopleGenres,
  LoadingTitle,
  PersonCountry,
  EpisodesTitle,
  styles,
} from "./styles";

import { BackButton } from "@components/BackButton";
import { PersonDTO } from "@dtos/PersonDTO";
import axios from "axios";

interface RouteParams {
  id: number;
}

interface CastCredits {
  _links: {
    show: {
      href: string;
    };
  };
}

export function People() {
  const [seriesData, setSeriesData] = useState<SerieDTO[]>([]);
  const [castCreditsData, setCastCreditsData] = useState<CastCredits[]>([]);
  const [personData, setPersonData] = useState({} as PersonDTO);
  const [isLoadingPerson, setIsLoadingPerson] = useState(true);
  const [isLoadingSeries, setIsLoadingSeries] = useState(true);

  const route = useRoute();
  const navigation = useNavigation();

  const { id } = route.params as RouteParams;

  useEffect(() => {
    const fetchCastCredits = async (idPerson: number) => {
      api
        .get(`people/${idPerson}/castcredits`)
        .then((response) => {
          setCastCreditsData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchCastCredits(id);
  }, []);

  useEffect(() => {
    const fetchPerson = async (idPerson: number) => {
      api
        .get(`people/${idPerson}`)
        .then((response) => {
          setPersonData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchPerson(id);
  }, []);

  useEffect(() => {
    if (personData.name) {
      setIsLoadingPerson(false);
    }

    if (seriesData.length) {
      setIsLoadingSeries(false);
    }
  }, [seriesData, personData, castCreditsData]);

  useEffect(() => {
    if (castCreditsData.length) {
      fetchPersonSeries();
    }
  }, [castCreditsData]);

  async function fetchPersonSeries() {
    let urls = [];

    for (let i = 0; i < castCreditsData.length; i++) {
      urls.push(axios.get(castCreditsData[i]._links.show.href));
    }

    const res = await Promise.all(urls);

    Object.keys(res).map((key) => {
      // @ts-ignore
      setSeriesData((prevState) => [...prevState, res[key].data]);
    });
  }

  function handleBack() {
    navigation.goBack();
  }

  function handleSerieView(id: number) {
    navigation.navigate("Serie", { id });
  }

  return (
    <Container>
      {isLoadingPerson ? (
        <LoadingTitle>Loading Person Detail...</LoadingTitle>
      ) : (
        <View>
          <HeaderPeople>
            <BackButton onPress={handleBack} color="white" />
          </HeaderPeople>

          <PeopleTitle>{personData.name}</PeopleTitle>
          {personData.image?.medium ? (
            <PeopleImage source={{ uri: personData.image?.medium }} />
          ) : (
            <PeopleImage source={require("@assets/noImage.png")} />
          )}
          {personData.country?.name && (
            <PersonCountry>Country: {personData.country?.name}</PersonCountry>
          )}
          <ViewDaysAndGenders>
            {personData?.birthday && (
              <View>
                <PeopleDaysTitle>Birthday</PeopleDaysTitle>
                <PeopleTime>{personData?.birthday}</PeopleTime>
              </View>
            )}
            {personData?.gender && (
              <View>
                <PeopleGenresTitle>Gender</PeopleGenresTitle>
                <PeopleGenres>{personData.gender}</PeopleGenres>
              </View>
            )}
          </ViewDaysAndGenders>
        </View>
      )}

      {isLoadingSeries ? (
        <LoadingTitle>Loading Episodes...</LoadingTitle>
      ) : (
        <>
          <EpisodesTitle>Series</EpisodesTitle>
          {seriesData.map((serie) => (
            <TouchableOpacity
              style={styles.containerSeries}
              key={`${serie.id}-${serie.name}`}
              onPress={() => handleSerieView(serie.id)}
            >
              {serie.image?.medium ? (
                <Image
                  style={styles.image}
                  source={{ uri: serie.image?.medium }}
                />
              ) : (
                <Image
                  style={styles.image}
                  source={require("@assets/noImage.png")}
                />
              )}

              <Text style={styles.text}>{serie.name}</Text>
            </TouchableOpacity>
          ))}
        </>
      )}
    </Container>
  );
}
