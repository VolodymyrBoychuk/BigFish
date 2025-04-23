import {
  Box,
  FormControl,
  Input,
  Textarea,
  SimpleGrid,
  VStack,
  Button,
  Grid,
  GridItem,
  Text,
  Stack,
  HStack,
  Image,
} from '@chakra-ui/react';

import envelope from '../assets/Contact/Icon/envelope.png';
import tel from '../assets/Contact/Icon/icon.png';

const Contacts = () => {
  return (
    <Box bg="#0c1650" h={'100vh'} overflow="hidden">
      <Box position="relative" ml="110px" mt={12}>
        <Text
          fontSize={{ base: '4xl', md: '6xl' }}
          fontWeight="extrabold"
          lineHeight="1.2"
          textAlign="left"
          color="white"
        >
          Contact
        </Text>
      </Box>
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={24} mx="7%" mt={10} p={4}>
        <GridItem>
          <Stack spacing={4}>
            <Box>
              <Text fontSize="24" fontWeight={700} lineHeight="120%" color={'white'}>
                Let’s Build Something Great Together
              </Text>
              <Text fontSize="18" fontWeight={400} lineHeight="150%" color={'white'} mt={6} pr={1}>
                Whether you're launching an MVP, scaling an existing product, or just exploring
                options — we’d love to hear what you’re building.
              </Text>
              <Text fontSize="18" fontWeight={400} lineHeight="150%" color={'white'} pr={1}>
                We're fast, technical, and focused on results — no fluff, just great apps.
              </Text>
            </Box>
            <Box mt={6}>
              <HStack spacing={4} align="center">
                <Box position="relative" display="inline-block">
                  <Image src={envelope} alt="Icon" boxSize="24px" position="relative" />
                </Box>
                <Text fontSize="16" fontWeight="400" color="white">
                  hello@gmail.com
                </Text>
              </HStack>
            </Box>
            <Box>
              <HStack spacing={4} align="center">
                <Box position="relative" display="inline-block">
                  <Image src={tel} alt="Icon" boxSize="19px" position="relative" />
                </Box>
                <Text fontSize="16" fontWeight="400" color="white">
                  +380 (93) 000-0000
                </Text>
              </HStack>
            </Box>
          </Stack>
        </GridItem>

        <GridItem>
          <Box borderWidth={1} borderRadius="lg" border="none" bg="#374591" p={6}>
            <form>
              <VStack spacing={4} align="stretch">
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                  <FormControl id="name" isRequired>
                    <Input bg="#B8CAE01F" border="none" placeholder="Name" />
                  </FormControl>

                  <FormControl id="phone">
                    <Input bg="#B8CAE01F" border="none" placeholder="Phone" />
                  </FormControl>
                </SimpleGrid>

                <FormControl id="email" isRequired>
                  <Input bg="#B8CAE01F" border="none" type="email" placeholder="Email" />
                </FormControl>

                <FormControl id="message">
                  <Textarea bg="#B8CAE01F" border="none" placeholder="Placeholder" />
                </FormControl>
                <Box display="flex" justifyContent={'flex-end'} mt={4}>
                  <Button bg={'#4a90e2'} color="white" type="submit" width="25%">
                    Submit
                  </Button>
                </Box>
              </VStack>
            </form>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Contacts;
