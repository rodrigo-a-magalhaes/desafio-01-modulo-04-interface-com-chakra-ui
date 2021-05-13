import { Flex, Box, Grid, Image, Text, Divider, ControlBox, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Virtual } from 'swiper';
import { Header } from '../components/Header';

SwiperCore.use([Navigation, Pagination]);

export default function Home() {
  const isMobile = useBreakpointValue({
    base: true,
    md: false
  });

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

  const slider = [
    {
      id: "1",
      url: '/static/europa.jpg',
      title: 'Europa',
      subTitle: 'O continente mais antigo.'
    },
    {
      id: "2",
      url: '/static/europa.jpg',
      title: 'Europa',
      subTitle: 'O continente mais antigo.'
    },
    {
      id: "3",
      url: '/static/europa.jpg',
      title: 'Europa',
      subTitle: 'O continente mais antigo.'
    },
    {
      id: "4",
      url: '/static/europa.jpg',
      title: 'Europa',
      subTitle: 'O continente mais antigo.'
    },
    {
      id: "5",
      url: '/static/europa.jpg',
      title: 'Europa',
      subTitle: 'O continente mais antigo.'
    }
  ]

  return (
    <Flex direction='column' mh='100vh'>
      <Header />

      <Box
        as="section"
        bgImage="url(/static/Background.jpg)"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
      >
        <Box maxW="container.lg" m="auto" px={3}>
          <Flex alignItems="center" py="80px">
            <Box flexBasis={!isMobile ? '50%' : '100%'} >
              <Text
                as="h1"
                color="brand.headings"
                fontSize={isMobile ? '20px' : '36px'}
                lineHeight={isMobile ? '30px' : '54px'}
                mb={3}
              >
                5 Continentes,<br />infinitas possibilidades.
              </Text>
              <Text
                as="h2"
                fontSize={isMobile ? '14px' : '20px'}
                lineHeight={isMobile ? '21px' : '30px'}
                color="brand.infoLight"
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Box>
            {!isMobile &&
              <Flex flexBasis="50%" justifyContent="flex-end">
                <Image mb="-100px" src="/static/Airplane.svg" alt="Viagem" />
              </Flex>
            }
          </Flex>
        </Box>
      </Box>

      <Box as="section">
        <Box maxW="container.lg" m="auto" px={2}>
          <Flex
            py="20"
            flex="1"
            flexWrap="wrap"
            justifyContent="center"
          >
            {tags.map((tag) => (
              <Flex
                key={tag.icon}
                flexBasis={isMobile ? '50%' : '20%'}
                direction={isMobile ? 'row' : 'column'}
                justifyContent={isMobile && 'center'}
                alignItems="center"
              >
                {!isMobile && (<Image mb="3" src={`/static/${tag.icon}`} alt={tag.name} />)}
                {isMobile && (<Box d='block' mr={2} p={1} borderRadius="50%" bgColor="brand.highlight"></Box>)}
                <Text fontWeight="bold">{tag.name}</Text>
              </Flex>
            ))}
          </Flex>
          <Divider
            borderWidth={isMobile ? '1px' : '2px'}
            borderColor="brand.headingText"
            m="auto"
            w="90px"
            opacity="1"
          />
        </Box>
      </Box>

      <Box as="section" py="20">
        <Box maxW="container.lg" textAlign="center" m="auto" px={2}>
          <Text
            as="h2"
            fontSize={isMobile ? '20px' : '36px'}
            lineHeight={isMobile ? '30px' : '54px'}
          >
            Vamos nessa?<br />Então escolha seu continente
          </Text>
        </Box>
      </Box>

      <Box as="section" pb={isMobile ? '10px' : '20px'}>
        <Box maxW="container.lg" m="auto" px={2}>
          <Swiper
            navigation
            pagination
            spaceBetween={0}
            slidesPerView={1}
          >
            {slider.map((item) => (
              <SwiperSlide key={item.id} >
                <Image zIndex={0} h={isMobile ? '250px' : '450px'} src={item.url} />
                <Box
                  pos="absolute"
                  display='flex'
                  alignItems="center"
                  justifyContent="center"
                  w="100%"
                  h="100%"
                  zIndex={2}
                  top="0"
                  flexDir="column"
                >
                  <Text fontSize="36px" lineHeight="36px" color="#fff" mb="4">{item.title}</Text>
                  <Text fontSize="14px" lineHeight="21px" color="#fff">{item.subTitle}</Text>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>

    </Flex>
  )
}
