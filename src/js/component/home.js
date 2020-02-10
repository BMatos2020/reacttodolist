import React from "react";
import { Card } from "./card";

//include images into your bundle

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<h1>todos</h1>
			<Card />
		</div>
	);
}
