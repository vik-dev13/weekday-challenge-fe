/** @format */
import { IJob } from "@/types";
import { Grid } from "@mui/material";
import * as React from "react";

export default function JobCard(props: IJob) {
	const { jdUid, jobRole, jobDetailsFromCompany, location } = props;
	return (
		<Grid
			container
			direction="column"
			className="card_container"
			key={jdUid}
			spacing={3}
		>
			<Grid
				item
				direction="row"
				alignItems={"center"}
				justifyContent={"center"}
			>
				{jobRole}
			</Grid>
			{/* <Grid
				item
				direction="row"
				alignItems={"center"}
				justifyContent={"center"}
			>
				{jobDetailsFromCompany}
			</Grid> */}
			<Grid
				item
				direction="row"
				alignItems={"center"}
				justifyContent={"center"}
			>
				{location}
			</Grid>
		</Grid>
	);
}
