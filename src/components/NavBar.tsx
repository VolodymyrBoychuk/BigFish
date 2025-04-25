import { Button, Flex, HStack, Text } from '@chakra-ui/react';
import CustomNavLink from './CustomNavLink';

const NavBar: React.FC = () => {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/what-we-do', label: 'What We Do' },
    { to: '/about-us', label: 'About Us' },
    { to: '/focus-areas', label: 'Focus Areas' },
    { to: '/technology', label: 'Technology' },
    { to: '/projects', label: 'Projects' },
    { to: '/blog', label: 'Blog' },
    { to: '/contacts', label: 'Contacts' },
  ];

  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      right="0"
      width={'100%'}
      zIndex="1000"
      bg="#0c1650"
      px="40px"
      py="10px"
      justify="space-between"
      align="center"
    >
      <HStack spacing="50px">
        <Text
          fontSize="28px"
          fontWeight="bold"
          color="#4a90e2"
          fontFamily="Sen-Bold"
          letterSpacing="-1.12px"
        >
          Big Fish
        </Text>
        <HStack spacing="36px" fontSize="15px" fontWeight="500">
          {links.map(({ to, label }) => (
            <CustomNavLink key={to} to={to}>
              {label}
            </CustomNavLink>
          ))}
        </HStack>
      </HStack>
      <Button
        bg="#4a90e2"
        color="white"
        fontSize="16px"
        fontWeight="medium"
        fontFamily="Public_Sans-Medium"
        px="18px"
        py="10px"
        borderRadius="4px"
        _hover={{ bg: '#3a78c2' }}
      >
        Let's talk
      </Button>
    </Flex>
  );
};

export default NavBar;
