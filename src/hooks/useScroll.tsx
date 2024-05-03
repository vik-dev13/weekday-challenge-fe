/** @format */

import * as React from "react";

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
