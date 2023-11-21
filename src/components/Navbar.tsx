import { HStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import ColorModeSwitch from "./ColorModeSwitch";
import { CALL_TO_ACTION } from "./constants";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <HStack px={10} justifyContent="space-between" height="10vh">
      <HStack>
        <TypeAnimation
          sequence={CALL_TO_ACTION}
          wrapper="span"
          speed={30}
          style={{ fontSize: "4xl", fontWeight: "bold" }}
          repeat={Infinity}
        />
        <Text
          fontFamily={"monospace"}
          onClick={() => {
            navigate("/");
          }}
        />
      </HStack>
      <HStack>
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default Navbar;
