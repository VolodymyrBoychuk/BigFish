import { Box, Grid, Text, VStack } from '@chakra-ui/react';
import { useState, useRef, useEffect } from 'react';

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
  const [textWidths, setTextWidths] = useState<{ [key: number]: number }>({});

  const textRef = useRef<{ [key: number]: HTMLElement | null }>({});

  useEffect(() => {
    const newWidths: { [key: number]: number } = {};
    items.forEach((item) => {
      if (textRef.current[item.id]) {
        newWidths[item.id] = textRef.current[item.id]!.offsetWidth;
      }
    });
    setTextWidths(newWidths);
  }, [items, selectedItem]);

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
              h="50px"
              w="332px"
              pt={3}
              overflow="hidden"
              position="relative"
              fontWeight={selectedItem?.id === item.id ? 'bold' : 'normal'}
              bg={selectedItem?.id === item.id ? '#4A90E2' : 'transparent'}
            >
              <Box
                as="span"
                ref={(el: any) => {
                  textRef.current[item.id] = el;
                }}
                display="inline-block"
                transition="transform 0.3s ease-in-out"
                transform={
                  selectedItem?.id === item.id
                    ? `translateX(${318 - textWidths[item.id] || 0}px)`
                    : 'translateX(0)'
                }
              >
                {item.title}
              </Box>
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
