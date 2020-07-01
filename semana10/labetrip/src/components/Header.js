import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';

const Header = () => {
  const history = useHistory();

        return(
            <S.DivContainer> 
              <div></div>
              <S.DivButton onClick={() => history.replace('/')}>LaBeTrip</S.DivButton>
              <S.DivButton onClick={() => history.push('/login')}>Login</S.DivButton>
            </S.DivContainer>)
}

export default Header;