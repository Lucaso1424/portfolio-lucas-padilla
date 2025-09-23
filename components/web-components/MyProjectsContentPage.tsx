import { Divider } from '@chakra-ui/react'
import { Box } from './ChakraElements'
import Footer from './Footer'
import { Navbar } from './NavBar'
import ProjectCard from './ProjectCard'

export const MyProjectsContentPage = () => {

    const firstCard = {
        title: 'Generic Store',
        position: 'unset',
        content: 'Project developed with C# in .NET 8 to combine and practise SOLID principles, DDD (Domain-Driven Design) and Entity Framework Core for relational databases.',
        link:'https://github.com/Lucaso1424/GenericStore',
        img: '/images/Microsoft_.NET_logo.png',
        alt: 'Generic Store'
    };

    const secondCard = {
        title: 'ERP Java, Spring Boot',
        position: 'flex-end',
        content: 'ERP (enterprise resource planning) business management software with a sales module created with Java, Spring Boot, Hibernate and Thymeleaf.',
        link:'https://github.com/Lucaso1424/SALES_4_US',
        img: '/images/sales_4_us.png',
        alt: 'Sales 4 US'
    };
        
    const thirdCard = {
        title: 'Lonks Adventure 3D',
        position: 'unset',
        content: 'Video game developed with Unity, based on the famous The Legend of Zelda saga as a tribute.',
        link:'https://docs.google.com/document/d/1o8X2IniSbR3YxfGE59RKSs7sLW2cWRHrnc-GbzlBSdU/edit?usp=sharing',
        img: 'images/lonks_adventure_logo.png',
        alt: 'VideoGame Lonks Adventure 3D'
    };

    const fourthCard = {
        title: 'LPADILLA Project',
        position: 'flex-end',
        content: 'Static site generator created with Next.js, React, Chakra-UI and Three.Js, a 3D dynamic library.',
        link:'URL_WEB_VERCEL',
        img: '/images/favicon.ico',
        alt: 'LPADILLA Project'
    };

    return (
        <>
            <Box color='white' bgColor='gray.900'>
                <Navbar height={''} width={''} top={''} darkMode={'true'} />
                <Divider mt='1rem'/>
            </Box>
            <ProjectCard data={firstCard}/>
            <ProjectCard data={secondCard}/>
            <ProjectCard data={thirdCard}/>
            <ProjectCard data={fourthCard}/>
            <Footer />
        </>
    )
}

export default MyProjectsContentPage