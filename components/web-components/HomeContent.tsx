import Link from 'next/link';
import { Box, Text } from './ChakraElements'
import HomeButton from './HomeButton';
import { jorelFont } from "../../src/app/page"; 

export const HomeContent = () => {
    return (
        <Box position='fixed' top='0' right='0' left='0' h='100vh'>
          <Box w='100%' mt={['2vh','6vh']} h='100%'>
            <Text as='h1' 
            textAlign='center'
            className={jorelFont.className} 
            fontSize={['8vmin','8vmin','8vmin','8vmin','8vmin']}
            color='white'>
              LPADILLA Project
            </Text>
            <Box as='nav'
              textAlign= 'center'
              position='fixed'
              w='100%'
              mt={['45vh','50vh']}>
              <Link href="/contact">
                  <HomeButton title='About me' />
              </Link>
              <Link href="/MyProjects">
                  <HomeButton title='My Projects' />      
              </Link>
            </Box>
          </Box>
        </Box>
    )
}

export default HomeContent