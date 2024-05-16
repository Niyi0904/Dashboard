import React from 'react';
import './App.css';
import { Box, VStack, HStack } from '@chakra-ui/react';
import Page1 from './components/page1';

const  App = () => {
  return (
    <VStack>
      <Box width='350px'>
        <Page1/>
      </Box>
    </VStack>
  );
}

export default App;
