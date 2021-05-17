import { Box, Flex, Image, Text, useBreakpointValue, useMediaQuery } from '@chakra-ui/react';

export function SectionStyles() {
  const tags = [
    {
      icon: 'cocktail.svg',
      name: 'vida noturna'
    },
    {
      icon: 'surf.svg',
      name: 'praia'
    },
    {
      icon: 'building.svg',
      name: 'moderno'
    },
    {
      icon: 'museum.svg',
      name: 'clássico'
    },
    {
      icon: 'earth.svg',
      name: 'e mais...'
    }
  ];
  const isMobile = useBreakpointValue({
    base: true,
    md: false
  });
  const [isLarger] = useMediaQuery("(min-width: 1280px)")

  return (
    <Box as="section" overflow="hidden">
      <Box
        maxW={'container.lg'}
        w={isMobile ? '100%' : '80%'}
        p={isMobile ? '35px 50px' : '120px 0 80px 0'}
        m="auto"
        position="relative"
      >
        <Box
          d="flex"
          flexWrap="wrap"
          justifyContent="center"
        >
          {tags.map((tag, index) => (
            <Flex
              key={tag.name}
              alignItems="center"
              flexBasis={!isLarger ? '50%' : '20%'}
              w={!isLarger ? '50%' : '20%'}
              justifyContent={index === 4 ? 'center' : index % 2 === 0 ? 'flex-start' : 'flex-end'}
              mt={!isLarger ? '24px' : 0}
              flexDirection={isLarger ? 'column' : 'row'}
            >
              {isLarger ? (
                <Image w="85px" h="85px" src={`/static/${tag.icon}`} alt={tag.name} />
              ) : (
                <Box d='block' w={2} h={2} mr={2} borderRadius="50%" bgColor="brand.highlight"></Box>
              )}

              <Text
                fontWeight={[500, 600]}
                fontSize={['18px', '24px']}
                lineHeight={['27px', '36px']}
                color="brand.headingText"
                mt={!isLarger ? 0 : '24px'}
              >
                {tag.name}
              </Text>
            </Flex>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
