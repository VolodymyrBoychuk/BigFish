import {
  Box,
  Container,
  Text,
  Image,
  Grid,
  GridItem,
  VStack,
  HStack,
  Button,
} from '@chakra-ui/react';

import { usePagination } from '../hooks/usePagination';

import { BlogPost } from '../blogType';
import { useFetchBlogs } from '../hooks/useFetchBlogs';

const Blog = () => {
  const { data, loading, error } = useFetchBlogs('items');
  const { currentItems, page, totalPages, nextPage, prevPage, goToPage } = usePagination(data, 3);

  const openSeparatePage = (item: BlogPost | null) => {
    window.open(`/separate/${item?.id}`, '_blank');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Box bg="#0c1650" h={'100vh'} overflow="hidden">
      <Container maxW="6xl" position="relative" py={{ base: 12, md: 20 }}>
        <Box position="relative" pl={6} zIndex={3}>
          <HStack justifyContent="space-between" width="100%" spacing={4} mb={0}>
            <Text
              fontSize={{ base: '4xl', md: '6xl' }}
              fontWeight="extrabold"
              lineHeight="1.2"
              textAlign="left"
              color="white"
            >
              Blog
            </Text>
          </HStack>
        </Box>
        <Grid templateColumns="1fr 1fr" minW="1120px" minH="555px" gap={6} p={2}>
          {/* Ліва колонка */}
          <GridItem
            onClick={() => openSeparatePage(currentItems[0])}
            cursor="pointer"
            _hover={{ bg: 'rgba(255,255,255,0.05)', transition: '0.2s' }}
          >
            <Box mb={4}>
              <Image src={currentItems[0].image} alt="Left Top Image" borderRadius="md" />
            </Box>
            <Box>
              <Text fontSize="22" fontWeight={700} lineHeight="140%" color={'white'}>
                {currentItems[0].title}
              </Text>
              <Text fontSize="16" fontWeight={400} lineHeight="150%" color={'white'}>
                {currentItems[0].text}
              </Text>
            </Box>
          </GridItem>

          {/* Права колонка */}
          <GridItem>
            <VStack spacing={6} align="stretch">
              {/* Перший блок */}
              <HStack
                spacing={4}
                onClick={() => openSeparatePage(currentItems[1])}
                cursor="pointer"
                _hover={{ bg: 'rgba(255,255,255,0.05)', transition: '0.2s' }}
              >
                {currentItems[1] && (
                  <>
                    <Image
                      src={currentItems[1]?.image}
                      alt="Space"
                      borderRadius="md"
                      w={'276px'}
                      h={'250px'}
                    />
                    <Box>
                      <Text fontSize="22" fontWeight={700} lineHeight="140%" color={'white'}>
                        {currentItems[1]?.title}
                      </Text>
                      <Text fontSize="16" fontWeight={400} lineHeight="150%" color={'white'}>
                        {currentItems[1]?.text}
                      </Text>
                    </Box>{' '}
                  </>
                )}
              </HStack>

              {/* Другий блок */}
              <HStack
                spacing={4}
                onClick={() => openSeparatePage(currentItems[2])}
                cursor="pointer"
                _hover={{ bg: 'rgba(255,255,255,0.05)', transition: '0.2s' }}
              >
                {currentItems[2] && (
                  <>
                    {' '}
                    <Image
                      src={currentItems[2]?.image}
                      alt="Hands"
                      borderRadius="md"
                      w={'276px'}
                      h={'250px'}
                    />
                    <Box>
                      <Text fontSize="22" fontWeight={700} lineHeight="140%" color={'white'}>
                        {currentItems[2]?.title}
                      </Text>
                      <Text fontSize="16" fontWeight={400} lineHeight="150%" color={'white'}>
                        {currentItems[2]?.text}
                      </Text>
                    </Box>{' '}
                  </>
                )}
              </HStack>
            </VStack>
          </GridItem>
        </Grid>
        <HStack justify="center" mt={1} spacing={4}>
          <Button onClick={prevPage} isDisabled={page === 1}>
            Preview
          </Button>
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i}
              onClick={() => goToPage(i + 1)}
              color={'white'}
              colorScheme={page === i + 1 ? 'blue' : 'gray'}
              variant={page === i + 1 ? 'solid' : 'outline'}
            >
              {i + 1}
            </Button>
          ))}
          <Button onClick={nextPage} isDisabled={page === totalPages}>
            Next
          </Button>
        </HStack>
      </Container>
    </Box>
  );
};

export default Blog;
