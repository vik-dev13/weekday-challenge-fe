/** @format */
export const fetchJobs = async <T>(
	limit: number,
	offset?: number,
): Promise<T> => {
	const body = JSON.stringify({
		limit: 10,
		offset: 0,
	});
	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	const requestOptions = {
		method: "POST",
		headers: myHeaders,
		body,
	};

	return new Promise((res, rej) => {});
};
