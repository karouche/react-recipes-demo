import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { extendTheme } from "@chakra-ui/react"


const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}

const theme = extendTheme({ colors })

// 1. import `ChakraProvider` component

ReactDOM.render(  
  <ChakraProvider theme={theme}>    
    <App/>
    </ChakraProvider> ,
  document.getElementById('root')
);

