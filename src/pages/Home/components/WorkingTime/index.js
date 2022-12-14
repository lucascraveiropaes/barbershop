import strings from "utilities/strings";
import workingTime from "assets/img/working-time.jpeg";

export default function WorkingTime() {
  return (
    <div className="container-xxl py-5" id="horarios">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="h-100">
              <img className="img-fluid h-100" src={ workingTime } alt={ strings.workingTime.title } style={{ objectFit: "cover" }}/>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="bg-secondary h-100 d-flex flex-column justify-content-center p-5">
              <p className="d-inline-flex bg-dark text-primary py-1 px-4 me-auto">{ strings.workingTime.title }</p>
              <h1 className="text-uppercase mb-4">{ strings.workingTime.subtitle }</h1>
              <div>
                { strings.workingTime.days.map(item =>
                  <div className="d-flex justify-content-between border-bottom py-2" key={ item.day }>
                    <h6 className="text-uppercase mb-0">{ item.day }</h6>
                    <span className="text-uppercase text-primary">{ item.time }</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
