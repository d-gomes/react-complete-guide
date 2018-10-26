import React from 'react'
import './Person.css'

const person = (props) => {
	return (
		<div className="Person">
			<p onClick={props.click}> 
				My Name is {props.name} and I am {props.age} years old !
			</p>
			<p>
				{props.children}
			</p>
			<input typr="text" onChange={props.changed} value={props.value}/>
		</div>
	)
};

export default person;