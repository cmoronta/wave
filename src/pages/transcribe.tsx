import { useContext, useEffect } from "react";
import { Text } from "@chakra-ui/react";
import FileContext from "@/contexts/FileContext";
const FileTranscribe = (): JSX.Element => {
	const file = useContext(FileContext);
	console.log("File from transcribe page: ", file);
	return <Text>Test</Text>;
};

export default FileTranscribe;
