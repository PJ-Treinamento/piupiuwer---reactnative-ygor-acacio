import react from 'react'

import LogoPiupiuwer from '../../images/logo-PP.png';
import * as S from './styles';

export const PageHeader = () => {
  return(
    <S.Nav>
      <S.LogoPP source={LogoPiupiuwer}/>
    </S.Nav>
  );
};
