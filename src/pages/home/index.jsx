import { React, useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Card from '../../components/card'
import star from '../../img/star.png'
import slide_1 from '../../img/cover-home-slide.png'
import slide_2 from '../../img/cover-home-slide_2.png'
import slide_3 from '../../img/cover-home-slide_3.png'
import testimony from '../../img/testimony-v2.png'
import axios from 'axios'

import './style.css'

function Home() {
	const [vehicle, setVehicle] = useState([])

	const getPopularVehicle = async () => {
		try {
			const { data } = await axios.get(
			`http://localhost:3080/vehicle/popular`
			)
			setVehicle(data.data)
		} catch (error) {
			console.log(error)
		}
	}

  useEffect(() => {
    getPopularVehicle()
  })

  return (
    <div className='App'>
		<Navbar />

		<main>
			<section className="caro">
				<div id="myCarousel" className="carousel slide" data-ride="carousel" >
					<ol className="carousel-indicators">
						<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
						<li data-target="#myCarousel" data-slide-to="1"></li>
						<li data-target="#myCarousel" data-slide-to="2"></li>
					</ol>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img className="d-block w-100" src={slide_1} alt="Slide 1"></img>
							<div class="carousel-caption d-none d-md-block">
								<h5 className='caro-title'>LET'S EXPLORE AND TRAVEL</h5>
								<p>Slide to see our new arrival</p>
							</div>
						</div>
						<div className="carousel-item">
							<img className="d-block w-100" src={slide_2} alt="Slide 2"></img>
							<div class="carousel-caption d-none d-md-block">
								<h5 className='caro-title'>LET'S EXPLORE AND TRAVEL</h5>
								<p>Slide to see our new arrival</p>
							</div>
						</div>
						<div className="carousel-item">
							<img className="d-block w-100" src={slide_3} alt="Slide 3"></img>
							<div class="carousel-caption d-none d-md-block">
								<h5 className='caro-title'>LET'S EXPLORE AND TRAVEL</h5>
								<p>Slide to see our new arrival</p>
							</div>
						</div>
					</div>
					<a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="sr-only">Previous</span>
					</a>
					<a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="sr-only">Next</span>
					</a>
				</div>
			</section>

			<section className="popular-in-town">
				<div className="container">
					<div className="row">
						<div className="col-sm-6">
							<h2 className="title">Popular in Town</h2>
						</div>
						<div className="col-sm-6">
							<div className="d-flex justify-content-end">
								<div className="view-all">
									<p className="text-end fw-bold">
										{'View all '}
										<b>{'>'}</b>
									</p>
								</div>
							 </div>
						</div>
					</div>
					<div className="row">
						{vehicle.map((v, k) => {
							if (k < 4) {
								return (
								<Card
									id={v.vehicle_id}
									picture={`http://localhost:3080/`+v.picture}
									name={v.name}
									location={v.location}
								/>
							)}
						})}
					</div>
				</div>
			</section>

			<section className="testimonials">
				<div className="container">
					<div className="row">
					<div className="col-12">
						<h2 className="title">Testimonials</h2>
					</div>
					<div className="col-sm-6 mx-auto">
						<div className="d-flex justify-content-start">
							<img className="star-rate" src={star} alt="" />
							<img className="star-rate" src={star} alt="" />
							<img className="star-rate" src={star} alt="" />
							<img className="star-rate" src={star} alt="" />
							<img className="star-rate" src={star} alt="" />
						</div>
						<p className="comment">
							”It was the right decision to rent vehicle here, I spent less
							money and enjoy the trip. It was an amazing experience to have
							a ride for wildlife trip!”
						</p>
						<p className="testi-man">Edward Newgate</p>
						<p className="testi-job">Founder Circle</p>
					</div>
					<div className="col-sm-6">
						<div className="d-flex justify-content-end">
							<img className="rounded-4" src={testimony} alt="" />
						</div>
					</div>
					</div>
				</div>
			</section>
		</main>

		<Footer />
	</div>
  )
}

export default Home