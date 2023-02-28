import { React } from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Loading from '../../components/loading'

import './style.css'

function History() {

	return (
		<div className='App'>
			<Navbar />

			<main>
				<section>
					<Loading />
				</section>
			</main>

			<Footer />
		</div>
	)
}

export default History