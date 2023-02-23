import "./vet.css";

export default function Veteran() {
  return (
    <section className="vet">
      <div className="container">
        <div className="row vRow">
          <div className="col-md-3">
            <img
              src="/rtvImages/asset58.jpg"
              alt=""
              className="vetImg tealBorder movingImg"
            />
          </div>
          <div className="col-md-9">
            <h3 className="vetH3">
              Richard is a veteran and one of our former clients!
              <br />
              <br />
              Through the Retraining the Village program, he was able to get his
              own permanent housing and has been
              <br />{" "}
              <span className="blue-text">
                independently living in his first apartment for the past 4
                years.
              </span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
