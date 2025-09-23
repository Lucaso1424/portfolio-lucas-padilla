import { Box, Text, Flex, Img } from './ChakraElements'
import { ArrowDownIcon } from './SocialIcons'
import NextLink from 'next/link'
import PortfolioNav from './PortfolioNav'
import SocialButtons from './SocialButtons'

export const TitleSection = ({height}: {height: any}) => {
    return(
        <Flex 
            w={['90%','100%']}
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
                boxSize={['12rem','8.5rem']}
                src='/favicon.ico'
                alt='LPADILLA Project'/>
            <Box mt={['2rem','1rem']}>
                <Text
                    as='h1'
                    fontFamily='Arial'
                    fontSize={['10.6vmin','6.6vmin']}
                    color='white'
                    align='center'>
                    Lucas Padilla Hidalgo
                </Text>
                <Text
                    as='h2'
                    fontSize={['7.8vmin','3.4vmin']}
                    fontFamily='Arial'
                    color='white'
                    align='center'
                    mt={['1rem','0rem']}>
                    Software Engineer
                </Text>
            </Box>
            <Box mt='3rem' alignContent={'center'}>
                <PortfolioNav direction={"row"} />
                <SocialButtons />
            </Box>
            <Box mt={['8rem','6.5rem']}>
                <NextLink href="#first-section" > 
                    <ArrowDownIcon fontSize='1.5rem' style={{cursor: 'pointer', color: '#C8F9FF'}} />
                </NextLink>
            </Box>
        </Flex>
    )
}

export default TitleSection