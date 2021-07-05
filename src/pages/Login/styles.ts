import styled from 'styled-components/native';
 
export const Container = styled.View`
  flex: 1;
  background-color: rgba(149, 213, 178, 0.5);
  padding-top: 20px;
`;

export const Section = styled.View`
  flex: 1px;
  justify-content: center;
  align-items: center;
`;


export const LoginBox = styled.View`
  margin-top: -60px;
  width: 320px;
  height: 350px;
  overflow: hidden;
  background: #F5F3F3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: rgba(44, 44, 44, 1);
  font-family: Roboto;
  font-size: 30px;
  margin-top: -20px;
`;

export const InputBox = styled.View`
  margin: 30px 30px 30px 30px;
 
`;

export const Input = styled.TextInput`
  border-width: 1px;
  width: 250px;
  height: 30px;
  margin: 10px;
  border-color: rgba(163, 153, 153, 1);
  border-radius: 8px;
  padding-left: 10px;
`;

export const Button = styled.View`
  background-color: rgba(45, 106, 79, 1);
  border-radius: 8px;
  width: 250px;
  height: 30;
  align-items: center;
  justify-content: center;
  margin: -5px 0px 30px;
`;

export const ButtonText = styled.Text`
  font-size: 25px;
  color: #f1f1f1;
`;

export const TextLink = styled.Text`
  font-family: Roboto;
  color:rgba(44, 44, 44, 0.8);
  margin: 10px;
`;

export const Footer = styled.View`
flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const FooterText = styled.Text`
  font-family: Roboto;
  font-size: 15px;
  margin: 10px;
`;






