/** @format */
import { IJob } from "@/types";
import { regularizeWords } from "@/utils/functions";
import { Button } from "@mui/material";
import Image from "next/image";
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
		companyName,
		logoUrl,
	} = props;

	const [isViewMore, setIsViewMore] = React.useState(false);
	return (
		<div className="card_container" key={jdUid}>
			<div className="upper_div">
				<div className="image_name_container">
					<div style={{ borderRadius: "50%" }}>
						<Image
							src={logoUrl}
							alt="clg-logo"
							width={40}
							height={40}
							style={{ borderRadius: "50%" }}
						/>
					</div>
					<div>
						<div className="title">{regularizeWords(companyName)}</div>
						<div>{regularizeWords(jobRole)}</div>
					</div>
				</div>
				<div className="location">{regularizeWords(location)}</div>

				{(maxJdSalary || minJdSalary) && (
					<div className="salary">
						Salary:{" "}
						<span>
							{minJdSalary ?? ""} {minJdSalary && "-"} {maxJdSalary ?? ""}
						</span>
						LPA
					</div>
				)}

				<div
					className="jd_details"
					style={{ overflow: isViewMore ? "auto" : "hidden" }}
				>
					<p>
						{!isViewMore
							? jobDetailsFromCompany.slice(0, 250)
							: jobDetailsFromCompany}
					</p>
					<span onClick={() => setIsViewMore(!isViewMore)}>
						{isViewMore ? "View Less" : "View More"}
					</span>
				</div>
			</div>

			<div className="lower_div">
				{(minExp || maxExp) && (
					<div>
						Experience: {minExp ?? ""} {minExp && "-"} {maxExp ?? ""} years
					</div>
				)}
				<div style={{ width: "100%" }}>
					<Button
						variant="contained"
						style={{ backgroundColor: "#63d96c", width: "100%" }}
					>
						Apply
					</Button>
				</div>
			</div>
		</div>
	);
}
