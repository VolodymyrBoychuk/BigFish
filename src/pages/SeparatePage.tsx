import { Box, VStack, Text } from '@chakra-ui/react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { markdownContent } from '../data/content';

const SeparatePage = () => {
  return (
    <>
      <Box p={4} ml={200} mr={200} minH="100vh">
        <Text fontSize="4xl" mb={4} textAlign="center">
          Latest posts
        </Text>
        <VStack spacing={6} align="stretch" bg={'#4a90e2'} p={4} borderRadius="md" boxShadow="md">
          {markdownContent.map((content, index) => (
            <Box
              key={index}
              p={6}
              borderRadius="md"
              boxShadow="md"
              border="1px solid"
              borderColor="gray.200"
            >
              <MarkdownRenderer content={content} />
            </Box>
          ))}
        </VStack>
      </Box>
    </>
  );
};

export default SeparatePage;
