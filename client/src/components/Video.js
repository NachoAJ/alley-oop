import React from 'react'

const Video = ({ url, width }) => {
	return (
		<video controls width={width}>
			<source src={url} type='video/mp4' />
		</video>
	)
}

export default Video
