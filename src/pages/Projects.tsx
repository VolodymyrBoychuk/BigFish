import { useEffect, useState } from 'react';
import { Box, Button, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import PageOne from './ProjectsPages/PageOne';
import PageTwo from './ProjectsPages/PageTwo';
import PageThree from './ProjectsPages/PageThree';

const Projects = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [autoChange, setAutoChange] = useState<boolean>(true);

  // Контент для кожної "сторінки"
  const pages = [<PageOne />, <PageTwo />, <PageThree />];

  // Використовуємо кастомний хук для автоматичної зміни сторінок
  useEffect(() => {
    const interval = setInterval(() => {
      if (autoChange) {
        setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
      }
    }, 3000); // кожні 3 секунди змінюється сторінка

    return () => clearInterval(interval); // Очищення інтервалу при демонтажі компонента
  }, [autoChange]);

  // Функція для зупинки автоматичного переходу
  const toggleAutoChange = () => {
    setAutoChange(false);
  };

  return (
    <VStack spacing={4} width={'full'} height="100vh" bg="#0c1650">
      <Box overflow="hidden" position={'relative'} width="full" height="100%">
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

      <Button
        bg="#4a90e2"
        position={'absolute'}
        right="74px"
        color={'white'}
        top={20}
        onClick={() => {
          setCurrentPage(2);
          toggleAutoChange();
        }}
        mt={2}
      >
        3
      </Button>
      <Button
        bg="#4a90e2"
        position={'absolute'}
        right="120px"
        color={'white'}
        top={20}
        onClick={() => {
          setCurrentPage(1);
          toggleAutoChange();
        }}
        mt={2}
      >
        2
      </Button>
      <Button
        bg="#4a90e2"
        position={'absolute'}
        right="165px"
        color={'white'}
        top={20}
        onClick={() => {
          setCurrentPage(0);
          toggleAutoChange();
        }}
        mt={2}
      >
        1
      </Button>
    </VStack>
  );
};

export default Projects;
