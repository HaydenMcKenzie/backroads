import Title from './Title.js'
import { tourList } from '../data.js'

const Tours = () => {
    return (
        <section className="section" id="tours">
            <Title title="featured" subTitle="tours" />

            <div className="section-center featured-center">
                {tourList.map((tour) => {
                    return (
                        <article className="tour-card">
                            <div className="tour-img-container">
                                <img
                                    src={tour.img}
                                    className="tour-img"
                                    alt=""
                                />
                                <p className="tour-date">{tour.date}</p>
                            </div>
                            <div className="tour-info">
                                <div className="tour-title">
                                    <h4>{tour.title}</h4>
                                </div>
                                <p>{tour.text}</p>
                                <div className="tour-footer">
                                    <p>
                                        <span>
                                            <i className={tour.icon}></i>
                                        </span>{' '}
                                        {tour.location}
                                    </p>
                                    <p>{tour.duration}</p>
                                    <p>{tour.price}</p>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
export default Tours
