import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

interface ButtonProps {
  color: string;
}

interface ButtonTextProps {
  light: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;

  padding: 19px;
  align-items: center;
  justify-content: center;

  background-color: ${({ color }) => color};
  margin-bottom: 8px;
`;

export const Title = styled.Text<ButtonTextProps>`
  font-size: 15px;
  color: ${({ theme, light }) => (light ? "red" : "white")};
`;
