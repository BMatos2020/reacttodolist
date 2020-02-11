import React, { useState } from "react";

export function Card() {
	const [list, setList] = useState([]);
	const [content, setContent] = useState();

	return (
		<div className="card d-flex mx-auto" style={{ width: "32rem" }}>
			<div className="card-body">
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<input
							value={content}
							onChange={e => setContent(e.target.value)}
							onKeyPress={e => {
								if (e.key === "Enter") {
									setList(list.concat(content));
									setContent("Add your tasks");
								}
							}}
						/>
						{list.map((item, index) => {
							return <div key={index}>{item}</div>;
						})}
					</li>
					<li className="list-group-item" />
					<li className="list-group-item" />
				</ul>
			</div>
		</div>
	);
}
