/** @format */

import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFilters } from "./useFilters";
import { addJdToShowList } from "@/redux/jdToShow.reducer";
import { RootState } from "@/redux/store";
import { IJob } from "@/types";

const useDataToShow = () => {
	const jdList = useSelector((state: RootState) => state?.jdList);
	const jdToShow = useSelector((state: any) => state?.jdToShow);
	const dispatch = useDispatch();
	const router = useRouter();
	const { handleFilter } = useFilters();

	const handleDataToShow = () => {
		if (Object.keys(router?.query).length > 0 && jdList.length > 0) {
			const arr = handleFilter(jdList);
			dispatch(addJdToShowList(arr));
		}

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
