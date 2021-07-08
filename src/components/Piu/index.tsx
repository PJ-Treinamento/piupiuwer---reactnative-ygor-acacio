import React from 'react'
import { Text } from 'react-native'
import Profile from '../../images/profile.png';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { IPiu} from "../../Interfaces";
import Api from "../../services/Api";
import * as S from './styles';
import { useContext } from 'react';
import { Context } from '../../hooks/UseAuth';

export  const Piu = ({user, text, likes, id }:IPiu) => {
    //Criando o estado para variar o icon de like e de favorito, enquanto acessa a Api
    // const [like, setLike] = useState(EmptyHeart)
    // const [favorite, setFavorite] = useState(EmptyStar)
    // const [toFollow, setToFollow] = useState<string>()
  
    const {authenticated} = useContext(Context)
    const {token} = authenticated
    
    const deletePiu = async() => {
      try {
        const deleteResponse = await Api.delete('/pius',
      { data:{piu_id:id}, headers: {authorization:`Bearer ${token}`}}  )
      console.log(deleteResponse)
      } catch (error) {
        console.log(error)
      }  
    }
  
    const likePiu = async() => {
      try {
        const likeResponse = await Api.post('/pius/like', {data:{piu_id:id}},
      { headers: {authorization:`Bearer ${token}`}}  )
      console.log(likeResponse)
      } catch (error) {
        console.log(error)
      }  
    }
  
    const favoritePiu = async() => {
      try {
        const favoriteResponse = await Api.post('/pius/favorite', {data:{piu_id:id}},
      { headers: {authorization:`Bearer ${token}`}})
        console.log(favoriteResponse)
      } catch (error) {
        console.log(error)
      }
    }
    
    const follow = async() => {
      try {
        const followResponse = await Api.post('/pius/follow', {data:{followed_id:id}},
      { headers: {authorization:`Bearer ${token}`}})
        console.log(followResponse)
      } catch (error) {
        console.log(error)
      }
    }
  
  return(
    <S.PiuBox>
          <S.PiuBoxProfile>
            <S.ImgProfile source={Profile} />
            <S.NameProfile>{user.first_name} {user.last_name}</S.NameProfile>
            <Text>-</Text>
            <S.InfoProfile>@{user.username}</S.InfoProfile>
            <Text>-</Text>
            <S.InfoProfileDate>00/00</S.InfoProfileDate>

            <S.Button onPress={favoritePiu} >
              <AntDesign name="staro" size={16} color="black" />
            </S.Button>
            
            <S.Button onPress={follow}>
              <SimpleLineIcons name='user-follow' size={16} color="black"/>
            </S.Button>
          </S.PiuBoxProfile>

          <S.PiuContainer>
            
            <S.PiuText>{text}</S.PiuText>
          </S.PiuContainer>

          <S.PiuInterections>
            <S.Button onPress={likePiu} >
              <AntDesign name="hearto" size={16} color="black" />
            </S.Button>
            <S.InfoPiu>{likes.length}</S.InfoPiu>

            <S.Button>
              <Fontisto name="comment" size={16} color="black" />
            </S.Button>
            <S.InfoPiu>0</S.InfoPiu>

            <S.Button onPress={deletePiu} >
              <Octicons name="trashcan" size={16} color="black" />
            </S.Button>
          </S.PiuInterections>
        </S.PiuBox>
  )
}