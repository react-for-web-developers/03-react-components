import React from "react";

const Bio = () => {
	return (
		<div style={{ display: "flex", margin: "30px" }}>
			<div
				style={{
					border: "1px solid  #C9D1D9",
					height: "230px",
					width: "230px",
					borderRadius: "50%",
					textAlign: "center",
					justifyContent: "center",
					margin: "10px",
					marginRight: "20px",
					color: "#C9D1D9"
				}}
			>
				<p
					style={{
						marginTop: "100px"
					}}
				>
					Profile picture
				</p>
			</div>
			<div
				style={{
					width: "75vw",
					color: "#C9D1D9",
					border: "1px solid #C9D1D9"
				}}
			>
				<div style={{ margin: "10px", padding: "10px", fontWeight: "600" }}>
					<h2 style={{ margin: "10px" }}>Introduction</h2>
					<p style={{ margin: "10px" }}>Hi there, I'm Vaibhav 🙂</p>
					<p style={{ margin: "10px" }}> I am a Full Stack Developer! 😊</p>
				</div>
			</div>
		</div>
	);
};

export default Bio;
