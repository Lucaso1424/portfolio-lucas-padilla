import { Box,Text,Image, Flex, Button } from './ChakraElements'
import { CodeIcon } from './SocialIcons';
import NextLink from 'next/link';
import useWindowDimensions from './WebDimensions';
import { jorelFont } from '@/fonts/jorel';

const ProjectCard = ({data}: {data: any}) => {
    const { width = 0, height = 0 } = useWindowDimensions();
    return (
        <Flex h={[height/1.2,'100vh']} justifyContent={data.position} >
            <Box
                as='section'
                position='relative'
                my={['0rem', 'auto']}
                mx={['auto','3rem']}
                p={4}
                display={{ md: 'flex' }} 
                w={['95%','50%']}
                h={['95%','60vh','36vh','36vh','40vh','30vh']}
                bgColor='gray.600'
                borderRadius='1rem'>
                <Box flexShrink={0} m='auto'>
                    <Image
                        m='auto'
                        borderRadius='lg'
                        width={['100%','13rem','9rem','12rem', '14rem']}
                        height={['16rem','13rem','9rem','12rem', '14rem']}
                        src={data.img}
                        alt={data.alt}/>
                </Box>
                <Box mt={{ base: 4, md: 3 }} ml={{ md: 6 }}>
                    <Text
                        as='h2'
                        fontWeight='bold'
                        textTransform='uppercase'
                        className={jorelFont.className}
                        fontSize={['5vmin','2vmin','2vmin','2vmin','3vmin']}
                        color='white'>
                        {data.title}
                    </Text>
                    <Text 
                        color='white'
                        as='h3'
                        fontSize={['4.5vmin','2vmin']}
                        mb={['0.5rem','0.5rem','0.5rem','0.5rem', '1.5rem']}>
                        {data.content}
                    </Text>
                    <NextLink target='blank' href={data.link}>
                        <Button my={['1.5rem','0rem']} w={['100%','100%']} variant='outline' colorScheme='teal' leftIcon={<CodeIcon fontSize={6} />}>
                            <Text as='samp'>
                                Code
                            </Text>
                        </Button>
                    </NextLink>
                </Box>
            </Box>
        </Flex>
    )
}

export default ProjectCard