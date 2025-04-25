import { Link as ChakraLink } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { ReactNode } from 'react';

interface CustomNavLinkProps {
  to: string;
  children: ReactNode;
}

const CustomNavLink = ({ to, children }: CustomNavLinkProps) => {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <ChakraLink
          opacity={0.8}
          cursor="pointer"
          _hover={{ opacity: 1 }}
          fontWeight={isActive ? 'bold' : 'normal'}
          color={isActive ? '#ffffff' : '#d7dde4'}
          borderBottom={isActive ? '2px solid #4a90e2' : 'none'}
          paddingBottom={isActive ? '2px' : '0'}
          transition="all 0.2s ease"
        >
          {children}
        </ChakraLink>
      )}
    </NavLink>
  );
};

export default CustomNavLink;
