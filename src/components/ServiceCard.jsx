import React from 'react'
import { FaHtml5 } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ url, id, title }) => {
    return (
        <div className="card my-3">
            <FaHtml5 className="mx-auto mt-5 text-danger" size={64} />
            <div className="card-body text-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to={url} className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
    )
}

export default ServiceCard