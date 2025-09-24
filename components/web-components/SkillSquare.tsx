import { Flex, Box } from './ChakraElements';
import { VscAzure } from 'react-icons/vsc';
import * as TechIcons from './TechIcons';

const SkillIcons = [
    { name: 'Git', icon: TechIcons.GitIcon, color: 'red.800', bg: 'red.200' },
    { name: 'C#', icon: TechIcons.CNetIcon, color: 'purple.700', bg: 'white' },
    { name: 'Azure', icon: VscAzure, color: 'blue.800', bg: 'blue.200' },
    { name: 'SQL', icon: TechIcons.SqlIcon, color: 'gray.900', bg: 'cyan.50' },
    { name: 'Unity', icon: TechIcons.UnityIcon, color: 'black', bg: 'white' },
    { name: 'Next.Js', icon: TechIcons.NextJsIcon, color: 'gray.800', bg: 'gray.300' },
    { name: 'JS', icon: TechIcons.JsIcon, color: 'yellow.700', bg: 'yellow.200' }, 
    { name: 'Angular', icon: TechIcons.AngularIcon, color: 'orange.700', bg: 'orange.100' },
    { name: 'React', icon: TechIcons.ReactIcon, color: 'purple.700', bg: 'purple.100' },
    { name: 'PrimeFaces', icon: TechIcons.PrimeFacesIcon, color: 'cyan.700', bg: 'cyan.100' },
];

export const SkillSquare = () => {
    return (
        <Flex
            direction='row'
            flexWrap={['wrap','wrap']}
            gap='3rem'
            justify='center'
            width={['30rem','100%']}
            my='3rem'>
            {SkillIcons.map(({ name, icon: Icon, color, bg }) => (
                <Flex
                    key={name}
                    maxW='sm' 
                    direction='column' 
                    align='center' 
                    gap='0.90rem'>
                    <Box
                        borderRadius='1rem'
                        bgColor={bg}
                        boxShadow='dark-lg'
                        p='1rem'
                        color={color}>
                        <Icon fontSize='3rem' />
                    </Box>
                    <Box style={{fontSize: '3vmin', color:'#ffffff'}}>
                        {name}
                    </Box>
                </Flex>		
            ))}
        </Flex>
    )
}

export default SkillSquare;