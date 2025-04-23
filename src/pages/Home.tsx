import { Box, Button, Flex, Heading, Text, Image } from '@chakra-ui/react';
import female from '../assets/female-web-designer-office-1.png';
import representation from '../assets/representation-user-experience-interface-design-1.png';

const Home = () => {
  return (
    <Flex bg="#0c1650" justify="center" w="full" minH="100vh">
      <Box position="relative" w="100%" h="100vh" overflow="hidden" bg="#0c1650">
        {/* Background Images */}
        <Image
          position="absolute"
          w="643px"
          h="522px"
          top="330px"
          objectFit="cover"
          opacity={0.5}
          src={female}
          alt="Female web designer in office"
          loading="lazy"
          mixBlendMode={'color-dodge'}
        />
        <Image
          position="absolute"
          w="619px"
          h="328px"
          top="-69px"
          left="652px"
          objectFit="cover"
          src={representation}
          alt="User experience interface design"
          loading="lazy"
          mixBlendMode={'color-dodge'}
        />

        {/* Rotated Text */}
        <Heading
          as="h2"
          position="absolute"
          w="592px"
          top="10px"
          left="317px"
          transform="rotate(-90deg)"
          color="#4a90e2"
          fontSize="64px"
          fontWeight="extrabold"
        >
          scalable
        </Heading>

        {/* Main Heading */}
        <Box position="absolute" w="422px" h="214px" top="122px" left="150px">
          <Heading color="white" fontSize="64px" fontWeight="extrabold" whiteSpace="nowrap">
            We build fast,
          </Heading>
          <Box position="absolute" top="72px" left="230px" textAlign="right">
            <Text as="p" m="0" fontSize="8xl" color="white" fontWeight="black" lineHeight="1">
              IOS
            </Text>
            <Text as="p" m="0" fontSize="4xl" color="white" fontWeight="black" lineHeight="1">
              apps
            </Text>
          </Box>
        </Box>

        {/* Subheading */}
        <Text
          position="absolute"
          w="592px"
          top="365px"
          left="648px"
          fontSize="4xl"
          color="white"
          fontWeight="extrabold"
        >
          with UIKit, SwiftUI, and performance-first architecture.
        </Text>

        {/* Description */}
        <Text
          position="absolute"
          w="620px"
          top="480px"
          left="648px"
          fontSize="xl"
          lineHeight="34px"
          color="#ffffffcc"
        >
          We help startups and product teams launch clean, production-ready apps using hybrid
          SwiftUI/Combine/UIKit components — designed for maintainability, performance, and future
          scaling.
        </Text>

        {/* CTA Button */}
        <Box position="absolute" top="600px" left="648px">
          <Button
            bg="#4a90e2"
            color="white"
            fontSize="16px"
            fontWeight="medium"
            px="18px"
            py="10px"
            borderRadius="4px"
            _hover={{ bg: '#3a78c2' }}
          >
            Let's talk
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default Home;
