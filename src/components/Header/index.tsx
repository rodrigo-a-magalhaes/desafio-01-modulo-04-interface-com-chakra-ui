import { Flex, Image, useBreakpointValue } from '@chakra-ui/react';

export function Header() {
  const isMobile = useBreakpointValue({
    base: true,
    md: false
  });

  return (
    <Flex
      as="header"
      justifyContent="center"
      alignItems="center"
      h={isMobile ? '50px' : '100px'}
    >
      <Image
        w={isMobile ? '81px' : '185px'}
        src="/static/Logo.svg"
        alt="Logo" />
    </Flex>
  );
}
