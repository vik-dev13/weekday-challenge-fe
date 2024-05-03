/** @format */

import Filters from "@/components/Filters";
import JobList from "@/components/JobList";

export default function Home() {
	return (
		<>
			<div className="body_container">
				<Filters />
				<JobList />
			</div>
		</>
	);
}
