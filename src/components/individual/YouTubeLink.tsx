import {
	Input,
	Button,
	InputGroup,
	InputRightElement,
	FormControl,
	FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";
import { Formik, Field, FormikHelpers } from "formik";
import { matchYouTubeURL, getYouTubeID } from "../utils/youtubeUtils";

interface FormValues {
	link: string;
}

export const YoutubeLink = (): JSX.Element => {
	const handleSubmit = async (
		values: FormValues,
		actions: FormikHelpers<FormValues>
	) => {
		console.log(values);
	};

	const validateLink = (value: string) => {
		console.log("value: ", value);
		let error;
		if (!value) {
			error = "This is required.";
		} else if (!matchYouTubeURL(value)) {
			error = "Invalid YouTube Link";
		}
		return error;
	};

	return (
		<Formik
			initialValues={{ link: "" }}
			onSubmit={handleSubmit}
			validateOnBlur={false}
			validateOnChange={false}
		>
			{({ handleSubmit, errors, touched }) => (
				<form onSubmit={handleSubmit}>
					<FormControl isInvalid={!!errors.link && touched.link}>
						<InputGroup width="lg">
							<Field
								as={Input}
								id="link"
								name="link"
								type="text"
								pr="4.5rem"
								placeholder="YouTube Link"
								validate={validateLink}
							/>
							<InputRightElement width="4.5rem">
								<Button h="1.75rem" mr="8px" size="sm" type="submit">
									Submit
								</Button>
							</InputRightElement>
						</InputGroup>
						<FormErrorMessage>{errors.link}</FormErrorMessage>
					</FormControl>
				</form>
			)}
		</Formik>
	);
};
