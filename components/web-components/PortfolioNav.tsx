import NextLink from 'next/link'
import { Text,Flex, Link } from './ChakraElements'

export const PortfolioNav = ({direction}: {direction: any}) => {
    return(
        <Flex direction={direction} justify='center' gap={['2rem','1rem']} my={['3rem','1rem']}>
            <Text fontSize={['7.2vmin','3.2vmin']} as='em' className='hover-underline'>
                <Link style={{textDecoration: 'none'}} as={NextLink} href="#first-section">About Me</Link>
            </Text>
            <Text fontSize={['7.2vmin','3.2vmin']} as='em' className='hover-underline'>
                <Link style={{textDecoration: 'none'}} as={NextLink} href="#third-section">Skills</Link>
            </Text>
        </Flex>
    )
}

export default PortfolioNav