import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1; 
`;

export const Header = styled.View`
  background-color: rgba(149, 213, 178, 0.5);
  padding-top: 20px;
`;

export const User = styled.View`
  flex-direction: row;
`;
 
export const PhotoUser = styled.Image`
  margin: 20px;
  width: 125px;
  height: 125px;
  border-radius: 125px;
`;

export const UserContainer = styled.View`
  margin-left: 20px;
  margin-top: 15px;
`;

export const InfoUserContainer = styled.View`
  flex-direction: row;
  max-width: 180px;
`;

export const NameUser = styled.Text`
  font-size: 20px;
  font-family: Roboto;
  font-weight: 700;
  margin:0px 0px 10px;
`;

export const TittleUser = styled.Text`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  margin: 1px 0px 1px;
`;

export const InfoUser = styled.Text`
  margin: 2px;
  font-size: 14px;
  font-family: Roboto;
`;

export const Search = styled.TextInput`
  margin: 0px 0px 0px 15px;
  width: 110px;
  background-color: #F1F1f1;
  height: 23px;
  padding-left: 10px;
  border-width: 1px;
  border-radius: 8px;
`;

export const Button = styled.TouchableOpacity`
  width: 85px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: -10px 0px 20px 270px;
`;

export const ButtonExit = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: -10px 0px 20px 330px;
`;

export const TextButton = styled.Text`
  font-size: 24px;
`;

export const Section = styled.View`
  align-items: center;
`;

