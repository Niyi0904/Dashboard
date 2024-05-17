import React from 'react';
import { Box, HStack, Image, Text, VStack, Stack } from '@chakra-ui/react';
import homeIcon from '../data/home.svg';
import report from '../data/reports.svg';
import chat from '../data/chat.svg';
import budget from '../data/budgets.svg';
import profile from '../data/profile.svg';

const Footer = () => {
  return (
    <Box w='100%' position='sticky' bottom='0'  bg='white'>
      <HStack h='50px' spacing='35px' ml='15px'>
        <VStack>
          <Image src={homeIcon} />
          <span style={{fontSize: '10px', fontWeight:'bold', color: '#C1C4CD'}}>Home</span>
        </VStack>
        <VStack>
          <Image src={report}/>
          <span style={{fontSize: '10px', fontWeight:'bold', color: '#C1C4CD'}}>Reports</span>
        </VStack>
        <VStack mb='23px'>
          <Image src={chat}/>
          <span style={{fontSize: '10px', fontWeight:'bold', color: '#C1C4CD'}}>Chat</span>
        </VStack>
        <VStack>
          <Image src={budget}/>
          <span style={{fontSize: '10px'}}>Budget</span>
        </VStack>
        <VStack>
          <Image src={profile}/>
          <span style={{fontSize: '10px', fontWeight:'bold', color: '#C1C4CD'}}>Profile</span>
        </VStack>
      </HStack>
    </Box>
  )
}

export default Footer;