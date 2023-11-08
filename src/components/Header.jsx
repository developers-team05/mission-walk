import React from "react";
import WithSubnavigation from "./NavBar";
import Topbar from "./TopBar";
import Navbar from "./NavBar";

const Header = () => {
  return (
    <>
     <Topbar/>
    {/* <Navbar/> */}
      <WithSubnavigation />
    </>
  );
};

export default Header;
// import { Box, Container, VStack } from "@chakra-ui/react";

// export default function Header() {
//   return (
//     <Box>
//       <WithSubnavigation />
//       <Container maxW="container.lg">
//         <VStack spacing={8} p={4}>
//           {/* Your page content goes here */}
//         </VStack>
//       </Container>
//     </Box>
//   );
// }