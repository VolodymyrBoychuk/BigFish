import { Box, Container, Text, Image, Grid, GridItem, VStack, HStack } from '@chakra-ui/react';

import BlogImage from '../assets/Blog/Placeholder-Image.png';
import space from '../assets/Blog/space.png';
import hands from '../assets/Blog/hands.png';

const Blog = () => {
  return (
    <Box bg="#0c1650" h={'100vh'} overflow="hidden">
      <Container maxW="6xl" position="relative" py={{ base: 12, md: 20 }}>
        <Box position="relative" pl={6} zIndex={3}>
          <Text
            fontSize={{ base: '4xl', md: '6xl' }}
            fontWeight="extrabold"
            lineHeight="1.2"
            textAlign="left"
            color="white"
          >
            Blog
          </Text>
        </Box>
        <Grid templateColumns="1fr 1fr" gap={6} p={6}>
          {/* Ліва колонка */}
          <GridItem>
            <Box mb={4}>
              <Image src={BlogImage} alt="Left Top Image" borderRadius="md" />
            </Box>
            <Box>
              <Text fontSize="22" fontWeight={700} lineHeight="140%" color={'white'}>
                Why I Still Use UIKit in 2024 (And When SwiftUI Isn’t Enough)
              </Text>
              <Text fontSize="16" fontWeight={400} lineHeight="150%" color={'white'}>
                A practical breakdown of when UIKit still outperforms SwiftUI — from scroll
                performance to layout control — and how we blend both in real apps.
              </Text>
            </Box>
          </GridItem>

          {/* Права колонка */}
          <GridItem>
            <VStack spacing={6} align="stretch">
              {/* Перший блок */}
              <HStack spacing={4}>
                <Image src={space} alt="Space" borderRadius="md" w={'276px'} h={'250px'} />
                <Box>
                  <Text fontSize="22" fontWeight={700} lineHeight="140%" color={'white'}>
                    From Concept to App Store: How We Built CarpTracker with Combine + Realm
                  </Text>
                  <Text fontSize="16" fontWeight={400} lineHeight="150%" color={'white'}>
                    An inside look at how we built a real-world SwiftUI/Combine app with
                    offline-first storage, session analytics, and a hybrid UIKit system.
                  </Text>
                </Box>
              </HStack>

              {/* Другий блок */}
              <HStack spacing={4}>
                <Image src={hands} alt="Hands" borderRadius="md" w={'276px'} h={'250px'} />
                <Box>
                  <Text fontSize="22" fontWeight={700} lineHeight="140%" color={'white'}>
                    Bridging UIKit + SwiftUI: Building a Reusable UICollectionView Component
                  </Text>
                  <Text fontSize="16" fontWeight={400} lineHeight="150%" color={'white'}>
                    Tutorial + architecture notes on creating a reusable, high-performance
                  </Text>
                </Box>
              </HStack>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;
