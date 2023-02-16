import "./One.css";
export default function One() {
  return (
    <section className="HeaderSection">
      <div className="container" id="headerContent">
        <div className="row rowMargin">
          <div className="col-md-6">
            <p
              className="pHeader"
              style={{
                overflowWrap: "break-word",
              }}
            >
              Retrain&shy;ing the Village
            </p>
            <h5 className="h5Header">
              Our Mission: To serve as a bridge between homelessness and
              permanent housing in the San Francisco Bay Area.
            </h5>
          </div>

          <div className="col-md-6">
            <video
              className="headerVid"
              src="https://retrainingthevillage.org/images/rtv/rtvVideo.mp4"
              controls
            />
          </div>
        </div>
      </div>
    </section>
  );
}
