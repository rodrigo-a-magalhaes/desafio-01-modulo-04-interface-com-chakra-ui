import { Box, Flex, Image, Text, useBreakpointValue, useMediaQuery } from '@chakra-ui/react';

export function SectionSlider() {

  const isMobile = useBreakpointValue({
    base: true,
    md: false
  });
  const [isLarger] = useMediaQuery("(min-width: 1280px)")

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
        ></Box>
      </Box>
    </Box>
  )
}



// <Box as="section" pb={isMobile ? '24px' : '20px'}>
// <Box maxW="container.lg" m="auto" px={isMobile ? 0 : 2} maxWidth="1240%" width="100%">
//   <Swiper
//     navigation
//     pagination
//     spaceBetween={0}
//     slidesPerView={1}
//   >
//     {slider.map((item) => (
//       <SwiperSlide key={item.id} >
//         <Image zIndex={0} h={isMobile ? '250px' : '450px'} src={item.url} />
//         <Box
//           pos="absolute"
//           display='flex'
//           alignItems="center"
//           justifyContent="center"
//           w="100%"
//           h="100%"
//           zIndex={2}
//           top="0"
//           flexDir="column"
//         >
//           <Text fontSize="36px" lineHeight="36px" color="#fff" mb="4">{item.title}</Text>
//           <Text fontSize="14px" lineHeight="21px" color="#fff">{item.subTitle}</Text>
//         </Box>
//       </SwiperSlide>
//     ))}
//   </Swiper>
// </Box>
// </Box>