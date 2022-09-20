import { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { SerieDTO } from "@dtos/SerieDTO";
import { EpisodeDTO } from "@dtos/EpisodeDTO";

import api from "@services/api";

import {
  Container,
  HeaderSerie,
  SerieTitle,
  SerieImage,
  SerieTime,
  ViewDaysAndGenders,
  SerieDaysTitle,
  SerieDays,
  SerieGenresTitle,
  SerieGenres,
  SummaryTitle,
  Summary,
  EpisodesTitle,
  LoadingTitle,
  styles,
} from "./styles";
import { BackButton } from "@components/BackButton";
import { FavoriteButton } from "@components/FavoriteButton";
import { useFavorites } from "@hooks/favorites";

interface RouteParams {
  id: number;
}

export function Serie() {
  const [episodesData, setEpisodesData] = useState<EpisodeDTO[]>([]);
  const [serieData, setSerieData] = useState({} as SerieDTO);
  const [isLoadingSerie, setIsLoadingSerie] = useState(true);
  const [isLoadingEpisodes, setIsLoadingEpisodes] = useState(true);
  const [isInFavoriteList, setIsInFavoriteList] = useState(false);

  const route = useRoute();
  const navigation = useNavigation();

  const { favorites, addFavoriteData, removeFavoriteData } = useFavorites();

  const { id } = route.params as RouteParams;

  useEffect(() => {
    setIsInFavoriteList(favorites.some((serie) => serie.id === serieData.id));
  }, [favorites, serieData]);

  useEffect(() => {
    const fetchEpisodes = async (idSerie: number) => {
      api
        .get(`shows/${idSerie}/episodes`)
        .then((response) => {
          setEpisodesData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchEpisodes(id);
  }, []);

  useEffect(() => {
    const fetchSerie = async (idSerie: number) => {
      api
        .get(`shows/${idSerie}`)
        .then((response) => {
          setSerieData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchSerie(id);
  }, []);

  useEffect(() => {
    if (serieData.name) {
      setIsLoadingSerie(false);
    }
    if (episodesData.length) {
      setIsLoadingEpisodes(false);
    }
  }, [episodesData, serieData]);

  function handleBack() {
    navigation.goBack();
  }

  function handleEpisodeView(episode: EpisodeDTO, serieId: number) {
    navigation.navigate("Episode", {
      serieId,
      episodeSeason: episode.season,
      episodeNumber: episode.number,
    });
  }

  async function handleFavorite() {
    if (isInFavoriteList) {
      removeFavoriteData(serieData);
    } else {
      addFavoriteData(serieData);
    }
  }

  const parsed = episodesData.reduce((result, current) => {
    // @ts-ignore
    result[current.season] = [...(result[current.season] || []), current];
    return result;
  }, {});

  return (
    <Container>
      {isLoadingSerie ? (
        <LoadingTitle>Loading Serie Detail...</LoadingTitle>
      ) : (
        <View>
          <HeaderSerie>
            <BackButton onPress={handleBack} color="white" />
            <FavoriteButton
              onPress={handleFavorite}
              color="red"
              active={isInFavoriteList}
            />
          </HeaderSerie>

          <SerieTitle>{serieData.name}</SerieTitle>
          {serieData.image?.medium ? (
            <SerieImage source={{ uri: serieData.image.medium }} />
          ) : (
            <SerieImage source={require("@assets/noImage.png")} />
          )}
          <SerieTime>Time: {serieData.schedule.time}</SerieTime>

          <ViewDaysAndGenders>
            <View>
              <SerieDaysTitle key="Schedule">Schedule</SerieDaysTitle>
              {serieData.schedule.days.map((day) => (
                <SerieDays key={day}>{day}</SerieDays>
              ))}
            </View>

            <View>
              <SerieGenresTitle key="Gender">Gender</SerieGenresTitle>
              {serieData.genres.map((genre) => (
                <SerieGenres key={genre}>{genre}</SerieGenres>
              ))}
            </View>
          </ViewDaysAndGenders>
          <View>
            <SummaryTitle>Summary</SummaryTitle>
            <Summary>
              {serieData.summary.replace(/<\/?[^>]+(>|$)/g, "")}
            </Summary>
          </View>
        </View>
      )}

      {isLoadingEpisodes ? (
        <LoadingTitle>Loading Episodes...</LoadingTitle>
      ) : (
        <>
          <EpisodesTitle>Episodes</EpisodesTitle>

          {Object.keys(parsed).map((key: string) => (
            <>
              <Text style={styles.textSeason}>Season: {key}</Text>
              {/* @ts-ignore  */}
              {parsed[key].map((episode: EpisodeDTO) => (
                <TouchableOpacity
                  key={`${episode.id}-${episode.name}-${key}`}
                  style={styles.containerEpisodes}
                  onPress={() => handleEpisodeView(episode, id)}
                >
                  <Text style={styles.text}>{episode.name}</Text>
                </TouchableOpacity>
              ))}
            </>
          ))}
        </>
      )}
    </Container>
  );
}
