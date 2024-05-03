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

	const handleFilter = (jobs: IJob[]) => {
		const queryArr = Object.keys(router?.query);
		if (queryArr.length === 0) return [];
		let jobsArr: IJob[] = [];
		// check for minExp
		if (queryArr.includes("minExp")) {
			const jdList = filterByMinExp(jobs);
			jobsArr = [...jobsArr, ...jdList];
		}
		return jobsArr;
	};
	return { handleFilter };
};
