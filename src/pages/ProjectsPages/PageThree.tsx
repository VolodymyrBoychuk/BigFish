import {
  Box,
  Image,
  Text,
  Container,
  VStack,
  HStack,
  Stack,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

// Import assets
import green_land from '../../assets/CarpTracker/pageThree/Rectangle-8.png';
import iphone13Pro from '../../assets/CarpTracker/pageThree/iPhone-13-Pro.png';
import rightArrowAlt from '../../assets/CarpTracker/pageTwo/Icon/right-arrow-alt.png';
import bottomArrowAlt from '../../assets/CarpTracker/pageThree/Icon/right-arrow-alt.png';

const PageThree = () => {
  return (
    <Container maxW="full" bg="#0c1650">
      <VStack
        position={'absolute'}
        left="88px"
        width="600px"
        top={'159px'}
        spacing={10}
        zIndex={3}
        alignItems="flex-start"
      >
        <VStack spacing={3} alignItems="flex-start">
          <HStack spacing={4} align="center" position={'relative'} left={-10}>
            <Box position="relative" display="inline-block">
              <Image
                src={rightArrowAlt}
                alt="Icon"
                color="#4A90E2"
                boxSize="24px"
                position="relative"
              />
            </Box>
            <Text fontSize="2xl" color="#4A90E2" fontWeight="extrabold">
              Core Features
            </Text>
          </HStack>
        </VStack>

        <Stack direction={['column', 'row']} mt={4} spacing={[8, 16]} align="flex-start" w="full">
          {/* Left column */}
          <VStack spacing={8} alignItems="flex-start" flex="1">
            <Box>
              <Text fontSize="16px" lineHeight="24px" color="white" fontWeight={700} mb={1}>
                Rod Configuration Engine
              </Text>
              <Text fontSize="16px" mt={3} lineHeight="24px" color="#FFFFFFB2" fontWeight={400}>
                Set up multiple rods with distance, bait, timer logic, reminder alerts, and haptic
                feedback.
              </Text>
            </Box>
            <Box mt={6}>
              <Text fontSize="16px" lineHeight="24px" color="white" fontWeight={700} mb={1}>
                Session History + Filters
              </Text>
              <Text fontSize="16px" mt={3} lineHeight="24px" color="#FFFFFFB2" fontWeight={400}>
                Persistent data stored locally with deep filtering (by location, effectiveness,
                date).
              </Text>
            </Box>
          </VStack>

          {/* Right column */}
          <VStack spacing={8} alignItems="flex-start" flex="1">
            <Box>
              <Text fontSize="16px" lineHeight="24px" color="white" fontWeight={700} mb={1}>
                Bite & Catch Logger
              </Text>
              <Text fontSize="16px" mt={3} lineHeight="24px" color="#FFFFFFB2" fontWeight={400}>
                Instant entry for species, weight, bait, rod number, and catch timing. Includes
                visual indicators and completion flow.
              </Text>
            </Box>
            <Box>
              <Text fontSize="16px" lineHeight="24px" color="white" fontWeight={700} mb={1}>
                Session Summary + Stats
              </Text>
              <Text fontSize="16px" mt={3} lineHeight="24px" color="#FFFFFFB2" fontWeight={400}>
                Post-session dashboard showing total catches, weight, bait effectiveness, and
                per-rod stats.
              </Text>
            </Box>
          </VStack>
        </Stack>
      </VStack>
      <Box position={'absolute'} left="88px" width="600px" top={'580px'}>
        <Text fontSize="24px" lineHeight="24px" color="white" fontWeight={700} mb={1}>
          Architecture & Scalability
        </Text>
        <UnorderedList
          color={'#FFFFFFB2'}
          fontSize="16px"
          lineHeight="24px"
          fontWeight={400}
          spacing={2}
          mt={4}
          pl={4}
        >
          <ListItem>Modular architecture ready for feature scaling</ListItem>
          <ListItem>
            Future-ready for iCloud sync, advanced statistics, and multiple user profiles{' '}
          </ListItem>
          <ListItem>In-app purchase layer architected with clean upgrade path </ListItem>
          <ListItem>
            Codebase structured for team collaboration and long-term maintainability
          </ListItem>
        </UnorderedList>
      </Box>
      <Box position="absolute" top="210px" right="0px" w="617px" h="571px">
        <Image
          position="relative"
          top="0px"
          left="0px"
          src={green_land}
          alt="Colleagues office"
          objectFit="cover"
          w="617px"
          h="571px"
        />
        <Image
          position="absolute"
          top="-160px"
          right="50px"
          src={iphone13Pro}
          alt="Colleagues office"
          objectFit="cover"
          w="617px"
          h="571px"
        />
        <Image
          position="absolute"
          top="340px"
          left="40px"
          src={bottomArrowAlt}
          alt="Icon"
          boxSize="24px"
        />
        <Text
          position="absolute"
          top="370px"
          left="40px"
          fontSize="16px"
          lineHeight="100%"
          color="white"
          fontWeight={800}
          mb={1}
        >
          Result
        </Text>
        <Text
          position="absolute"
          top="400px"
          left="40px"
          fontSize="16px"
          lineHeight="24px"
          color="white"
          fontWeight={500}
          width="464px"
          mb={1}
        >
          A high-performance MVP that feels premium from first launch — built for fishing in
          real-world outdoor conditions, optimized for quick interaction, offline storage, and
          intuitive rod-by-rod management.
        </Text>
      </Box>
    </Container>
  );
};

export default PageThree;
