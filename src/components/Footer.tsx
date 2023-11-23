import { HStack, IconButton } from "@chakra-ui/react";
import { FaGithub, FaMedium, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    { icon: <FaMedium />, link: "https://blog.jsonbytes.com/" },
    { icon: <FaSquareXTwitter />, link: "https://twitter.com/jsonbytes" },
    { icon: <FaGithub />, link: "https://github.com/jsonbytes" },
  ];

  return (
    <HStack px={4} justifyContent="center" height="10vh">
      {socialLinks.map((social, index) => (
        <IconButton
          key={index}
          aria-label={`Link to ${social.link}`}
          icon={social.icon}
          onClick={() => window.open(social.link, "_blank")}
        />
      ))}
    </HStack>
  );
};

export default Footer;
