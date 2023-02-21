import "./mission.css";

export default function Mission() {
  return (
    <section className="mission">
      <div className="container misCont" id="text-center">
        <h2 className="mish2">
          <b>"It takes a village to change one person at a time"</b>
        </h2>
        <h5 className="darkPurpleText">
          <b>-Halley Irene Crumb, Founder</b>
        </h5>
      </div>
      <div className="container misCont" id="text-center">
        <h1>Our Mission</h1>
        <p className="purpleline"></p>
        <br />
        <div className="container text-left">
          <div className="row">
            <div className="col-md-12">
              <h4 className="mish4">
                <span className="darkPurpleText boldText">Reintroduce</span> the
                possiblities of change by becoming stabilized in a home-like
                environment
              </h4>
              <h4 className="mish4">
                <span className="boldText tealTextDark">Reignite</span> positive
                behavioral conduct
              </h4>
              <h4 className="misbh4">
                <span className="darkPurpleText boldText">Redirect</span>{" "}
                mindsets to employment, permanent housing, family reunification,
                and independence.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
