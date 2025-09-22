"use client";
import { Button } from './ChakraElements'

const HomeButton = ({title}:  {title: string}) => {
    return (
        <Button as='button'
        variant='outline'
        border='1px'
        borderColor='white'
        color='white'
        borderRadius='0'
        fontFamily='Arial' 
        fontSize='1.25rem' 
        ml='0.62rem'
        mt={['7.62rem','7.62rem','7']}
        w='20rem'
        h='3.12rem'
        _hover={{bg: '#ffffff', color:'#000000'}} 
        >
        {title}
    </Button>  
   )
}

export default HomeButton