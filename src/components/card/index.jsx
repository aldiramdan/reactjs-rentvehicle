import { React } from 'react'
import './style.css'

function Card(props) {
	return (
		<div className="col-md-3">
			<div className="card card-popular">
				<img src={props.picture} className="card-img-top card-image" alt="..."></img>
			</div>
			<div className="card-content">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.location}</p>
			</div>
		</div>
	)
}

export default Card