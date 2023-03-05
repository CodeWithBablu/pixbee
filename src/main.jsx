import React from 'react'
import ReactDOM from 'react-dom/client'

import { RecoilRoot } from 'recoil' // for state management

import { ChakraProvider } from '@chakra-ui/react' // for ui elements

import './styles/index.css'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </RecoilRoot>
  </React.StrictMode>,
)
