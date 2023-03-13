import Container from "@/components/individual/Container";
import { ChakraProvider, Flex, Text } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Container>
				<Component {...pageProps} />
			</Container>
		</ChakraProvider>
	);
}
