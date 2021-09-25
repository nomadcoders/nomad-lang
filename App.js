import React, { useEffect, useRef, useState } from "react";
import { Animated, PanResponder, Text, View } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import icons from "./icons";

const Container = styled.View`
  flex: 1;
  background-color: #34495e;
`;

const Edge = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Word = styled.Text`
  font-weight: 600;
  font-size: 38px;
  background-color: white;
  padding: 10px 20px;
  overflow: hidden;
  border-radius: 15px;
  color: ${(props) => props.textColor};
`;
const Center = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
`;
const IconCard = styled(Animated.createAnimatedComponent(View))`
  background-color: white;
  padding: 10px;
  border-radius: 5px;
`;

export default function App() {
  // Values
  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  // Animations

  // Pan Responders

  // State
  return (
    <Container>
      <Edge>
        <Word textColor={"#2ecc71"}>알아</Word>
      </Edge>
      <Center>
        <IconCard style={{ transform: position.getTranslateTransform() }}>
          <Ionicons name="pizza" color="#34495e" size={68} />
        </IconCard>
      </Center>
      <Edge>
        <Word textColor={"#e74c3c"}>몰아</Word>
      </Edge>
    </Container>
  );
}
