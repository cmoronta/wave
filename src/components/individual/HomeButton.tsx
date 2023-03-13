import { IconButton, Link } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import NextLink from "next/link";

const HomeButton = () => {
	return (
		<Link as={NextLink} href="/">
			<IconButton
				size="md"
				fontSize="lg"
				aria-label={`home-button`}
				color="current"
				marginLeft="2"
				icon={<FaHome />}
			/>
		</Link>
	);
};

export default HomeButton;
