import React, { Component } from "react";
import { Glyphicon } from "react-bootstrap";

export default class Side extends Component {
	render() {
		return (
			<div className="side">
				<h5 className="pull-right side-toggle" onClick={this.props.toggle}>
					<Glyphicon glyph="triangle-left"/>
				</h5>
				<h2>Links</h2>
				<ul>
					<li><a target="_blank" rel="noopener noreferrer" href="http://forums.arlongpark.net/showthread.php?t=38681">Arlong Park Forums Thread</a></li>
					<li><a target="_blank" rel="noopener noreferrer" href="https://onedrive.live.com/view.aspx?resid=2A9137DBF1112637!37021&amp;ithint=file%2cxlsx&amp;app=Excel&amp;authkey=!ACgbEWtkXaBEMC0">One Pace Excel Chart</a></li>
					<li><a target="_blank" rel="noopener noreferrer" href="http://onepiecetracklist.com">One Piece Track List</a></li>
				</ul>
				<hr />
				<center>
					<iframe src="https://discordapp.com/widget?id=229653982530764800&amp;theme=dark" style={{ border: "none", width: "100%", height: "70%" }}></iframe>
				</center>
			</div>
		);
	}
}
