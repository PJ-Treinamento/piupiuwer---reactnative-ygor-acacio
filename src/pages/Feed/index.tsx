import React from 'react';
import * as S from './styles';
import LogoPiupiuwer from '../../images/logo-PP.png';
import Perfil from '../../images/Perfil.jpeg';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Piu } from '../../components/Piu';
import { ScrollView } from 'react-native';
import { PageNav } from '../../components/PageNav';

export const Feed = () => {
  return(
    <S.Container>
      <PageNav/>
      <ScrollView>
        <S.Header>
          <AntDesign name="arrowleft" size={35} color="black" />

          <S.User>
            <S.PhotoUser source={Perfil} />
            <S.UserContainer>
              <S.NameUser>Ygor Acacio </S.NameUser>

              <S.InfoUserContainer>
                <S.TittleUser>Username: </S.TittleUser>
                <S.InfoUser>Ygor_acaio</S.InfoUser>
              </S.InfoUserContainer>

              <S.InfoUserContainer>
                <S.TittleUser>Bio: </S.TittleUser>
                <S.InfoUser>oi sou muito legal </S.InfoUser>
              </S.InfoUserContainer>
            
              <S.InfoUserContainer>
                <S.TittleUser>Followes: </S.TittleUser>
                <S.InfoUser>2</S.InfoUser>
              </S.InfoUserContainer>

              <S.InfoUserContainer>
                <S.TittleUser>Following: </S.TittleUser>
                <S.InfoUser>0</S.InfoUser>
              </S.InfoUserContainer>  
            </S.UserContainer>
          </S.User>

          <S.Search  placeholder='Filtrar'/>

          <S.Button>
            <Octicons name="pencil" size={24} color="black" />
            <S.TextButton>Piar ?</S.TextButton>
          </S.Button>
        </S.Header>
      
        <S.Section>
          <Piu/>
          <Piu/>
          <Piu/>
          <Piu/>
          <Piu/>
          <Piu/>
          <Piu/>
          <Piu/>
        </S.Section>
      </ScrollView>
    </S.Container>
  )
}