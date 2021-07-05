import styled from 'styled-components/native';

export const PiuBox =styled.View`
  border-radius: 8px;
  background: #F9F6F6;
  border: 0.5px solid #8A8989;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 350px;
  margin-top: 16px;
  padding: 10px;
`;

export const PiuBoxProfile = styled.View`
  flex-direction: row;
  font-family: Roboto;
  align-items: center;
  justify-content: space-between;
  width: 320px;
`;

export const NameProfile = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

export const InfoProfile = styled.Text`
  font-size: 14px;
`;

export const ImgProfile = styled.Image`
  border-radius: 30px;
  width: 29px;
  height: 29px;
`;

export const PiuContainer = styled.View`
  max-width: 290px;
  padding-top: 20px;
  padding-left: 35px;
`;

export const PiuText = styled.Text`
  font-size: 16px;
`;

export const PiuInterections = styled.View`
  margin-top: 20px;
  margin-left: 34px;
  width: 200px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InfoPiu = styled.Text`
  margin-left: -50px;
  font-size: 14px;
`;
