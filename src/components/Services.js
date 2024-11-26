import Title from './Title.js'
import { serviceList } from '../data.js'

const Services = () => {
    return (
        <section className="section services" id="services">
            <Title title="our" subTitle="services" />

            <div className="section-center services-center">
                {serviceList.map((services) => {
                    return (
                        <article className="service" key={services.id}>
                            <span className="service-icon">
                                <i className={services.icon}></i>
                            </span>
                            <div className="service-info">
                                <h4 className="service-title">
                                    {services.title}
                                </h4>
                                <p className="service-text">{services.text}</p>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
export default Services
