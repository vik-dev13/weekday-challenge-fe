/** @format */

import { fetchJobs } from "@/apis";
import useFetchJobData from "@/hooks/useFetch";
import { useEffect } from "react";

export default function Home() {
	const { fetchJobs, jdData } = useFetchJobData();

	return <div>Welcome</div>;
}
