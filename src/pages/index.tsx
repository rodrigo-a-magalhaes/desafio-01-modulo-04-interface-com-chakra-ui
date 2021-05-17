import { Box, Divider, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Header } from '../components/Header';
import { SectionHero } from '../components/Home/SectionHero';
import { SectionSlider } from '../components/Home/SectionSlider';
import { SectionStyles } from '../components/Home/SectionStyles';

SwiperCore.use([Navigation, Pagination]);

export default function Home() {
  const isMobile = useBreakpointValue({
    base: true,
    md: false
  });
  return (
    <Box as="main">
      <Header />
      <SectionHero />
      <SectionStyles />
      <Divider
        m="auto"
        w={isMobile ? '60px' : '90px'}
        borderColor="brand.headingText"
      />
      <SectionSlider />
    </Box>
  )
}
