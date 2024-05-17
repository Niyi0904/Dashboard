import React from 'react'
import { Box,Text, Heading, Flex, HStack, Stack, Image, background, VStack } from '@chakra-ui/react';
import naira from '../data/naira.svg';
import dots from '../data/dots.svg'
import loading from '../data/loading.svg'
import foodAndDrinks from '../data/foodanddrinks.svg';
import savings from '../data/savings.svg';

const Page1 = () => {
  return (
    <div>
      <Box bg='white' h='100%'>
        <Box pt='10px' ml='30px'>
          <Box>
            <Heading m='0' color='#001233' fontWeight='bold'>Budget</Heading>
            <HStack >
              <Image src={naira}/>
              <Text color='#707480' fontWeight='bold'>Monthly Budget</Text>
            </HStack>
            <Heading as='h1' ml='20px' fontSize='28px' h='30px'>₦120,000</Heading>
          </Box>
          <Box>
            <HStack fontWeight='400px' fontSize='16px' lineHeight='40px' color='#707480' spacing='30px' h='40px' mb='px'>
              <Text color='#707480' fontWeight='bold'>Last Month</Text>
              <Text color='#0466C8' fontWeight='bold'>This Month</Text>
              <Image src={dots} ml='70px'/>
            </HStack>
            <Box w='30px' h='2px' bg='#0466C8' ml='112px' mb='30px' borderRadius='50px'></Box>
            <Box ml='70px'>
              <Image src={loading} />
              <Text color='#707480' fontSize='14px' ml='20px' fontWeight='bold'>Amount spent so far</Text>
              <Text color='#0466C8' fontSize='16px' ml='10px' fontWeight='bold'>₦50,000/<span style={{color: "#76aee6"}}>₦120,000</span></Text>
            </Box>
            <Box>
              <Heading as='h3' color='#001233' fontWeight='bold'>Category Breakdown</Heading>
                <Box>
                  <HStack>
                    <Image src={foodAndDrinks} mt='5px'/>
                    <Box>
                      <VStack>
                        <HStack h='20px' mr='20px'>
                          <Text fontSize='14px' mb='3px' color='#001233' fontWeight='bold'>Food and Drinks</Text>
                          <Text fontSize='14px' mb='3px' ml='20px' color='#001233' fontWeight='bold'>₦20,000/<span style={{color: 'rgb(148 163 184)'}}>₦42,000</span></Text>
                        </HStack>
                        <Box mr='227px' h='20px' fontSize='14px' color='#707480'>40%</Box>
                      </VStack>
                    </Box>
                  </HStack>

                  <HStack>
                    <Image src={savings} mt='5px'/>
                    <Box>
                      <VStack>
                        <HStack h='20px' mr='80px'>
                          <Text fontSize='14px' mb='3px' color='#001233' fontWeight='bold'>Savings</Text>
                          <Text fontSize='14px' mb='3px' ml='70px' color='#001233' fontWeight='bold'>₦20,000/<span style={{color: 'rgb(148 163 184)'}}>₦42,000</span></Text>
                        </HStack>
                        <Box mr='276px' h='20px' fontSize='14px' color='#707480'>40%</Box>
                      </VStack>
                    </Box>
                  </HStack>
                </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Page1;