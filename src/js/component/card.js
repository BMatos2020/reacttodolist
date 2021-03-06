import React, { useState } from "react";
import { Delete } from "./delete";

export function Card() {
	const [list, setList] = useState([]);
	const [content, setContent] = useState();

	return (
		<div className="card d-flex mx-auto" style={{ width: "32rem" }}>
			<div className="card-body">
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<input
							placeholder="No tasks, add a task"
							value={content}
							onChange={e => setContent(e.target.value)}
							onKeyPress={e => {
								if (e.key === "Enter") {
									setList(list.concat(content));
									setContent("");
								}
							}}
						/>
						{list.map((item, index) => {
							return <div key={index}>{item}</div>;
						})}
					</li>
				</ul>
			</div>
			<Delete />
		</div>
	);
}
