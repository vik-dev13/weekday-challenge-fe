/** @format */
import { IJob } from "@/types";
import * as React from "react";

export default function JobCard(props: IJob) {
	const {
		jdUid,
		jobRole,
		jobDetailsFromCompany,
		location,
		maxJdSalary,
		minJdSalary,
		minExp,
		maxExp,
	} = props;
	return (
		<div className="card_container" key={jdUid}>
			<div className="title">{jobRole}</div>
			<div>{location}</div>

			{(maxJdSalary || minJdSalary) && (
				<div>
					Salary: {minJdSalary ?? ""} {minJdSalary && "-"} {maxJdSalary ?? ""}{" "}
					LPA
				</div>
			)}

			<div className="jd_details">
				<p>{jobDetailsFromCompany}</p>
			</div>

			{(minExp || maxExp) && (
				<div>
					Experience: {minExp ?? ""} {minExp && "-"} {maxExp ?? ""} years
				</div>
			)}
		</div>
	);
}
