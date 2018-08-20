import React, {Component} from "react";

export default class ArcBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			"arc": props.arc
		};
	}
	render() {
		return (
			<div className="arc-box">
				<img className="image" src={"/assets/arc_" + i.id + ".png"} />
			</div>
		);
	}
}
