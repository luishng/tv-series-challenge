import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 14,
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
  image: {
    width: 48,
    height: 48,
    marginRight: 10,
    borderRadius: 2,
  },
});

export const Container = styled.ScrollView.attrs({
  flexGrow: 1,
})`
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;
  background-color: #1b1b1f;
`;

export const ViewInput = styled.View`
  margin-top: 35px;
`;
