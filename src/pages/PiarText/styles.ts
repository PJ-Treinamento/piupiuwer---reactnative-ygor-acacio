import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;
  background-color: rgba(149, 213, 178, 0.5);
  padding-top: 20px;
`;

export const PiuInputContainer = styled.View`
  align-items: center;
`;

export const PiuText = styled.Text`
  font-size: 24px;
  font-weight: 600;
  font-family: Roboto;
`;

export const PiuInputAreaText = styled.TextInput`
  width: 350px;
  height: 200px;
  border-radius: 8px;
  border-width: 0.5px;
  background-color: #f1f1f1;
  margin-top: 10px;
  padding: 10px;
`;

export const Button = styled.TouchableOpacity`
  width: 85px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0px 20px 270px;
`;

export const TextButton = styled.Text`
  font-size: 24px;
`;