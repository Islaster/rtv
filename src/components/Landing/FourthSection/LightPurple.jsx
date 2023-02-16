import "./LP.css";

export default function LightPurple() {
  return (
    <section className="lpCon" style={{ backgroundColor: "#e6e8ff" }}>
      <div className="container" style={{ backgroundColor: "#e6e8ff" }}>
        <div className="row">
          <div className="col-md-7 lpCol">
            <img
              src="/rtvSvgs/asset9.svg"
              alt="village"
              className="movingImg lpImg"
            />
            <p className="lpP purpleLineLeftThick">
              Retraining the Village opened in 2012 in a dramatically renovated
              home at{" "}
              <a
                className="darkBlueText a"
                href="https://www.google.com/maps?ll=37.473364,-122.149613&z=9&t=m&hl=en&gl=US&mapclient=embed&q=2399+Menalto+Ave+East+Palo+Alto,+CA+94303"
                target="_blank"
                rel="noopener noreferrer"
              >
                2399 Menalto Ave in East Palo Alto, California.
              </a>
              <br />
            </p>
          </div>
          <div className="col-md-5 darkPurpleBackground">
            <video
              className="lpVideo"
              src="https://retrainingthevillage.org/images/groupBarbequeVideo.mov"
              controls
            />
          </div>
        </div>
        <div className="row ">
          <div className="col-md-5 darkGreyBackground">
            <h2 className="lpH2 whiteText">
              <span className="lpSpan lightTealText">We prepare </span>
              <br />
              our clients with the skills and tools they need to excel and
              thrive.
            </h2>
          </div>
          <div className="col-md-7 lightTealBackground">
            <img
              src="/rtvSvgs/asset10.svg"
              alt="asset10"
              className="movingImg lpImg2"
            />
            <p className="lpP tealLineLeftThick">
              As a{" "}
              <span className="darkPurpleText">
                bridge between homelessness and permanent housing,
              </span>{" "}
              the non-profit was started by Halley Crumb, who had worked as a
              Medical Technologist for the VA for over 10 years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
