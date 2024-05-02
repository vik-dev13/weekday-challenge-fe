/** @format */

import * as React from "react";

// console.log("offset----", ref?.current?.offsetHeight);
// console.log("verticalScroll----", ref?.current?.scrollTop);
// console.log("innerheight----", ref?.current?.scrollHeight);
// console.log(
//     "totalScrollHeight ----",
//     ref?.current?.offsetHeight + ref?.current?.scrollTop,
// );

export default function useScroll(
	ref: React.RefObject<HTMLDivElement>,
	callback: () => void,
) {
	const handleScroll = () => {
		if (ref && ref?.current) {
			if (
				ref?.current?.offsetHeight + ref?.current?.scrollTop >=
				ref?.current?.scrollHeight
			) {
				console.log("fetching--------");
				callback();
			}
		}
	};

	React.useEffect(() => {
		if (ref && ref?.current) {
			ref?.current?.addEventListener("scroll", handleScroll);
		}
		return () => {
			ref?.current?.removeEventListener("scroll", handleScroll);
		};
	}, [ref]);

	return null;
}
