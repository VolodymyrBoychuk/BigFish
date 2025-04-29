import { Box, VStack, Text } from '@chakra-ui/react';
import MarkdownRenderer from '../components/MarkdownRenderer';
//import { markdownContent } from '../data/content';
import { useParams } from 'react-router-dom';
import { useFetchBlog } from '../hooks/useFetchBlog';

const SeparatePage = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetchBlog(`items/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No data found</p>;
  console.log(data.content);
  return (
    <>
      <Box p={4} ml={200} mr={200} minH="100vh">
        <Text fontSize="4xl" mb={4} textAlign="center">
          Latest posts
        </Text>
        <VStack spacing={6} align="stretch" bg={'#4a90e2'} p={4} borderRadius="md" boxShadow="md">
          <Box p={6} borderRadius="md" boxShadow="md" border="1px solid" borderColor="gray.200">
            {data && <MarkdownRenderer content={data.content} />}
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default SeparatePage;
