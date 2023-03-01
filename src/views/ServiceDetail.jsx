import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'

const ServiceDetail = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <ServiceCard id={id} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <button className="btn btn-warning" onClick={() => navigate(-1)}>Regresar</button>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetail