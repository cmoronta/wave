// Button used to upload an audio file and send to '/transcribe' page
import { Box, Input, Button } from "@chakra-ui/react";
import { useRef } from "react";

export const UploadButton = (): JSX.Element => {
	const inputRef = useRef<HTMLInputElement | null>(null);

	const handleButtonClick = () => {
		inputRef.current?.click();
	};

	const handleFileSelect = () => {
		const selectedFile: File | undefined = inputRef.current?.files?.[0];
		if (selectedFile) {
			const formData = new FormData();
			formData.append("file", selectedFile);
			console.log("Selected file: ", formData);
		} else {
			console.log("Cancelled.");
		}
	};

	return (
		<Box>
			<Input type="file" ref={inputRef} hidden onChange={handleFileSelect} />
			<Button
				type="button"
				borderRadius="16px"
				width={40}
				height={12}
				paddingLeft="16px"
				paddingRight="16px"
				shadow="xl"
				onClick={handleButtonClick}
				_focus={{ boxShadow: "none", shadow: "xl" }}
			>
				Upload
			</Button>
		</Box>
	);
};
