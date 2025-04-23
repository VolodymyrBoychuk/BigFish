import { Box, Container, Text, Image, Flex } from '@chakra-ui/react';

import BlogImage from '../assets/Blog/Blogs.png';

const Blog = () => {
  return (
    <Box bg="#0c1650" h={'100vh'} overflow="hidden">
      <Container maxW="6xl" position="relative" py={{ base: 12, md: 20 }}>
        <Box position="absolute" top="10px" left="-1px" zIndex={3}>
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
        <Image
          position="absolute"
          top="100px"
          left="2px"
          src={BlogImage}
          alt="Colleagues office"
          objectFit="contain"
          w="1175px"
          h="576px"
        />
      </Container>
    </Box>
  );
};

export default Blog;
