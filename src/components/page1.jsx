import React from 'react'
import { Box,Text, Heading, Flex, HStack, Stack, Image, background, VStack } from '@chakra-ui/react';
import naira from '../data/₦.svg';
import dots from '../data/dots.svg'
import loading from '../data/loading.svg'
import foodAndDrinks from '../data/foodanddrinks.svg';

const Page1 = () => {
  return (
    <div>
      <Box bg='red'>
        <Box ml='15px'>
          <Box>
            <Heading m='0'>Budget</Heading>
            <HStack >
              <Image src={naira}/>
              <Text>Monthly Budget</Text>
            </HStack>
            <Heading as='h1' ml='20px' fontSize='28px'>₦120,000</Heading>
          </Box>
          <Box>
            <HStack fontWeight='400px' fontSize='16px' lineHeight='40px' color='#707480' spacing='30px'>
              <Text>Last Month</Text>
              <Text>This Month</Text>
              <Image src={dots} ml='70px'/>
            </HStack>
            <Box ml='70px'>
              <Image src={loading} />
              <Text color='#707480' fontSize='14px' ml='20px'>Amount spent so far</Text>
              <Text color='#0466C8' fontSize='16px' ml='10px'>₦50,000/<span style={{color: "#76aee6"}}>₦120,000</span></Text>
            </Box>
            <Box>
              <Heading as='h3'>Category Breakdown</Heading>
                <Box>
                  <HStack>
                    <Image src={foodAndDrinks} mt='5px'/>
                    <Box>
                      <VStack>
                        <HStack h='20px' mr='30px'>
                          <Text fontSize='14px' mb='3px'>Food and Drinks</Text>
                          <Text fontSize='14px' mb='3px' ml='20px'>₦20,000/₦42,000</Text>
                        </HStack>
                        <Box mr='227px' h='20px' fontSize='14px'>40px</Box>
                      </VStack>
                    </Box>
                  </HStack>

                  <HStack>
                    <Image src={foodAndDrinks} mt='5px'/>
                    <Box>
                      <VStack>
                        <HStack h='20px' mr='80px'>
                          <Text fontSize='14px' mb='3px'>Savings</Text>
                          <Text fontSize='14px' mb='3px' ml='70px'>₦20,000/₦42,000</Text>
                        </HStack>
                        <Box mr='276px' h='20px' fontSize='14px'>40px</Box>
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