"use client";
import { Button } from './ChakraElements'
import NextLink from "next/link";

interface HomeButtonProps {
  title: string;
  href: string;
}

const HomeButton = ({ title, href }: HomeButtonProps) => {
    return (
        <Button 
            as={NextLink}
            variant='outline'
            href={href}
            border='1px'
            borderColor='white'
            color='white'
            borderRadius='0'
            fontFamily='Arial' 
            fontSize='1.25rem' 
            ml='0.62rem'
            mt={["6.2rem", "2rem", "5rem"]}
            mb={["-4rem", "2rem", "5rem"]}
            w='20rem'
            h='3.12rem'
            _hover={{bg: '#ffffff', color:'#000000'}} 
        >
        {title}
    </Button>  
   )
}

export default HomeButton;