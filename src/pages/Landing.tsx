import { Box } from "@chakra-ui/react";
import { useState } from "react";
import CenteredWrapper from "../components/CenteredWrapper";

const me = { username: "jsonbytes" };

const styles = {
  gradientText: {
    background: "-webkit-linear-gradient(left, #ffaa00, #e52e71)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
};

function Landing() {
  const [isJson, setIsJson] = useState(false);
  const text = isJson ? JSON.stringify(me, null, 2) : me.username;

  const handleFormat = () => {
    setIsJson(!isJson);
  };

  return (
    <Box onClick={handleFormat}>
      <CenteredWrapper>
        <Box
          fontSize="2xl"
          fontWeight="bold"
          color="gray.500"
          style={styles.gradientText}
        >
          <pre>{text}</pre>
        </Box>
      </CenteredWrapper>
    </Box>
  );
}

export default Landing;
