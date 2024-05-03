/** @format */

import Filters from "@/components/Filters";
import JobCard from "@/components/JDCard";
import useFetchJobData from "@/hooks/useFetch";
import { useFilters } from "@/hooks/useFilters";
import useScroll from "@/hooks/useScroll";
import { IJob } from "@/types";
import { LIMIT } from "@/utils/constants";
import { useRouter } from "next/router";
import { createRef, useEffect, useState } from "react";

export default function Home() {
	const divRef = createRef<HTMLDivElement>();
	const [dataToShow, setDataToShow] = useState<IJob[] | []>([]);
	const [offSet, setOffSet] = useState<number>(0);
	const { fetchJobs, jdData, jdLoading } = useFetchJobData();
	const { handleFilter } = useFilters();

	const router = useRouter();

	useScroll(divRef, () => {
		const newOffSet = offSet + LIMIT;
		setOffSet(newOffSet);
		fetchJobs(10, newOffSet);
	});

	useEffect(() => {
		if (jdData?.length > 0) {
			const arr = [...dataToShow, ...jdData];
			setDataToShow([...arr]);
		}
	}, [jdData]);

	useEffect(() => {
		fetchJobs();
	}, []);

	useEffect(() => {
		if (Object.keys(router?.query) && dataToShow.length > 0) {
			const arr = handleFilter(dataToShow);
			setDataToShow([...arr]);
		}
	}, [router?.query]);

	if (dataToShow?.length === 0 && jdLoading) return <div> Loading....</div>;

	return (
		<>
			<div className="body_container">
				<Filters />
				{!jdLoading && dataToShow.length === 0 && <div>No jobs to show</div>}
				{dataToShow && (
					<div className="jobPosts_container" ref={divRef}>
						{dataToShow?.map((jd) => (
							<JobCard {...jd} />
						))}
						{jdLoading && <div className="loading_container">Loading.....</div>}
					</div>
				)}
			</div>
		</>
	);
}
