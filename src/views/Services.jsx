import React, { useState } from 'react'
import ServiceCard from '../components/ServiceCard'

const Services = () => {

    const [services, setServices] = useState([
        { id: 1, title: 'Service 1' },
        { id: 2, title: 'Service 2' },
        { id: 3, title: 'Service 3' },
        { id: 4, title: 'Service 4' },
    ])


    return (
        <div className="container">
            <div className="row">
                {
                    services.length > 0 &&
                    services.map((service) => {
                        return (
                            <div className="col-md-4" key={service.id}>
                                <ServiceCard id={service.id} url={"/services/"+service.id} title={service.title}/>
                            </div>
                        )
                    })
                }
                {/* <div className="col-md-4">
                    <ServiceCard id={1} url="/services/1" />
                </div>
                <div className="col-md-4">
                    <ServiceCard id={2} url="/services/2" />
                </div>
                <div className="col-md-4">
                    <ServiceCard id={3} url="/services/3" />
                </div> */}
            </div>
        </div>
    )
}

export default Services