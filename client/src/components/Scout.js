import React from 'react'

const Scout = props => {
	return (
		<div className='container'>
			<h1>Soy un perfil de usuario Entrenador</h1>
			<p>{props.user.username}</p>
		</div>
	)
}

export default Scout
