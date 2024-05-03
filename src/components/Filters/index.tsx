/** @format */

import { Button, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";

export interface IFiltersProps {}

export default function Filters(props: IFiltersProps) {
	const router = useRouter();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let { name, value } = e.target;
		const url = {
			pathname: router.pathname,
			query: { ...router.query, [name]: value },
		};

		router.push(url, undefined, { shallow: true });
	};

	const handleClearAll = () => {
		const { pathname } = router;
		console.log("pathname---", pathname);
		router.push(pathname);
	};
	return (
		<div className="filters_container">
			<div style={{ minWidth: "20%", border: "1px solid red" }}>
				<InputLabel id="demo-simple-select-label">Min Exp</InputLabel>
				<Select
					id="demo-simple-select"
					label="Min Experience"
					style={{ minWidth: "100%" }}
					name="minExp"
					onChange={(e) =>
						handleChange(e as React.ChangeEvent<HTMLInputElement>)
					}
				>
					{[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
						<MenuItem value={item}>{item}</MenuItem>
					))}
				</Select>
			</div>
			<div style={{ minWidth: "20%", border: "1px solid red" }}>
				<InputLabel id="demo-simple-select-label">Location</InputLabel>
				<Select
					id="demo-simple-select"
					label="Min Experience"
					style={{ minWidth: "100%" }}
					name="location"
					onChange={(e) =>
						handleChange(e as React.ChangeEvent<HTMLInputElement>)
					}
				>
					<MenuItem value={"delhi ncr"}>Delhi Ncr</MenuItem>
					<MenuItem value={"mumbai"}>Mumbai</MenuItem>
					<MenuItem value={"delhi ncr"}>Delhi Ncr</MenuItem>
					<MenuItem value={"chennai"}>Chennai</MenuItem>
				</Select>
			</div>
			<div style={{ minWidth: "20%", border: "1px solid red" }}>
				<InputLabel id="demo-simple-select-label">Type</InputLabel>
				<Select
					id="demo-simple-select"
					label="Min Experience"
					style={{ minWidth: "100%" }}
					name="isRemote"
					onChange={(e) =>
						handleChange(e as React.ChangeEvent<HTMLInputElement>)
					}
				>
					<MenuItem value={"remote"}>Remote</MenuItem>
					<MenuItem value={"onSite"}>On Site</MenuItem>
				</Select>
			</div>
			<div style={{ minWidth: "20%", border: "1px solid red" }}>
				<InputLabel id="demo-simple-select-label">Role</InputLabel>
				<Select
					id="demo-simple-select"
					label="Min Experience"
					style={{ minWidth: "100%" }}
					name="role"
					onChange={(e) =>
						handleChange(e as React.ChangeEvent<HTMLInputElement>)
					}
				>
					<MenuItem value={"frontend"}>Frontend</MenuItem>
					<MenuItem value={"android"}>Android</MenuItem>
					<MenuItem value={"tech lead"}>Tech lead</MenuItem>
					<MenuItem value={"backend"}>Backend</MenuItem>
					<MenuItem value={"ios"}>Ios</MenuItem>
				</Select>
			</div>
			<div>
				<Button variant="contained" onClick={handleClearAll}>
					Clear all
				</Button>
			</div>
		</div>
	);
}
