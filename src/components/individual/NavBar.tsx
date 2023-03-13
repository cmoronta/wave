import { Box, BoxProps, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import ColorModeSwitcher from "../individual/ColorModeSwitcher";
import HomeButton from "./HomeButton";

interface NavBarProps extends BoxProps {
  children?: ReactNode;
}

export const NavBar = ({ children, ...rest }: NavBarProps) => {
  return (
    <Box mb={8} px={4} pt={2} width="100vw">
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HomeButton />
        <ColorModeSwitcher />
      </Flex>
    </Box>
  );
};
