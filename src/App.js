import React from 'react';
import { Box, VStack, HStack } from '@chakra-ui/react';
import Page1 from './components/page1';
import Footer from './components/footer';

const  App = () => {
  return (
    <div>
      <Box position='relative' w='59vh'>
        <Page1/>
        <Footer/>
      </Box>
    </div>
  );
}

export default App;
