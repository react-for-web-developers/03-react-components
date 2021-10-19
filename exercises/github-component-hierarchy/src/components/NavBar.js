import React from "react";
import Search from "./Search";
import Tabs from "./Tabs";

const NavBar = () => {
	return (
		<div
			style={{
				display: "flex",
				backgroundColor: "#161B22",
				color: "#fff",
				textAlign: "center",
				padding: "10px",
				justifyContent: "space-between"
			}}
		>
			<div style={{ display: "flex" }}>
				<h1 style={{ marginRight: "20px", fontWeight: "600" }}>GitHub</h1>
				<Search />
				<Tabs />
			</div>
			<div
				style={{
					display: "flex",
					alignItems: "flex-end",
					justifyContent: "right",
					padding: "10px",
					fontWeight: "600"
				}}
			>
				<p>Create Repository +</p>
			</div>
		</div>
	);
};

export default NavBar;
