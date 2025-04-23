import { Box, Image, Text, VStack, Container, Grid, useBreakpointValue } from '@chakra-ui/react';
import colleaguesOfficeHoldingHandsEachOther1 from '../assets/colleagues-office-holding-hands-each-other-1.png';

const About = () => {
  const titleFontSize = useBreakpointValue({ base: '3xl', md: '5xl', lg: '6xl' });

  return (
    <Box maxW="full" h={'100vh'} bg="#0c1650" py={{ base: 12, md: 20 }} position="relative">
      <Box position="absolute" inset="0" zIndex={0}>
        <Image
          src={colleaguesOfficeHoldingHandsEachOther1}
          alt="Colleagues office"
          objectFit="cover"
          w="100%"
          h="100%"
          opacity={0.9}
        />
      </Box>

      <Container maxW="6xl" position="relative" zIndex={1}>
        <Grid
          templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
          gap={{ base: 10, md: 16 }}
          alignItems="center"
        >
          {/* LEFT SIDE TEXT */}
          <VStack align="start" spacing={6}>
            <Box
              bg="#0c1650"
              borderRadius="md"
              boxShadow="lg"
              p={{ base: 6, md: 10 }}
              position="relative"
            >
              <VStack align="start" spacing={4}>
                <Text
                  fontWeight="extrabold"
                  fontSize={titleFontSize}
                  bgGradient="linear(to-r, #4a90e2 0%, #4a90e2 70%, white 30%)"
                  bgClip="text"
                >
                  About Us
                </Text>

                <Box
                  bg="#374591"
                  w="184px"
                  h="40px"
                  borderRadius="sm"
                  display="flex"
                  alignItems="center" // по вертикалі
                  justifyContent="flex-start" // по горизонталі
                  pl={4} // відступ всередині зліва
                >
                  <Text fontWeight="bold" fontSize="xl" color="white">
                    We're a small,
                  </Text>
                </Box>

                <Box
                  bg="#4a90e2"
                  w="382px"
                  h="52px"
                  borderRadius="sm"
                  display="flex"
                  alignItems="center" // по вертикалі
                  justifyContent="left" // по горизонталі
                  pl={4}
                >
                  <Text fontWeight="bold" fontSize="4xl" color="white">
                    high-performance
                  </Text>
                </Box>

                <Text fontWeight="bold" fontSize="xl" color="white">
                  dev studio run by engineers who know iOS inside out — and how to make systems
                  scale smoothly.
                </Text>
              </VStack>
            </Box>
            <Box borderRadius="md" boxShadow="lg" p={{ base: 6, md: 10 }} position="relative">
              <Text fontSize="lg" fontWeight="medium" color="whiteAlpha.800">
                We believe in clean architecture, developer-friendly code, and long-term
                maintainability.
                <br />
                <br />
                Whether we're building your MVP or improving an existing codebase, we treat every
                line of code like it's going to production.
              </Text>
            </Box>
          </VStack>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
