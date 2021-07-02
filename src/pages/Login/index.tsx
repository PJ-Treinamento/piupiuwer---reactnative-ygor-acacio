import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import * as S from './styles';
import { RectButton } from 'react-native-gesture-handler';
import LogoPiupiuwer from '../../images/logo-PP.png';
import { FontAwesome } from '@expo/vector-icons';
//import { PageHeader }  from '../../components/PageHeader';

export const Login = () => {
  const submit = () => {
    console.log('pressed')
  }
  return(
    <S.container>
      {/* <PageHeader/> */}
      <S.Nav>
        <S.LogoPP source={LogoPiupiuwer}/>
      </S.Nav>
      <S.Section>
        <S.LoginBox>
          <S.Title>Faça seu login</S.Title>
          <S.InputBox>
            <S.Input  placeholder='Email:'/>
            <S.Input placeholder='Senha:'/>
          </S.InputBox>
          <S.Button>
            <RectButton
              onPress={submit}
            >
              <S.ButtonText>Entrar</S.ButtonText>
            </RectButton>
          </S.Button>
          
          <S.TextLink>Esqueci minha senha</S.TextLink>
          <S.TextLink>Não tenho cadastro</S.TextLink>
        </S.LoginBox>
      </S.Section>
      <S.Footer>
        <FontAwesome name="copyright" size={15} color="black" />
        <S.FooterText>Copyright of PoliJunior</S.FooterText>
      </S.Footer>
    </S.container>
  )
}