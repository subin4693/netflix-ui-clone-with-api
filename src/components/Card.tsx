import React from 'react'

type Prop = {
	url: string,
}

const Card = ({ url }: Prop) => {
	return (
		<div className="mx-3 min-w-fit">
			<img src={url} className="object-cover w-fit h-fit" />
		</div>
	)
}

export default Card