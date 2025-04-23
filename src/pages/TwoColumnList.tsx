import { Box, Grid, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';

type Item = {
  id: number;
  title: string;
  content: string;
};

type TwoColumnListProps = {
  items: Item[];
};

const TwoColumnList = ({ items }: TwoColumnListProps) => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(items[0]);

  return (
    <Grid templateColumns={{ base: '1fr', md: '332px 411px' }} gap={12} alignItems="start">
      <Box>
        <VStack align="end" spacing={3}>
          {items.map((item) => (
            <Text
              fontSize="lg"
              color="white"
              key={item.id}
              cursor="pointer"
              onClick={() => setSelectedItem(item)}
              h={'50px'}
              w="332px"
              p={2}
              alignContent={'center'}
              textAlign={selectedItem?.id === item.id ? 'right' : 'left'}
              fontWeight={selectedItem?.id === item.id ? 'bold' : 'normal'}
              bg={selectedItem?.id === item.id ? '#4A90E2' : 'transparent'}
            >
              {item.title}
            </Text>
          ))}
        </VStack>
      </Box>
      {selectedItem ? (
        <>
          <Text fontSize="lg" color="whiteAlpha.800" lineHeight="1.8">
            {selectedItem.content}
          </Text>
        </>
      ) : (
        <Text>Ops...</Text>
      )}
    </Grid>
  );
};

export default TwoColumnList;
