import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';

const Header = () => {
  const history = useHistory();

  return(
    <S.DivLogIn> 
      <S.DivButton onClick={() => history.replace('/')}>LaBeTrip</S.DivButton>
    </S.DivLogIn>)
}

export default Header;