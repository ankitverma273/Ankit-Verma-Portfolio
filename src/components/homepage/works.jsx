import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./organisation.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Bridge HealthCare Pvt. Ltd.</div>
							<div className="work-subtitle">
								Android Developer Intern
							</div>
							<div className="work-duration">December, 2023 - April, 2024</div>
						</div>

						<div className="work">
							<img
								src="./organisation.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">LookOver.ai</div>
							<div className="work-subtitle">
								SDE & FinOps Intern
							</div>
							<div className="work-duration">May, 2023 - July, 2023</div>
						</div>

						<div className="work">
							<img
								src="./organisation.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Lynks Studio</div>
							<div className="work-subtitle">
								Android Developer Intern
							</div>
							<div className="work-duration">Sept, 2021 - Jan, 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
