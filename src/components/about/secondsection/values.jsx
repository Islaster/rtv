import "./value.css";

export default function Values() {
  return (
    <section>
      <div className="container" id="text-center">
        <h1 className="valh1">Our Values</h1>
        <p className="purpleline"></p>
        <br />
      </div>
      <div className="container" id="text-center">
        <div className="row">
          <div className="col-md-3">
            <img
              src="/rtvSvgs/asset11.svg"
              alt=""
              className="values-img movingImg"
            />
            <h4 className="blue-text valword">Accountability</h4>
          </div>
          <div className="col-md-3">
            <img
              src="/rtvSvgs/asset12.svg"
              alt=""
              className="values-img movingImg"
            />
            <h4 className="valword blue-text">Cost-effectiveness</h4>
          </div>
          <div className="col-md-3">
            <img
              src="/rtvSvgs/asset13.svg"
              alt=""
              className="values-img movingImg"
            />
            <h4 className="valword blue-text">Reliability</h4>
          </div>
          <div className="col-md-3">
            <img
              src="/rtvSvgs/asset14.svg"
              alt=""
              className="values-img movingImg"
            />
            <h4 className="valword blue-text">Personal Service</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
