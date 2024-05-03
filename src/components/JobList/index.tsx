/** @format */

import useFetchJobData from "@/hooks/useFetch";
import useScroll from "@/hooks/useScroll";
import { LIMIT } from "@/utils/constants";
import * as React from "react";
import JobCard from "../JDCard";
import { useSelector } from "react-redux";
import { IJob } from "@/types";
import { RootState } from "@/redux/store";
import useDataToShow from "@/hooks/useDataToShow";
import { CircularProgress } from "@mui/material";

export interface IJobListProps {}

export default function JobList(props: IJobListProps) {
	const divRef = React.createRef<HTMLDivElement>();
	const { fetchJobs, jdLoading } = useFetchJobData();
	const [offSet, setOffSet] = React.useState<number>(0);
	const jdToShow = useSelector((state: RootState) => state?.jdToShow);

	useDataToShow();

	useScroll(divRef, () => {
		const newOffSet = offSet + LIMIT;
		setOffSet(newOffSet);
		fetchJobs(10, newOffSet);
	});
	React.useEffect(() => {
		fetchJobs();
	}, []);

	if (jdToShow?.length === 0 && jdLoading)
		return (
			<div>
				<CircularProgress />
			</div>
		);
	if (!jdLoading && jdToShow.length === 0) return <div>No jobs to show</div>;
	return (
		<div>
			{jdToShow && (
				<div className="jobPosts_container" ref={divRef}>
					{jdToShow?.map((jd: IJob) => (
						<JobCard {...jd} />
					))}
					{jdLoading && (
						<div className="loading_container">
							<CircularProgress />
						</div>
					)}
				</div>
			)}
		</div>
	);
}
