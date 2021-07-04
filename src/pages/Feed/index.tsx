import React from 'react';
import * as S from './styles';
import LogoPiupiuwer from '../../images/logo-PP.png';
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const Feed = () => {
  return(
    <S.Container>
      <S.Nav>
        <S.LogoPP source={LogoPiupiuwer}/>
      </S.Nav>
      <AntDesign name="arrowleft" size={35} color="black" />
    </S.Container>
  )
}