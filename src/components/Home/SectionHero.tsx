import { Box, Image, Text, useBreakpointValue, useMediaQuery } from '@chakra-ui/react';

export function SectionHero() {
  const isMobile = useBreakpointValue({
    base: true,
    md: false
  });
  const [isLargerThan1280] = useMediaQuery("(min-width: 1200px)")

  return (
    <Box
      as="section"
      bgImage="url(/static/Background.jpg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"      
    >
      <Box
        maxW={'container.lg'}
        w={isMobile ? '100%' : '80%'}
        p={isMobile ? '28px 16px' : '80px 0'}
        m="auto"
        position="relative"
      >
        <Box maxW={'524px'}>
          <Text as="h1">5 Continentes,<br />infinitas possibilidades.</Text>
          <Text as="h5" mt={[2, 5]}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        {isLargerThan1280 && (
          <Box
            position="absolute"
            right={0}
            bottom="-30px"
          >
            <Image src="/static/Airplane.svg" alt="Viagem" />
          </Box>
        )}
      </Box>
    </Box>
  )
}
