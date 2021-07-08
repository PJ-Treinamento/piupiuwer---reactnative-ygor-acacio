import React, { useContext, useState } from 'react';
import * as S from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { PageNav }  from '../../components/PageNav';
import { useNavigation } from "@react-navigation/native";
import { Context } from '../../hooks/UseAuth';

export const Login = () => {
  const { navigate } = useNavigation();

  const {SingIn} = useContext(Context)
  // const [credentials, setCredentials] = useState({ email:'', password:'' })
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const hendleFormSubmit = async () => {
    await SingIn({email:'', password:''})
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
              <S.Input  
                value={email}
                onChangeText={text => setEmail(text) }                 
                placeholder='Email:'
              />
              <S.Input 
                value={password}
                onChangeText={text => setPassword(text) }                 
                placeholder='Senha:'
              />
            </S.InputBox>
            <S.Button>
              <RectButton
                onPress={hendleFormSubmit}
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