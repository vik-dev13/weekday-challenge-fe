/** @format */

import { IJob } from "@/types";
import { useRouter } from "next/router";
import { useState } from "react";

export const useFilters = () => {
	const router = useRouter();

	const filterByMinExp = (jobs: IJob[]): IJob[] => {
		const { minExp } = router.query;
		const arr: IJob[] = jobs.filter((job) => job?.minExp >= Number(minExp));
		return arr;
	};

	const filterByLocation = (jobs: IJob[]): IJob[] => {
		const { location } = router.query;

		const arr: IJob[] = jobs.filter(
			(job) => job?.location === String(location),
		);
		return arr;
	};

	const filterByRemoteOrOnsite = (jobs: IJob[]): IJob[] => {
		const { isRemote } = router.query;
		const arr: IJob[] = jobs.filter((job) => {
			if (isRemote === "remote") {
				return job.location === "remote";
			}
			if (isRemote === "onsite") {
				return job.location !== "remote";
			}
		});
		return arr;
	};

	const filterByRole = (jobs: IJob[]): IJob[] => {
		const { role } = router.query;
		const arr: IJob[] = jobs.filter((job) => job?.jobRole === String(role));
		return arr;
	};

	const handleFilter = (jobs: IJob[]) => {
		const queryArr = Object.keys(router?.query);
		console.log("query==", queryArr);
		if (queryArr.length === 0) return [];
		let jobsArr: IJob[] = [...jobs];

		if (queryArr.includes("minExp")) {
			const filteredJdList = filterByMinExp(jobsArr);
			jobsArr = [...filteredJdList];
		}

		if (queryArr.includes("location")) {
			const filteredJdList = filterByLocation(jobsArr);
			jobsArr = [...filteredJdList];
		}

		if (queryArr.includes("isRemote")) {
			const filteredJdList = filterByRemoteOrOnsite(jobsArr);
			jobsArr = [...filteredJdList];
		}

		if (queryArr.includes("role")) {
			const filteredJdList = filterByRole(jobsArr);
			jobsArr = [...filteredJdList];
		}

		return jobsArr;
	};
	return { handleFilter };
};
