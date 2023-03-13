import { ReactNode } from "react";
import { Flex, FlexProps } from "@chakra-ui/react";
import { NavBar } from "./NavBar";

interface ContainerProps extends FlexProps {
	children: ReactNode;
}

export const Container = ({ children, ...rest }: ContainerProps) => {
	return (
		<Flex
			direction="column"
			alignItems="center"
			justifyContent="flex-start"
			width="100vw"
			height="100vh"
			{...rest}
		>
			<NavBar />
			{children}
		</Flex>
	);
};

export default Container;
