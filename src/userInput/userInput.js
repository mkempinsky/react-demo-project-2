import React from 'react';

const userInput = (props) => {
	const style = {
		border: '2px solid purple'
	}
	return (
		<div className="UserInput">
			<p>Change User Name</p>
			<input style={style} type="text" onClick={props.clicked} onChange={props.changed} value={props.userName} placeholder={props.userName}/>
		</div>
	);
}

export default userInput;