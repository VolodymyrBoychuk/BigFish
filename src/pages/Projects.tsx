import { useEffect, useState } from 'react';
import { Box, Button, HStack, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import PageOne from './ProjectsPages/PageOne';
import PageTwo from './ProjectsPages/PageTwo';
import PageThree from './ProjectsPages/PageThree';

const Projects = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [autoChange, setAutoChange] = useState<boolean>(true);

  const pages = [<PageOne />, <PageTwo />, <PageThree />];

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoChange) {
        setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [autoChange]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setAutoChange(false);
  };

  // Функція для отримання стилю кнопки
  // Змінюємо стиль кнопки в залежності від активної сторінки
  const getButtonStyle = (index: number) => {
    const isActive = currentPage === index;
    return {
      bg: isActive ? '1650' : '#4a90e2',
      color: currentPage === index ? 'white' : 'whiteAlpha.800',
      border: currentPage === index ? '2px solid #4a90e2' : '2px solid #4a90e2',
      fontWeight: currentPage === index ? 'bold' : 'normal',
      transition: 'all 0.2s ease',
      _hover: {
        bg: isActive ? '#ffffff' : '#4a90e2',
        color: isActive ? '#0c1650' : '#ffffff',
      },
    };
  };

  return (
    <VStack spacing={4} width="full" height="100vh" bg="#0c1650">
      <Box overflow="hidden" position="relative" width="full" height="100%">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <Box shadow="md">{pages[currentPage]}</Box>
        </motion.div>
      </Box>

      {/* Кнопки навігації */}
      <HStack spacing={3} position="absolute" right="74px" mt={2}>
        <Button onClick={() => handlePageChange(0)} {...getButtonStyle(0)}>
          1
        </Button>
        <Button onClick={() => handlePageChange(1)} {...getButtonStyle(1)}>
          2
        </Button>
        <Button onClick={() => handlePageChange(2)} {...getButtonStyle(2)}>
          3
        </Button>
      </HStack>
    </VStack>
  );
};

export default Projects;
