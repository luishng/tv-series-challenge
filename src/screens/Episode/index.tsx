import { useEffect, useState } from "react";
import { View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { EpisodeDTO } from "@dtos/EpisodeDTO";

import api from "@services/api";
import NoImg from "@assets/noImage.png";

import {
  Container,
  HeaderEpisode,
  LoadingTitle,
  EpisodeTitle,
  EpisodeNumber,
  EpisodeSeason,
  EpisodeSummary,
  EpisodeImage,
  ViewEpisodeInfos,
  EpisodeNumberTitle,
  EpisodeSeasonTitle,
  EpisodeSummaryTitle,
} from "./styles";
import { BackButton } from "@components/BackButton";

interface RouteParams {
  serieId: number;
  episodeSeason: number;
  episodeNumber: number;
}

export function Episode() {
  const [episodeData, setEpisodeData] = useState({} as EpisodeDTO);
  const [isLoadingEpisode, setIsLoadingEpisode] = useState(true);

  const route = useRoute();
  const navigation = useNavigation();
  const { serieId, episodeSeason, episodeNumber } = route.params as RouteParams;

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        api
          .get(
            `shows/${serieId}/episodebynumber?season=${episodeSeason}&number=${episodeNumber}`
          )
          .then((response) => {
            setEpisodeData(response.data);
          })
          .catch((err) => {
            console.log("err", err);
          });
      } catch (err) {
        console.log(err);
      }
    };

    fetchEpisodes();
  }, []);

  useEffect(() => {
    if (episodeData.name) {
      setIsLoadingEpisode(false);
    }
  }, [episodeData]);

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      {isLoadingEpisode ? (
        <LoadingTitle>Loading Episode Detail...</LoadingTitle>
      ) : (
        <View>
          <HeaderEpisode>
            <BackButton onPress={handleBack} color="white" />
          </HeaderEpisode>

          <EpisodeTitle>{episodeData.name}</EpisodeTitle>
          {episodeData.image?.medium ? (
            <EpisodeImage source={{ uri: episodeData.image.medium }} />
          ) : (
            <EpisodeImage source={{ uri: NoImg }} />
          )}
          <ViewEpisodeInfos>
            <View>
              <EpisodeNumberTitle>Number</EpisodeNumberTitle>
              <EpisodeNumber>{episodeData.number}</EpisodeNumber>
            </View>
            <View>
              <EpisodeSeasonTitle>Season</EpisodeSeasonTitle>
              <EpisodeSeason>{episodeData.season}</EpisodeSeason>
            </View>
          </ViewEpisodeInfos>
          <EpisodeSummaryTitle>Summary</EpisodeSummaryTitle>
          <EpisodeSummary>
            {episodeData?.summary &&
              episodeData.summary.replace(/<\/?[^>]+(>|$)/g, "")}
          </EpisodeSummary>
        </View>
      )}
    </Container>
  );
}
