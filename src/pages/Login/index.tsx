import React from 'react';
import * as S from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { PageNav }  from '../../components/PageNav';
import { useNavigation } from "@react-navigation/native";

export const Login = () => {
  const { navigate } = useNavigation();

  const hendleToFeed = () => {
    navigate("NavigateTabs")
  }

  return(
    <>
      <PageNav/> 
      <S.Container>
        <S.Section>
          <S.LoginBox>
            <S.Title>Faça seu login</S.Title>
            <S.InputBox>
              <S.Input  placeholder='Email:'/>
              <S.Input placeholder='Senha:'/>
            </S.InputBox>
            <S.Button>
              <RectButton
                onPress={hendleToFeed}
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
      </S.Container>
    </> 
  )
}