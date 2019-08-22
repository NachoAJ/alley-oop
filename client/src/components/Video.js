import React from 'react'

const Video = ({ url }) => {
	return (
		<video controls width='400'>
			<source src={url} type='video/mp4' />
		</video>
	)
}

export default Video
