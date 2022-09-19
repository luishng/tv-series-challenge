import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.ScrollView`
  flex: 1;
  padding-top: 30px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: #1b1b1f;
`;

export const HeaderEpisode = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LoadingTitle = styled.Text`
  font-size: 14px;
  color: white;
`;

export const EpisodeTitle = styled.Text`
  align-self: center;
  font-size: 16px;
  color: white;
  margin-bottom: 10px;
`;
export const EpisodeNumberTitle = styled.Text`
  font-size: 14px;
  color: white;
`;

export const EpisodeNumber = styled.Text`
  font-size: 12px;
  color: gray;
`;

export const EpisodeSeasonTitle = styled.Text`
  font-size: 14px;
  color: white;
`;

export const EpisodeSeason = styled.Text`
  font-size: 12px;
  color: gray;
`;

export const EpisodeSummaryTitle = styled.Text`
  font-size: 14px;
  color: white;
  margin-top: 10px;
`;

export const EpisodeSummary = styled.Text`
  font-size: 12px;
  color: gray;
`;

export const EpisodeImage = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  align-self: center;
`;

export const ViewEpisodeInfos = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;
