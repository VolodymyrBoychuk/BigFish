import { NavLink } from 'react-router-dom';
import { Button, Flex, HStack, Link, Text } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <Flex
      position="sticky"
      top="0"
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
        <HStack spacing="36px" fontSize="15px" fontWeight="medium" color="#d7dde4">
          <Link
            opacity={0.8}
            fontWeight={'medium'}
            fontFamily={'Public_Sans-Medium'}
            cursor="pointer"
            _hover={{ opacity: 1 }}
            as={NavLink}
            to="/"
            _activeLink={{ fontWeight: 'bold' }}
          >
            Home
          </Link>
          <Link
            opacity={0.8}
            fontWeight={'medium'}
            fontFamily={'Public_Sans-Medium'}
            cursor="pointer"
            _hover={{ opacity: 1 }}
            as={NavLink}
            to="/what-we-do"
            _activeLink={{ fontWeight: 'bold' }}
          >
            What We Do
          </Link>
          <Link
            opacity={0.8}
            fontWeight={'medium'}
            fontFamily={'Public_Sans-Medium'}
            cursor="pointer"
            _hover={{ opacity: 1 }}
            as={NavLink}
            to="/about-us"
            _activeLink={{ fontWeight: 'bold' }}
          >
            About Us
          </Link>
          <Link
            opacity={0.8}
            fontWeight={'medium'}
            fontFamily={'Public_Sans-Medium'}
            cursor="pointer"
            _hover={{ opacity: 1 }}
            as={NavLink}
            to="/focus-areas"
            _activeLink={{ fontWeight: 'bold' }}
          >
            Focus Areas
          </Link>
          <Link
            opacity={0.8}
            fontWeight={'medium'}
            fontFamily={'Public_Sans-Medium'}
            cursor="pointer"
            _hover={{ opacity: 1 }}
            as={NavLink}
            to="/technology"
            _activeLink={{ fontWeight: 'bold' }}
          >
            Technology
          </Link>
          <Link
            opacity={0.8}
            fontWeight={'medium'}
            fontFamily={'Public_Sans-Medium'}
            cursor="pointer"
            _hover={{ opacity: 1 }}
            as={NavLink}
            to="/projects"
            _activeLink={{ fontWeight: 'bold' }}
          >
            Projects
          </Link>
          <Link
            opacity={0.8}
            fontWeight={'medium'}
            fontFamily={'Public_Sans-Medium'}
            cursor="pointer"
            _hover={{ opacity: 1 }}
            as={NavLink}
            to="/blog"
            _activeLink={{ fontWeight: 'bold' }}
          >
            Blog
          </Link>
          <Link
            opacity={0.8}
            fontWeight={'medium'}
            fontFamily={'Public_Sans-Medium'}
            cursor="pointer"
            _hover={{ opacity: 1 }}
            as={NavLink}
            to="/contacts"
            _activeLink={{ fontWeight: 'bold' }}
          >
            Contacts
          </Link>
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

    // <Box bg="teal.500" px={4} py={2} color="white">
    //     <Flex gap={4}>
    //     <Link as={NavLink} to="/" _hover={{ textDecoration: 'underline' }} _activeLink={{ fontWeight: 'bold' }}>
    //         Home
    //     </Link>
    //     <Link as={NavLink} to="/about" _hover={{ textDecoration: 'underline' }} _activeLink={{ fontWeight: 'bold' }}>
    //         About
    //     </Link>
    //     <Link as={NavLink} to="/contact" _hover={{ textDecoration: 'underline' }} _activeLink={{ fontWeight: 'bold' }}>
    //         Contact
    //     </Link>
    //     </Flex>
    // </Box>
  );
};

export default NavBar;
