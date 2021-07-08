import React from 'react';
import * as S from './styles';
import Profile from '../../images/profile.png';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Piu } from '../../components/Piu';
import { ScrollView } from 'react-native';
import { PageNav } from '../../components/PageNav';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Api from '../../services/Api';
import { Context } from '../../hooks/UseAuth';
import { IPiu } from '../../interfaces';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

export const Feed = () => {
  const { navigate } = useNavigation();

  const {Logout} = useContext(Context)
  const {authenticated} = useContext(Context)
  const {user, token} = authenticated

  const [filter, setFilter] = useState('')

  const [pius, setPius] = useState<IPiu[]>([])
  
  const piusFilter = pius.filter((piu) => 
    piu.user.first_name.includes(filter))

  useEffect(() =>{
    const Data = async() =>{
      try {
        const response = await Api.get('/pius', {
        headers: {authorization:`Bearer ${token}`}
      })
      setPius(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    Data()
  }, [token, Piu]) 

  const hendleToPiuText = () => {
    navigate("PiarText")
  }

  return(
    <S.Container>
      <PageNav/>
      <ScrollView>
        <S.Header>
        <S.ButtonExit onPress={Logout}>
          <Ionicons name="exit-outline" size={24} color="black" />
        </S.ButtonExit>

        <S.User>
            <S.PhotoUser source={Profile} />
            <S.UserContainer>
              <S.NameUser>{user.first_name} {user.last_name}</S.NameUser>

              <S.InfoUserContainer>
                <S.TittleUser>Username: </S.TittleUser>
                <S.InfoUser>{user.username}</S.InfoUser>
              </S.InfoUserContainer>

              <S.InfoUserContainer>
                <S.TittleUser>Bio: </S.TittleUser>
                <S.InfoUser>{user.about}</S.InfoUser>
              </S.InfoUserContainer>
            
              <S.InfoUserContainer>
                <S.TittleUser>Followes: </S.TittleUser>
                <S.InfoUser>{user.followers.length}</S.InfoUser>
              </S.InfoUserContainer>

              <S.InfoUserContainer>
                <S.TittleUser>Following: </S.TittleUser>
                <S.InfoUser>{user.following.length}</S.InfoUser>
              </S.InfoUserContainer>  
            </S.UserContainer>
          </S.User>

          <S.Search  
            placeholder='Filtrar'
            value={filter}
            onChangeText={text => setFilter(text)}
          />

          <S.Button onPress={hendleToPiuText}>
            <Octicons 
              name="pencil" 
              size={24} 
              color="black"
            />
            <S.TextButton>Piar ?</S.TextButton>
          </S.Button>
        </S.Header>
      
        <S.Section>
          {piusFilter.map(piu => <Piu {...piu} key={piu.id}/>)}
        </S.Section>
      </ScrollView>
    </S.Container>
  )
}