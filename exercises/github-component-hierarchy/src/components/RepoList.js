import React, { useState } from "react";

const RepoList = () => {
	const [state] = useState([
		{
			title: "Repo 1"
		},
		{
			title: "Repo 2"
		},
		{
			title: "Repo 3"
		},
		{
			title: "Repo 4"
		},
		{
			title: "Repo 5"
		},
		{
			title: "Repo 6"
		}
	]);

	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(3, 1fr)",
				gap: "20px",
				color: " #C9D1D9",
				width: "70vw",
				margin: "20px auto"
			}}
		>
			{state.map((item) => (
				<p
					style={{
						fontWeight: "600",
						border: "1px solid #C9D1D9",
						color: "#58A6FF",
						padding: "70px"
					}}
					key={item.title}
				>
					{item.title}
				</p>
			))}
		</div>
	);
};

export default RepoList;
