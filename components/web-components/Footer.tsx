import { Divider, Box, SimpleGrid, Text, UnorderedList, ListItem, ListIcon, List, Img } from "./ChakraElements"
import Link from "next/link"
import { GithubIcon,LinkedinIcon } from "./SocialIcons"

export const Footer = () => {
    const bgColor = {
        backgroundColor: '#1e1a20'
    }
    return (
        <div style={bgColor}>
            <Divider />
            <SimpleGrid  columns={[1,1,2,3]} spacing={10} width={['95%','80%']}  m='auto'  color='#ffffff'>
                <Box minHeight={['4','9rem']} m='auto' mt={'2.5rem'}>
                    <Box boxSize={'5rem'} m='auto' mb='0.5rem'>
                        <Img 
                        src='/favicon.ico' 
                        borderRadius='lg'
                        />
                    </Box>
                    <Text as='i' fontSize={'sm'}>LPadilla Project {(new Date().getFullYear())}. </Text>
                    <Text as='i' fontSize={'sm'}>All Rights Reserved.</Text>
                </Box>
                <Box minHeight={['9rem','9rem']} m={['auto',0]} mt={['0','2rem']}>
                    <Text as='u' fontSize='lg'>Navigation</Text>
                    <UnorderedList>
                        <ListItem><Link className='link' href='/'>Home</Link></ListItem>
                        <ListItem><Link className='link' href='/MyProjects'>My Projects</Link></ListItem>
                        <ListItem><Link className='link' href='/Contact'>Contact</Link></ListItem>
                    </UnorderedList>
                </Box>
                <Box minHeight={['9rem','9rem']} m={['auto',0]} mt={['0','2rem']}>
                    <Text as='u' fontSize='lg'>Contact</Text>
                    <List>
                        <ListItem>
                            <ListIcon as={GithubIcon} fontSize='1.2rem'/>
                            <a className='link' href='https://github.com/Lucaso1424' rel="noreferrer" target="_blank">GitHub</a>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={LinkedinIcon} fontSize='1.2rem' />
                            <a className='link' href='https://www.linkedin.com/in/lucas-padilla-hidalgo/' rel="noreferrer" target='_blank'>LinkedIn</a>
                        </ListItem>
                    </List>
                </Box>
            </SimpleGrid>
        </div>
    )
}

export default Footer