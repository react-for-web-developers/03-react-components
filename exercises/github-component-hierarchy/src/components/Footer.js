import React, { useState } from "react";

const Footer = () => {
	const [state] = useState([
		{
			title: "Terms"
		},
		{
			title: "Privacy"
		},
		{
			title: "Security"
		},
		{
			title: "Stats"
		},
		{
			title: "Docs"
		},
		{
			title: "Contact"
		},
		{
			title: "Pricing"
		},
		{
			title: "API"
		},
		{
			title: "Training"
		}
	]);

	return (
		<div
			style={{
				display: "flex",
				borderTop: "1px solid #C9D1D9",
				margin: "30px auto",
				width: "90vw",
				justifyContent: "center"
			}}
		>
			{state.map((item) => (
				<p
					style={{
						color: "#58A6FF",
						marginRight: "40px",
						marginTop: "20px",
						fontWeight: "600"
					}}
					key={item.title}
				>
					{item.title}
				</p>
			))}
		</div>
	);
};

export default Footer;
