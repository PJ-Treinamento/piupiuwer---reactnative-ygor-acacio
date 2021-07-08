import React, { useContext, createContext, useState  } from "react"
import Api from "../services/Api";
import { ICredentials, IAuthState, IAuthContextData }from "../interfaces"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Context = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC <any> = ({children}) => {

  const [authenticated, setAuthenticated] = useState<IAuthState>(() => {
      const token = AsyncStorage.getItem('@piupiuwer:token')
      const user = AsyncStorage.getItem('@piupiuwer:user')

      // if(user && token) {
      //   return{ token, user: JSON.parse(user)}
      // }

      return {} as IAuthState;
  });
  //Função para entrada do usuario e amazenamento de seu token no local storage
  const SingIn = async ({email, password}: ICredentials ) =>{
    const response =  await Api.post('/sessions/login/', {
      email,
      password,
    })
    const data = response.data

    const { token, user } = data
    console.log([token, user])
    AsyncStorage.setItem("@piupiuwer:token", token)
    AsyncStorage.setItem('@piupiuwer:user', JSON.stringify(user)) 

    setAuthenticated({ token, user}); 
    }
    //Saida do usuario removendo seu token do local storage
    const Logout = () => {
      AsyncStorage.removeItem('@piupiuwer:user');
      AsyncStorage.removeItem('@piupiuwer:token');
  
      setAuthenticated({} as IAuthState);
  }

    return (
      <Context.Provider value={{ authenticated, SingIn, Logout, user:authenticated.user, token:authenticated.token }} >
        { children }
      </Context.Provider>
    )  
}

export const useAuth = () => {
    const context = useContext(Context)
    return(context)
}