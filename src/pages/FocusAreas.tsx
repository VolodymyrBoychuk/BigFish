import { Box, Image, Text, Container } from '@chakra-ui/react';
import manMakesOnlinePaymentWithDebitCard1 from '../assets/man-makes-online-payment-with-debit-card-1.png';
import TwoColumnList from './TwoColumnList';
import useFocus from '../hooks/useFocus';

const FocusAreas = () => {
  const { data, error } = useFocus();
  if (error) return null;

  return (
    <Box bg="#0c1650" h={'100vh'} overflow="hidden">
      <Container maxW="6xl" position="relative" py={{ base: 12, md: 20 }}>
        <Box position="relative" maxW="600px" mt={20} mb={12}>
          <Image
            src={manMakesOnlinePaymentWithDebitCard1}
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
            Our{' '}
            <Text as="span" color="#4a90e2">
              Focus
            </Text>
          </Text>
          <Text
            position="relative"
            top={-2}
            fontSize={{ base: '5xl', md: '8xl' }}
            fontWeight="extrabold"
            color="white"
            ml={{ base: 0, md: 40 }}
          >
            Areas
          </Text>
        </Box>
        <Box position="absolute" top="210" left="295" zIndex={3} w="100%" h="100%">
          <TwoColumnList items={data} />
        </Box>
      </Container>
    </Box>
  );
};

export default FocusAreas;
