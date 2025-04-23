import {
  Container,
  Flex,
  VStack,
  Box,
  Text,
  Image,
  HStack,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react';

import code from '../assets/code.svg';
import optimization from '../assets/optimization.svg';
import rewardLaptop from '../assets/reward-laptop.svg';
import support from '../assets/support.svg';
import ui from '../assets/ui.svg';
import vector from '../assets/vector.svg';

const WhatWeDo = () => {
  return (
    <Container maxW="full" bg="#0c1650">
      <Flex h={'100vh'}>
        <VStack w="full" h="full" pl={200} pr={200} spacing={10} alignItems="flex-start">
          <VStack spacing={3} alignItems="flex-start">
            <Text fontSize="64px" fontWeight="extrabold" color="white">
              <Text as="span" color="#4a90e2">
                What
              </Text>
              <Text as="span" color="white">
                {' '}
                We Do
              </Text>
            </Text>
          </VStack>
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
            <GridItem colSpan={1}>
              <HStack spacing={4} align="center">
                <Box position="relative" display="inline-block">
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    w="100px"
                    h="100px"
                    bg="#0077ff"
                    borderRadius="full"
                    filter="blur(50px)"
                    opacity="0.4"
                  />

                  <Image src={vector} alt="Icon" boxSize="50px" position="relative" />
                </Box>
                <Text fontSize="2xl" fontWeight="extrabold" color="white">
                  IOS App Development
                </Text>
              </HStack>
              <Text pl={16} pr={20} fontSize="base" color="white" opacity="0.7">
                We build fast, production-ready iOS apps using a hybrid UIKit + SwiftUI
                architecture. Whether it’s a full MVP or a complex module, we deliver scalable,
                testable codebases.
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <HStack spacing={4} align="center">
                <Box position="relative" display="inline-block">
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    w="100px"
                    h="100px"
                    bg="#0077ff"
                    borderRadius="full"
                    filter="blur(50px)"
                    opacity="0.4"
                  />

                  <Image src={code} alt="Icon" boxSize="50px" position="relative" />
                </Box>
                <Text fontSize="2xl" fontWeight="extrabold" color="white">
                  Backend API Integration
                </Text>
              </HStack>
              <Text pl={16} pr={20} fontSize="base" color="white" opacity="0.7">
                We integrate your iOS frontend with Node.js, .NET, or custom REST APIs — handling
                everything from token-based auth to real-time updates with proper async flows.
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <HStack spacing={4} align="center">
                <Box position="relative" display="inline-block">
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    w="100px"
                    h="100px"
                    bg="#0077ff"
                    borderRadius="full"
                    filter="blur(50px)"
                    opacity="0.4"
                  />

                  <Image src={ui} alt="Icon" boxSize="50px" position="relative" />
                </Box>
                <Text fontSize="2xl" fontWeight="extrabold" color="white">
                  UI/UX Design
                </Text>
              </HStack>
              <Text pl={16} pr={20} fontSize="base" color="white" opacity="0.7">
                We collaborate with an experienced UI/UX designer to deliver modern,
                conversion-focused interfaces tailored to your product and users. Design handoff is
                smooth and dev-ready.
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <HStack spacing={4} align="center">
                <Box position="relative" display="inline-block">
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    w="100px"
                    h="100px"
                    bg="#0077ff"
                    borderRadius="full"
                    filter="blur(50px)"
                    opacity="0.4"
                  />

                  <Image src={optimization} alt="Icon" boxSize="50px" position="relative" />
                </Box>
                <Text fontSize="2xl" fontWeight="extrabold" color="white">
                  Code Audits & Optimization
                </Text>
              </HStack>
              <Text pl={16} pr={20} fontSize="base" color="white" opacity="0.7">
                Need to fix or improve an existing project? We’ll audit performance, structure, and
                state management — and provide hands-on fixes if needed.
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <HStack spacing={4} align="center">
                <Box position="relative" display="inline-block">
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    w="100px"
                    h="100px"
                    bg="#0077ff"
                    borderRadius="full"
                    filter="blur(50px)"
                    opacity="0.4"
                  />

                  <Image src={rewardLaptop} alt="Icon" boxSize="50px" position="relative" />
                </Box>
                <Text fontSize="2xl" fontWeight="extrabold" color="white">
                  Frontend Web Development
                </Text>
              </HStack>
              <Text pl={16} pr={20} fontSize="base" color="white" opacity="0.7">
                For full MVPs, we can also deliver a responsive web frontend (React/Next.js) using
                the same design system — perfect for admin panels, landing pages, or customer
                dashboards.
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <HStack spacing={4} align="center">
                <Box position="relative" display="inline-block">
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    w="100px"
                    h="100px"
                    bg="#0077ff"
                    borderRadius="full"
                    filter="blur(50px)"
                    opacity="0.4"
                  />

                  <Image src={support} alt="Icon" boxSize="50px" position="relative" />
                </Box>
                <Text fontSize="2xl" fontWeight="extrabold" color="white">
                  Ongoing Feature Development
                </Text>
              </HStack>
              <Text pl={16} pr={20} fontSize="base" color="white" opacity="0.7">
                We support startups and internal teams with feature delivery, refactoring, and
                platform upgrades — available on a flexible retainer or per-project basis.
              </Text>
            </GridItem>
          </SimpleGrid>
        </VStack>
      </Flex>
    </Container>
  );
};

export default WhatWeDo;
