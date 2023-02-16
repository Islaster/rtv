import "./helping.css";

export default function HelpingHand() {
  return (
    <section className="helping text-center">
      <h1 className="h1Helping">Giving a helping hand for our people!</h1>
      <p className="purpleline"></p>
      <br />
      <h4 className="h4">Retraining the Village has a success rate of 86%</h4>
      <br />
      <div className="container text-center">
        <div className="row" id="center">
          <div className="col-md-3" id="helpingCol">
            <img
              className="movingImg helpingImg"
              src="/rtvImages/asset5.jpeg"
              alt="men and families"
            />
            <h4 className="helpH4 h4">
              <span className="helpSpan blue-text">500</span>
              <br />
              Men & Families Served
            </h4>
          </div>
          <div className="col-md-3" id="helpingCol">
            <img
              className="movingImg helpingImg"
              src="/rtvImages/asset6.jpeg"
              alt="Jobs gained"
            />
            <h4 className="helpH4 h4">
              <span className="helpSpan blue-text">1000</span>
              <br />
              Jobs Gained by Our Clients
            </h4>
          </div>
          <div className="col-md-3" id="helpingCol">
            <img
              className="movingImg helpingImg"
              src="/rtvImages/asset7.jpeg"
              alt="E-Courses"
            />
            <h4 className="helpH4 h4">
              <span className="helpSpan blue-text">10</span>
              <br />
              E-Courses
            </h4>
          </div>
          <div className="col-md-3" id="helpingCol">
            <img
              src="/rtvImages/asset8.png"
              className="movingImg helpingImg"
              alt="Volunteers"
            />
            <h4 className="helpH4 h4">
              <span className="helpSpan blue-text">300</span>
              <br />
              Volunteers
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
