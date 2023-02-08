import React, { createContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components'

import Desktop from '../components/layout/Desktop';
import Mobile from '../components/layout/Mobile';

import { GlobalStyles } from '../components/styles/Global'
import { MainContainer } from '../components/styles/Layout.styled'

const theme = {
  colors: {
    color: '#E6E6E6',
    externalBackground: '#121212', 
    internalBackground: '#454545',  
    inputFields: '#00719E',       
    placeholder: '#949494',       
    total: '#A882DD',             
    incomes: '#3AC155',           
    expenses: '#FF4A3D'           
  },
  fontSize: {
    total: '4rem',
    mainInfos: '2rem',
    majorInfos: '1rem',
    minorInfos: '.7rem'
  },
  fontWeight: {
    semiBold: 400,
    regular: 100
  },
  screenSizes: {
    mobile: '768px',
    tablet: '1024px'
  }
}

const ScreenWidthContext = createContext()

function App() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
      function handleResize() {
        setScreenWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainContainer>
        <ScreenWidthContext.Provider value={screenWidth}>
          { screenWidth <= 768 ? <Mobile /> : <Desktop /> }
        </ScreenWidthContext.Provider> 
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
export { ScreenWidthContext }
