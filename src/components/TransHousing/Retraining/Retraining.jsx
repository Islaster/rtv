import "./styles.css";

export default function Retraining() {
  return (
    <section className="lightPurpleBackground">
      <div className="container rtCont">
        <div className="row">
          <div className="col-md-6 whiteBackground transHousBack"></div>
          <div className="col-md-6 darkPurpleBackground rtCol">
            <h3 className="rtH3">
              <span className="rtSpan lightPurpleText">
                Retraining the Village
              </span>
              <br />
              offers transitional housing for veterans and men
              <br />
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 darkGreyBackground rtvCol2">
            <h2 className="rtH2">
              <span className="rtSpan2 lightTealText">RTV</span>
              <br /> has transitional houses in East Palo Alto and Madera.
              <br />
            </h2>
          </div>
          <div className="col-md-7 lightTealBackground">
            <img
              src="/rtvSvgs/asset2.svg"
              alt=""
              className="rtImg2 movingImg"
            />
            <p className="rtP2">
              In addition to housing, we also provide{" "}
              <span className="darkPurpleText">
                meals and showers, career training, and mental and behavioral
                health support.
                <br />
                <br />
              </span>
              We recently opened up{" "}
              <span className="darkPurpleText">
                another transitional housing center
              </span>{" "}
              in East Palo Alto in August 2020. We are excited to have a new
              classroom and{" "}
              <span className="darkPurpleText">additional career training</span>{" "}
              and{" "}
              <span className="darkPurpleText">computer training courses</span>{" "}
              for our clients!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
