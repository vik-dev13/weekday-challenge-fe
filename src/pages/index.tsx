/** @format */

import JobCard from "@/components/JDCard";
import useFetchJobData from "@/hooks/useFetch";
import useScroll from "@/hooks/useScroll";
import { IJob } from "@/types";
import { LIMIT } from "@/utils/constants";
import { createRef, useEffect, useState } from "react";

export default function Home() {
	const divRef = createRef<HTMLDivElement>();
	const [dataToShow, setDataToShow] = useState<IJob[] | []>([]);
	const [offSet, setOffSet] = useState<number>(0);
	const { fetchJobs, jdData, jdLoading } = useFetchJobData();

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

	if (dataToShow?.length === 0 && jdLoading) return <div> Loading....</div>;

	return (
		<div
			style={{
				height: "100vh",
				width: "100vw",
				border: "1px solid black",
			}}
		>
			{dataToShow && (
				<div
					ref={divRef}
					style={{
						maxHeight: "500px",
						overflowY: "auto",
						margin: "5% 20%",
						padding: "2%",
						display: "flex",
						flexDirection: "column",
						gap: "1rem",
					}}
				>
					{dataToShow?.map((jd) => (
						<JobCard {...jd} />
					))}
					{jdLoading && <div style={{ marginTop: "1rem" }}>Loading.....</div>}
				</div>
			)}
		</div>
	);
}
