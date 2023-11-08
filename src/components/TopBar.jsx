import {
    Box,
    Flex,
    Text,
    HStack,
    Icon,
    IconButton,
    Spacer,
    useColorModeValue,
    useBreakpointValue,
  } from "@chakra-ui/react";
  import {
    FaClock,
    FaEnvelopeOpen,
    FaPhoneAlt,
  } from "react-icons/fa";
  
  const Topbar = () => {
    const isMobile = useBreakpointValue({ base: true, lg: false });
  
    return (
      <Box display={isMobile ? "none" : "block"} bg={useColorModeValue("light", "gray.800")} py={2} px={4} borderBottom={1} borderStyle="solid" borderColor={useColorModeValue("gray.200", "gray.900")}>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex align="center">
            <HStack spacing={2} align="center">
              <Icon as={FaClock} color="blue.500" />
              <Text fontSize="sm">
                Opening Hours: Mon - Sat : 8.00 am - 8.00 pm, Sunday Closed
              </Text>
            </HStack>
          </Flex>
  
          <Flex align="center">
            <HStack spacing={4}>
              <HStack spacing={2}>
                <Icon as={FaEnvelopeOpen} />
                <Text>tt@tt.in</Text>
              </HStack>
              <HStack spacing={2}>
                <Icon as={FaPhoneAlt} />
                <Text>+91 8888888888</Text>
              </HStack>
            </HStack>
          </Flex>
        </Flex>
      </Box>
    );
  };
  
  export default Topbar;
  