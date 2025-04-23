import { Box, Image, Text, Container, VStack, HStack } from '@chakra-ui/react';

import frameTwo from '../../assets/CarpTracker/pageTwo/Frame-2-1.png';
import iphone16Pro from '../../assets/CarpTracker/pageTwo/iPhone-16-Pro.png';
import iphone16ProTwo from '../../assets/CarpTracker/pageTwo/iPhone-16-Pro2.png';
import rightArrowAlt from '../../assets/CarpTracker/right-arrow-alt.svg';

const PageTwo = () => {
  return (
    <Container maxW="full" bg="#0c1650">
      <Box position="absolute" inset="0" zIndex={0}>
        <Image
          position="absolute"
          top="165px"
          left="-17"
          src={frameTwo}
          alt="Colleagues office"
          objectFit="cover"
          w="808px"
          h="670px"
        />
        <Image
          position="absolute"
          top="100px"
          left="169px"
          src={iphone16Pro}
          alt="Colleagues office"
          objectFit="cover"
          w="273px"
          h="528px"
        />
        <Image
          position="absolute"
          top="272px"
          left="431px"
          src={iphone16ProTwo}
          alt="Colleagues office"
          objectFit="cover"
          w="273px"
          h="528px"
        />
      </Box>
      <VStack
        w="full"
        position={'absolute'}
        left="800px"
        width="450px"
        top={'182px'}
        spacing={10}
        zIndex={3}
        alignItems="flex-start"
      >
        <VStack spacing={3} alignItems="flex-start">
          <HStack spacing={4} align="center" position={'relative'} left={-10}>
            <Box position="relative" display="inline-block">
              <Image src={rightArrowAlt} alt="Icon" boxSize="24px" position="relative" />
            </Box>
            <Text fontSize="2xl" fontWeight="extrabold" color="white">
              What We Built
            </Text>
          </HStack>
        </VStack>
        <VStack spacing={8} alignItems="flex-start">
          <Text fontSize="16px" lineHeight="24px" color="white" letterSpacing={0} fontWeight={400}>
            <Text as="span" fontWeight="700">
              SwiftUI + UIKit Hybrid:
            </Text>{' '}
            SwiftUI + UIKit Hybrid: SwiftUI used for layout speed; UIKit for critical components
            like sheets, lists, and animation-driven views.
          </Text>
          <Text fontSize="16px" lineHeight="24px" color="white" letterSpacing={0} fontWeight={400}>
            <Text as="span" fontWeight="700">
              Reactive State with Combine:
            </Text>{' '}
            State-driven logic for sessions, rods, bite events, and UI flow — all built with Combine
            publishers and clean separation of concerns.
          </Text>
          <Text fontSize="16px" lineHeight="24px" color="white" letterSpacing={0} fontWeight={400}>
            <Text as="span" fontWeight="700">
              Local Database with Realm:
            </Text>{' '}
            Real-time data persistence for rods, catches, and sessions. Enables full offline
            functionality and fast filtering.
          </Text>
          <Text fontSize="16px" lineHeight="24px" color="white" letterSpacing={0} fontWeight={400}>
            <Text as="span" fontWeight="700">
              Custom UI Design:
            </Text>{' '}
            Entire app interface follows a bespoke design — no templates or UI kits. Focused on
            contrast, visibility in outdoor light, and tap precision.
          </Text>
          <Text fontSize="16px" lineHeight="24px" color="white" letterSpacing={0} fontWeight={400}>
            <Text as="span" fontWeight="700">
              In-App Purchases Ready:
            </Text>{' '}
            Architected and stubbed for scalable monetization — premium features, advanced stats,
            backups (via StoreKit).
          </Text>
        </VStack>
      </VStack>
    </Container>
  );
};

export default PageTwo;
