"use client"

import {
    Box,
    Text,
    Flex,
    Img,
} from '../../../components/web-components/ChakraElements';
import Footer from '../../../components/web-components/Footer';
import SkillSquare from '../../../components/web-components/SkillSquare';
import TitleSection from '../../../components/web-components/TitleSection';
import useWindowDimensions from '../../../components/web-components/WebDimensions';
import { Navbar } from '../../../components/web-components/NavBar';

export default function Portfolio() {
    
    var { width, height } = useWindowDimensions();
    return(
        <Box bgColor='#111618' >
            <Box display={['block','none']}>
                 <Navbar height={''} width={''} top={'55rem'} darkMode={'true'} />
            </Box>
            <TitleSection height={height} />
            <Flex 
                w='100%'
                height={['100','$100vh']}
                as='section' 
                align='left'
                m='auto' 
                direction='column'
                justify='star'
                id='first-section'>
                <Box mx={['auto','15rem']} my='3rem'>
                    <Text
                    as='h2'
                    fontSize={['8.7vmin','4.7vmin']}
                    color='white'
                    align='left'>
                        About me
                    </Text>
                </Box>
                <Box w={['75%','65%']} mx='auto'>
                    <Text
                        as='p'
                        fontSize={['7vmin','3.7vmin']}
                        color='white'
                        align={['left','justify']}>
                        I am a Software Engineer specialized in designing and building scalable business applications with Microsoft technologies,
                        modern JavaScript frameworks, and microservices architectures. My expertise spans backend development with .NET 9 / .NET Core, 
                        C#, Clean Architecture, DDD, CQRS, and frontend development with Angular, React, and TypeScript.
                    </Text>
                    <Img
                        borderRadius='lg'
                        mt='3rem'
                        mx='auto'
                        boxSize={['20rem']}
                        src='/images/about-me/lucas.jpg'/>
                </Box>
            </Flex>
            <Flex 
                w='100%'
                h={[height!/1.5,'$100vh']}
                as='section' 
                align='left'
                m='auto' 
                direction='column'
                justify='star'
                id='third-section'>
                <Box mx={['auto','15rem']} my='4rem' mb='2rem'>
                    <Text
                        as='h2'
                        fontSize={['8.7vmin','4.7vmin']}
                        color='white'
                        align='left'>
                        Skills
                    </Text>
                </Box>
                <Box 
                    mx={['2rem','14rem']} 
                    h='100%'
                    my='1rem'
                    alignContent='center'>
                    <SkillSquare />                  
                </Box>
            </Flex>
            <Footer />
        </Box>
    )
}