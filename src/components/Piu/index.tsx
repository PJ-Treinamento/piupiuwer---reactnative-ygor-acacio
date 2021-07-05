import React from 'react'

import { Text } from 'react-native'
import Perfil from '../../images/Perfil.jpeg';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import * as S from './styles';

export const Piu = () =>{
  return(
    <S.PiuBox>
          <S.PiuBoxProfile>
            <S.ImgProfile source={Perfil} />
            <S.NameProfile>Ygor Acacio</S.NameProfile>
            <Text>-</Text>
            <S.InfoProfile>@user.username</S.InfoProfile>
            <Text>-</Text>
            <S.InfoProfile>00/00</S.InfoProfile>
            <AntDesign name="staro" size={16} color="black" />
            <SimpleLineIcons name="user-follow" size={16} color="black" />
          </S.PiuBoxProfile>

          <S.PiuContainer>
            <S.PiuText>text</S.PiuText>
          </S.PiuContainer>

          <S.PiuInterections>
          <AntDesign name="hearto" size={16} color="black" />
            <S.InfoPiu>0</S.InfoPiu>

            <Fontisto name="comment" size={16} color="black" />
            <S.InfoPiu>0</S.InfoPiu>

            <Octicons name="trashcan" size={16} color="black" />
          </S.PiuInterections>
        </S.PiuBox>
  )
}