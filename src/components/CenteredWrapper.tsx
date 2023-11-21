import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CenteredWrapper = ({ children }: Props) => {
  return (
    <Box
      height="80vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Box>
  );
};

export default CenteredWrapper;
