import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 36,
    paddingRight: 24,
    paddingLeft: 24,
    backgroundColor: "#1B1B1F",
  },
  containerSeries: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#313135",

    padding: 4,
    marginBottom: 6,
    borderRadius: 2,
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textScreenTitle: {
    color: "#fff",
    fontSize: 24,
    alignSelf: "center",
    marginBottom: 10,
  },
  text: {
    color: "#fff",
    fontSize: 12,
  },
  image: {
    width: 48,
    height: 48,
    marginRight: 10,
    borderRadius: 2,
  },
});

export const Container = styled.ScrollView`
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;
  background-color: #1b1b1f;
`;

export const HeaderPeople = styled.View`
  margin-top: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PeopleTitle = styled.Text`
  font-size: 20px;
  color: white;
  align-self: center;
  margin-bottom: 20px;
`;
export const PeopleImage = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  align-self: center;
`;

export const PersonCountry = styled.Text`
  font-size: 14px;
  color: white;
  margin-top: 10px;
  align-self: center;
`;

export const PeopleTime = styled.Text`
  font-size: 14px;
  color: gray;
  margin-bottom: 10px;
`;

export const ViewDaysAndGenders = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const PeopleDaysTitle = styled.Text`
  font-size: 14px;
  color: white;
  margin-top: 10px;
`;

export const PeopleDays = styled.Text`
  font-size: 12px;
  color: gray;
`;

export const PeopleGenresTitle = styled.Text`
  font-size: 14px;
  color: white;
`;

export const PeopleGenres = styled.Text`
  font-size: 12px;
  color: gray;
`;

export const LoadingTitle = styled.Text`
  align-self: center;
  font-size: 14px;
  color: white;
  margin-top: 10px;
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
