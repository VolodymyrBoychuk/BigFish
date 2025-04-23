import {
  Box,
  Image,
  Text,
  Flex,
  SimpleGrid,
  GridItem,
  Container,
  VStack,
  HStack,
} from '@chakra-ui/react';

// Import assets
import x121 from '../../assets/CarpTracker/12-1.png';
import green_bg from '../../assets/CarpTracker/green_237974_755x375.png';
import iconCarpl from '../../assets/CarpTracker/icon-carp-1.png';
import iphone16Pro from '../../assets/CarpTracker/Iphone-16-Pro.png';
import rightArrowAlt from '../../assets/CarpTracker/right-arrow-alt.svg';

const PageOne = () => {
  return (
    <Container maxW="full" bg="#0c1650">
      <Box position="absolute" inset="0" zIndex={0}>
        <Image
          position="absolute"
          top="239px"
          right="50%"
          src={x121}
          alt="Colleagues office"
          objectFit="cover"
          w="755px"
          h="375px"
        />
        <Image
          position="absolute"
          top="239px"
          left="50%"
          src={green_bg}
          alt="Colleagues office"
          objectFit="cover"
          w="755px"
          h="375px"
        />
      </Box>
      <Flex h={'100vh'}>
        <VStack w="full" pl={100} pr={100} mt={5} spacing={10} alignItems="flex-start">
          <VStack spacing={3} alignItems="flex-start">
            <Flex align="center" gap="20px">
              <VStack spacing={4} align="center">
                <Text fontSize="16px" lineHeight="100%" fontWeight={800} pl={2}>
                  Case Study
                </Text>
                <Image
                  src={iconCarpl}
                  borderRadius="10px"
                  alt="Carp icon"
                  w="82px"
                  h="82px"
                  objectFit="cover"
                />
              </VStack>
              <Box color="white" pt={6}>
                <Text color="#4a90e2" fontSize="48px" lineHeight="100%" fontWeight={800}>
                  CarpTracker
                </Text>
                <Text fontSize="16px" lineHeight="30px" fontWeight={400}>
                  <span style={{ fontWeight: 800 }}>Fishing Session</span> Companion App
                </Text>
              </Box>
            </Flex>
          </VStack>
          <SimpleGrid columns={2} mt={20} columnGap={3} rowGap={6} w="full" zIndex={1}>
            <GridItem colSpan={1}>
              <Text
                fontSize="16px"
                pr="140px"
                align="left"
                lineHeight="24px"
                letterSpacing="0px"
                fontWeight="500"
                color="white"
              >
                <Text as="span" color="#white" fontWeight="900">
                  CarpTracker
                </Text>{' '}
                is a custom-built iOS application for fishing enthusiasts, designed to streamline
                the experience of managing and tracking fishing sessions.
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <HStack spacing={4} align="center" position={'relative'} left={320}>
                <Box position="relative" display="inline-block">
                  <Image src={rightArrowAlt} alt="Icon" boxSize="24px" position="relative" />
                </Box>
                <Text fontSize="2xl" fontWeight="extrabold" color="white">
                  What We Built
                </Text>
              </HStack>
            </GridItem>
            <GridItem colSpan={1}>
              <Text
                fontSize="16px"
                pr="175px"
                align="left"
                lineHeight="24px"
                letterSpacing="0px"
                fontWeight="500"
                color="white"
              >
                The app combines a unique design, intuitive controls, and real-time performance to
                help users stay{' '}
                <Text as="span" color="#white" fontWeight="900">
                  focused on their rods — not their screens.
                </Text>
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Box position="relative" left="350px" top={-10} w="253px" h="auto">
                <Text fontSize="16" color="white" fontWeight="400" lineHeight={'24px'}>
                  We developed CarpTracker as a fully offline-first, performance-focused
                  SwiftUI/Combine app with UIKit integration for complex views and interactions.
                </Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </VStack>
        <Box position="absolute" inset="0" zIndex={0}>
          <Image
            src={iphone16Pro}
            alt="Iphone 16 Pro"
            position="absolute"
            top="70px"
            left="42%"
            w="auto"
            h="auto"
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default PageOne;
