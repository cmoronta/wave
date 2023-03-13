import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "@/theme";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta
					name="description"
					content="Web app providing tools to aid in music transcription."
				/>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<ColorModeScript initialColorMode={theme.initialColorMode} />
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
