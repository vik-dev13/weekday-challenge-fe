/** @format */

export const regularizeWords = (word: string) => {
	let wArr = word.split(" ");
	const wordArr = wArr.map((w) => w.charAt(0).toUpperCase() + w.slice(1));
	const backToString = wordArr.join(" ");
	return backToString;
};
