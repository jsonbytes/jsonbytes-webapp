import { Box, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <Box
        height="80vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="2xl" fontWeight="bold">
          yikes!
        </Text>
      </Box>
      <Footer />
    </>
  );
};

export default ErrorPage;
