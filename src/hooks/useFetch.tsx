/** @format */

import { IJob } from "@/types";
import * as React from "react";
import { useFilters } from "./useFilters";
import { useDispatch } from "react-redux";
import { addJdList } from "@/redux/jdListReducer";
import { addJdToShowList } from "@/redux/jdToShow.reducer";

export default function useFetchJobData() {
	const [jobsList, setJobsList] = React.useState<IJob[] | []>([]);
	const [loading, setLoading] = React.useState<boolean>(false);
	const [error, setError] = React.useState<string>("");
	const dispatch = useDispatch();

	const fetchJobs = (limit?: number, offset?: number) => {
		setError("");
		setLoading(true);
		const body = JSON.stringify({
			limit: limit ?? 9,
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
				dispatch(addJdList(result?.jdList));
				setLoading(false);
			})
			.catch((error) => {
				console.log("error---", error);
				setError("Something went wrong while fetching the job.");
				setLoading(false);
			});
	};

	return {
		fetchJobs,
		jdData: jobsList,
		jdLoading: loading,
		jdError: error,
	};
}
