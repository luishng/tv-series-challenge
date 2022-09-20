import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 12,
  },
  textSeason: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  containerEpisodes: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#313135",

    padding: 4,
    marginBottom: 6,
    borderRadius: 2,
  },
});

export const Container = styled.ScrollView`
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;
  background-color: #1b1b1f;
`;

export const HeaderSerie = styled.View`
  margin-top: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SerieTitle = styled.Text`
  font-size: 20px;
  color: white;
  align-self: center;
  margin-bottom: 20px;
`;
export const SerieImage = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  align-self: center;
`;

export const SerieTime = styled.Text`
  font-size: 14px;
  color: white;
  margin-top: 10px;
  align-self: center;
`;

export const ViewDaysAndGenders = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const SerieDaysTitle = styled.Text`
  font-size: 14px;
  color: white;
`;

export const SerieDays = styled.Text`
  font-size: 12px;
  color: gray;
`;

export const SerieGenresTitle = styled.Text`
  font-size: 14px;
  color: white;
`;

export const SerieGenres = styled.Text`
  font-size: 12px;
  color: gray;
`;

export const SummaryTitle = styled.Text`
  align-self: center;
  font-size: 14px;
  color: white;
  margin-bottom: 10px;
`;

export const LoadingTitle = styled.Text`
  align-self: center;
  font-size: 14px;
  color: white;
  margin-top: 25px;
`;

export const EpisodesTitle = styled.Text`
  align-self: center;
  font-size: 14px;
  color: white;
  margin: 10px 0;
`;

export const Summary = styled.Text`
  font-size: 12px;
  color: gray;
`;

export const EpisodeWrapper = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;

  background-color: #313135;
  padding: 4px;
  margin-bottom: 6px;
  border-radius: 2px;
`;

export const EpisodeName = styled.Text`
  color: white;
  font-size: 10px;
`;

export const EpisodeRating = styled.Text`
  color: white;
  font-size: 10px;
`;
