import React, { useState } from "react";

const Tabs = () => {
	const [state] = useState([
		{
			title: "Pull requests"
		},
		{
			title: "Issues"
		},
		{
			title: "Marketplace"
		},
		{
			title: "Explore"
		}
	]);
	return (
		<div style={{ display: "flex", padding: "10px" }}>
			{state.map((item) => (
				<p style={{ marginRight: "20px", fontWeight: "600" }} key={item.title}>
					{item.title}
				</p>
			))}
		</div>
	);
};

export default Tabs;
