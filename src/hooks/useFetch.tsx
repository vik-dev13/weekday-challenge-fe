/** @format */

import { IJob } from "@/types";
import * as React from "react";

export default function useFetchJobData() {
	const [jobsList, setJobsList] = React.useState<IJob[] | []>([]);
	const [loading, setLoading] = React.useState<boolean>(false);
	const [error, setError] = React.useState<string>("");

	const fetchJobs = (limit?: number, offset?: number) => {
		setError("");
		setLoading(true);
		const body = JSON.stringify({
			limit: limit ?? 10,
			offset: offset ?? 0,
		});
		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		const requestOptions = {
			method: "POST",
			headers: myHeaders,
			body,
		};

		fetch(
			"https://api.weekday.technology/adhoc/getSampleJdJSON",
			requestOptions,
		)
			.then((response) => response.json())
			.then((result: { jdList: IJob[]; totalCount: number }) => {
				setJobsList(result?.jdList);
				setLoading(false);
			})
			.catch((error) => {
				console.log("error---", error);
				setError("Something went wrong while fetching the job.");
				setLoading(false);
			});
	};

	React.useEffect(() => {
		fetchJobs();
	}, []);

	return {
		fetchJobs,
		jdData: jobsList,
		jdLoading: loading,
		jdError: error,
	};
}
