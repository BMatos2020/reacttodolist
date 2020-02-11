import React, { useState } from "react";
// import { Card } from "./card";

//include images into your bundle

//create your first component
export function Home() {
	const [list, setList] = useState([]);
	const [content, setContent] = useState();

	return (
		<>
			<div className="text-center mt-5">
				<h1>todos</h1>
				<input
					onChange={e => setContent(e.target.value)}
					onKeyPress={e => {
						if (e.key === "Enter") {
							setList(list.concat(content));
						}
					}}
				/>
				{list.map((item, index) => {
					return <div key={index}>{item}</div>;
				})}
			</div>
		</>
	);
}
