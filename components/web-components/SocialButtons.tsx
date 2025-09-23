import { Box, IconButton } from './ChakraElements'
import { LinkedinIcon, GithubIcon } from './SocialIcons'

const SocialButtons = () => {
    return (
        <Box mt={['5rem','1.7rem']}>
            <a href="https://www.linkedin.com/in/lucas-padilla-hidalgo/" rel="noreferrer" target="_blank">
                <IconButton
                    variant='outline'
                    colorScheme='cyan'
                    color='cyan.700'
                    _hover={{ bgColor: 'cyan.300' }}
                    size='xxl'
                    fontSize={['5rem', '3rem']}
                    icon={<LinkedinIcon />}
                    mr='2rem' 
                    aria-label={''} />
            </a>
            <a href="https://github.com/Lucaso1424" rel="noreferrer" target="_blank">
                <IconButton
                    variant='outline'
                    colorScheme='red'
                    color='red.700'
                    size='xxl'
                    fontSize={['5rem', '3rem']}
                    _hover={{ bgColor: 'red.200' }}
                    icon={<GithubIcon />} 
                    aria-label={''}/>
            </a>
        </Box>
    )
}

export default SocialButtons