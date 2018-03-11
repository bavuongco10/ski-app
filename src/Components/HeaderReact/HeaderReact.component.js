import React from 'react';
import styled, { keyframes } from 'styled-components';

import { Images } from '../../Themes';
import BuildInfo from '../BuildInfo/BuildInfo.component';

const rotate360 = keyframes`
   from { transform: rotate(0deg); }
   to { transform: rotate(360deg); }
`;

const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
  text-align: center;
`;

const AppTitle = styled.h1`
  font-size: 1.5em;
`;

const AppImage = styled.img`
  height: 80px;
  animation: ${rotate360} infinite 20s linear;
`;

const HeaderReact = () => (
  <AppHeader className="App-header">
    <AppImage src={Images.react_logo} className="App-logo" alt="logo" />
    <AppTitle className="App-title">Welcome to React</AppTitle>
    <BuildInfo />
  </AppHeader>
);

export default HeaderReact;
