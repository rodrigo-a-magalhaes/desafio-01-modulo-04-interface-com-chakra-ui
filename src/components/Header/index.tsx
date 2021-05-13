import { Box, Flex, Image } from '@chakra-ui/react';
import styles from '../../styles/home.module.css';

export function Header(){
  return(
    <Flex
      justifyContent="center"
      alignItems="center"
      h='100px'
    >
      <Image src="/static/Logo.svg" alt="Logo"/>
    </Flex>
  );
}
