import React from'react';
import * as S from './styles';
import { PageNav } from '../../components/PageNav';
import { Octicons } from '@expo/vector-icons';
import { useState } from 'react';
import Api from '../../services/Api';
import { useContext } from 'react';
import { Context } from '../../hooks/UseAuth';

export const PiarText = () => {
  const [postPius, setPostPius] = useState('');
  const {authenticated} = useContext(Context)
  const {user, token} = authenticated

  const PostPiu = () => {
    if (postPius.length===0 || postPius.length>=140){
    }else{
    Api.post('/pius', { text:postPius }, {
      headers: {authorization:`Bearer ${token}`}
    } )
  }}

  return(
    <S.Container>
      <PageNav/>
      <S.PiuInputContainer>
        <S.PiuText>Que tal dar um piu ?</S.PiuText>
        <S.PiuInputAreaText 
          placeholder="Escreva aqui" 
          value={postPius}
          onChangeText={text => setPostPius(text)}
        ></S.PiuInputAreaText>
      </S.PiuInputContainer>
      <S.Button onPress={PostPiu} >
        <Octicons 
          name="pencil" 
          size={24} 
          color="black"
        />
        <S.TextButton>Piar ?</S.TextButton>
      </S.Button>
    </S.Container>
  )
}