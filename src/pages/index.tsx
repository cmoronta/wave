import Head from "next/head";
import { Flex, useColorModeValue, Text, VStack } from "@chakra-ui/react";
import { UploadButton } from "@/components/individual/UploadButton";
import { YoutubeLink } from "@/components/individual/YouTubeLink";
import FileContext from "@/contexts/FileContext";
import { useState } from "react";

export default function Home() {
	const [currFile, setCurrFile] = useState<File | null>(null);

	const textGradient = useColorModeValue(
		"linear-gradient(to right, #ee0979, #ff6a00)",
		"linear-gradient(to right, #e96443, #904e95)"
	);
	return (
		<>
			<Head>
				<title>Wave</title>
			</Head>
			<Flex justifyContent="center" fontSize="x-large">
				<VStack spacing="8" align="center" width="lg" height="lg">
					<Text
						fontFamily="anton"
						fontSize="6rem"
						letterSpacing="0.4rem"
						bg={textGradient}
						backgroundClip="text"
					>
						WAVE
					</Text>
					<UploadButton />
					<Text>Or</Text>
					<YoutubeLink />
				</VStack>
			</Flex>
		</>
	);
}
