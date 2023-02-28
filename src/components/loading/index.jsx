import { React } from 'react';
import Spinner from 'react-bootstrap/Spinner'

import './style.css'

function Loading() {
    return (
        <div className="loading-screen">
            <Spinner animation="border" role="status">
                <span className="visually-hidden"></span>
            </Spinner>
        </div>
    )
}

export default Loading