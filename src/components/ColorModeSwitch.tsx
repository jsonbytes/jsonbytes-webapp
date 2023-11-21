import { HStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      {colorMode === "dark" ? (
        <IconButton
          aria-label="Light Mode"
          icon={<FaSun />}
          size="lg"
          onClick={toggleColorMode}
        />
      ) : (
        <IconButton
          aria-label="Dark Mode"
          icon={<FaMoon />}
          size="lg"
          onClick={toggleColorMode}
        />
      )}
    </HStack>
  );
};

export default ColorModeSwitch;
