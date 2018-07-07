import React from 'react';
import './userOutput.css';

const userOutput = (props) => {
	return (
		<div className="UserOutput">
			<div className="card">
				<p>Ang Lorem Ipsum ay ginagamit na modelo ng industriya ng pagpriprint at pagtytypeset.</p>
				<p className="userName">By: {props.userName}</p>
			</div>
			<div className="card">
				<p>pinamumuka nitong nababasa. Maraming desktop publishing packages at web page editors ang gumagamit na ngayong ng Lorem Ipsum bilang regular na modelo ng nilalaman, at ang pag-search ng 'lorem ipsum' ay.</p>
				<p className="userName">By: {props.userName}</p>
			</div>
		</div>
	);
}

export default userOutput;