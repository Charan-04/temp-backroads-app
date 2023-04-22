import Title from "./Title.js";
import {tours} from "../data.js"
const Tour = () => {
  return (
    <div>
      <section className="section" id="tours">
        <Title title="FEAUTURED" subTitle="TOURS" />
        <div className="section-center featured-center">
          {tours.map((tour)=>{
            const {id,img,date,title,text,country,duration,price} = tour;
            return(
              <article className="tour-card" key={id}>
            <div className="tour-img-container">
              <img src={img} className="tour-img" alt="" />
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{title}</h4>
              </div>
              <p>
                {text}
              </p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  {country}
                </p>
                <p>{duration}</p>
                <p>{price}</p>
              </div>
            </div>
          </article>
            )
          })}
        
        </div>
      </section>
    </div>
  );
};

export default Tour;
