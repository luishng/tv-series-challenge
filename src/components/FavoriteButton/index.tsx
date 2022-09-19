import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { BorderlessButtonProps } from "react-native-gesture-handler";

import { Container } from "./styles";

interface Props extends BorderlessButtonProps {
  color?: string;
  active: boolean;
}

export function FavoriteButton({ color, active, ...rest }: Props) {
  return (
    <Container {...rest}>
      <FontAwesome
        name={active ? "heart" : "heart-o"}
        size={24}
        color={color ? color : "gray"}
      />
    </Container>
  );
}
