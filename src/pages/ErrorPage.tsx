import { Box, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <Box
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="2xl" fontWeight="bold">
          yikes!
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
