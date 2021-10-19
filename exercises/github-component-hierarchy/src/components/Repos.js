import React from "react";
import RepoList from "./RepoList";

const Repos = () => {
	return (
		<div>
			<div
				style={{
					textAlign: "center",
					justifyContent: "center",
					color: " #C9D1D9",
					fontWeight: "600"
				}}
			>
				<h2>Pinned Repositories</h2>
			</div>
			<RepoList />
		</div>
	);
};

export default Repos;
