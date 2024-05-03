/** @format */

import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFilters } from "./useFilters";
import { addJdToShowList } from "@/redux/jdToShow.reducer";
import { RootState } from "@/redux/store";

// this hook is used to filter out jobs from list of jobs fetch
// also handle filtering of data once query string is changed

const useDataToShow = () => {
	const jdList = useSelector((state: RootState) => state?.jdList);
	const dispatch = useDispatch();
	const router = useRouter();
	const { handleFilter } = useFilters();

	const handleDataToShow = () => {
		// handle filtering of data based on query params
		if (Object.keys(router?.query).length > 0 && jdList.length > 0) {
			const arr = handleFilter(jdList);
			dispatch(addJdToShowList(arr));
		}
		// once data is fetch for first time, it is then saved to data to show reducer to render job cards on page
		if (Object.keys(router?.query).length === 0) {
			dispatch(addJdToShowList(jdList));
		}
	};

	useEffect(() => {
		handleDataToShow();
	}, [router?.query, jdList]);

	return { handleDataToShow };
};

export default useDataToShow;
