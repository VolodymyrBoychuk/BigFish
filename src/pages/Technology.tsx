import { Box, Container, Text, Image, Flex } from '@chakra-ui/react';

import programming from '../assets/programming-background-with-person-working-with-codes-computer 1.png';
import rightArrow from '../assets/Icon/Icon/right-arrow-alt.svg';
import TwoColumnList from './TwoColumnList';
import useTech from '../hooks/useTech';

const Technology = () => {
  const { data, error } = useTech();
  if (error) return null;
  return (
    <Box bg="#0c1650" h={'100vh'} overflow="hidden">
      <Container maxW="6xl" position="relative" py={{ base: 12, md: 20 }}>
        <Box position="relative" maxW="600px" mt={10} mb={12}>
          <Image
            src={programming}
            alt="Man makes online payment"
            objectFit="cover"
            w="100%"
            h="auto"
          />
        </Box>
        <Box position="absolute" top="10px" mb={-12} zIndex={3}>
          <Text
            fontSize={{ base: '4xl', md: '6xl' }}
            fontWeight="extrabold"
            lineHeight="1.2"
            textAlign="left"
            color="white"
          >
            Technology
          </Text>
        </Box>
        <Box position="relative" left="665px" top="-85px" mb={-12} zIndex={3}>
          <Flex align="center">
            <Text mr={2} color="#4A90E2" fontSize="2xl" fontWeight="extrabold">
              Let's tell more
            </Text>
            <Image src={rightArrow} alt="Icon" boxSize="40px" position="relative" />
          </Flex>
        </Box>
        <Box position="absolute" top="170" left="295" zIndex={3} w="100%" h="100%">
          <TwoColumnList items={data} />
        </Box>
      </Container>
    </Box>
  );
};

export default Technology;
