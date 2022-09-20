import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  margin-bottom: 8px;
  flex-direction: row;
`;

export const IconContainer = styled.View<Props>`
  width: 55px;
  height: 56px;
  justify-content: center;
  align-items: center;

  margin-right: 2px;

  background-color: gray;

  ${({ theme, isFocused }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: white;
    `}
`;

export const InputText = styled(TextInput)<Props>`
  flex: 1;
  background-color: gray;

  font-size: 20px;
  color: white;
  padding: 0 23px;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: white;
    `}
`;
