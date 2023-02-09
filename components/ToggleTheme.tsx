import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react";

import { FaMoon, FaSun } from "react-icons/fa";

type ToggleThemeProps = Omit<IconButtonProps, "aria-label">;

export const ToggleTheme = (props: ToggleThemeProps) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const color = useColorModeValue("black", "white");
  const backgroundColor = useColorModeValue("gray.100", "whiteAlpha.200");
  const hoverBackgroundColor = useColorModeValue("gray.200", "whiteAlpha.300");

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color={color}
      bg={backgroundColor}
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
      _hover={{
        bg: hoverBackgroundColor,
      }}
    />
  );
};
