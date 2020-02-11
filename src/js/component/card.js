import React from "react";

export function Card() {
	return (
		<div className="card d-flex mx-auto" style={{ width: "18rem" }}>
			<div className="card-body">
				<ul className="list-group list-group-flush">
					<li className="list-group-item">Cras justo odio</li>
					<li className="list-group-item">Dapibus ac facilisis in</li>
					<li className="list-group-item">Vestibulum at eros</li>
				</ul>
			</div>
		</div>
	);
}
