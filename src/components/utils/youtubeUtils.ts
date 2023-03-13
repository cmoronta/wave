export const youTubeRegex: RegExp =
	/^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;

export const matchYouTubeURL = (url: string): boolean => {
	const link = url.match(youTubeRegex);
	if (link) {
		return true;
	}
	return false;
};

export const getYouTubeID = (url: string): string | Error => {
	if (matchYouTubeURL(url)) {
		const link = url.match(youTubeRegex)?.[1];
		return link ?? Error("Invalid URL");
	} else {
		return Error("Invalid URL");
	}
};
