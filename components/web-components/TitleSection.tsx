import { Box, Text, Flex, Img } from './ChakraElements'
import { ArrowDownIcon } from './SocialIcons'
import NextLink from 'next/link'
import SocialButtons from './SocialButtons'

export const TitleSection = ({height}: {height: any}) => {
    return(
        <Flex 
            w={['100%','100%']}
            h={[height,'$100vh']}
            top={['14rem','7rem']}
            as='section' 
            align='center'
            m='auto' 
            direction='column'
            justify='star' 
            position='relative'>
            <Img
                borderRadius='full'
                boxSize={['8rem','8.2rem']}
                src='/favicon.ico'
                alt='LPADILLA Project'/>
            <Box mt={['3rem','1rem']}>
                <Text
                    as='h1'
                    fontFamily='Arial'
                    mt={'2rem'}
                    fontSize={['10.6vmin','6.6vmin']}
                    color='white'
                    align='center'>
                    Lucas Padilla Hidalgo
                </Text>
                <Text
                    as='h2'
                    fontSize={['8vmin','3.4vmin']}
                    fontFamily='Arial'
                    color='white'
                    align='center'
                    mt={['3rem','0rem']}>
                    Software Engineer
                </Text>
            </Box>
            <Box mt='3rem' alignContent={'center'}>
                <SocialButtons />
            </Box>
        </Flex>
    )
}

export default TitleSection