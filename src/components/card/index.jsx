import { React } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Card(props) {
	return (
		<div className="col-md-3">
			 <Link to={'/vehicle/detail/' + props.id} className="link-card">
				<div className="card card-popular">
					<img src={props.picture} className="card-img-top card-image" alt="..."></img>
				</div>
				<div className="card-rating">
					<p>{props.rating}</p>
				</div>
				<div className="card-content">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">{props.location}</p>
				</div>
			 </Link>
		</div>
	)
}

export default Card