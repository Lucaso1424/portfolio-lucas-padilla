import { Flex, Box } from './ChakraElements'
import * as TechIcons from './TechIcons' 

const SkillIcons = [
    { name: 'Git', icon: TechIcons.GitIcon, color: 'red.800', bg: 'red.200' },
    { name: 'Bash', icon: TechIcons.BashIcon, color: 'black', bg: 'green.200' },
    { name: 'Docker', icon: TechIcons.DockerIcon, color: 'blue.800', bg: 'blue.200' },
    { name: 'SQL', icon: TechIcons.SqlIcon, color: 'gray.900', bg: 'cyan.50' },
    { name: 'C#', icon: TechIcons.CNetIcon, color: 'purple.700', bg: 'white' },
    { name: 'Kotlin', icon: TechIcons.KotlinIcon, color: 'purple.700', bg: 'purple.100' },
    { name: 'Unity', icon: TechIcons.UnityIcon, color: 'black', bg: 'white' },
    { name: 'NextJs', icon: TechIcons.NextJsIcon, color: 'gray.800', bg: 'gray.300' },
    { name: 'Angular', icon: TechIcons.AngularIcon, color: 'orange.700', bg: 'orange.100' },
    { name: 'JS', icon: TechIcons.JsIcon, color: 'yellow.700', bg: 'yellow.200' }
];

export const SkillSquare = () => {
    return (
        <Flex
            direction='row'
            flexWrap={['wrap','wrap']}
            gap='3rem'
            justify='center'
            width={['30rem','70%']}
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